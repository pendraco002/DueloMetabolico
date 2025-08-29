import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Keyboard,
  ScrollView,
} from 'react-native';
import { useGame, gameSelectors } from '../context/GameContext';
import { cardsDatabase, validateAnswer } from '../data/cardsDatabase.js';
import { colors, typography, spacing, borderRadius, shadows, globalStyles } from '../styles/theme';

const GameScreen = ({ navigation }) => {
  const { state, dispatch, actions } = useGame();
  const [userAnswer, setUserAnswer] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const currentPlayer = gameSelectors.getCurrentPlayer(state);
  const currentHint = gameSelectors.getCurrentHint(state);
  const remainingAttempts = gameSelectors.getRemainingAttempts(state);
  const isGameActive = gameSelectors.isGameActive(state);

  // Iniciar o jogo se ainda não foi iniciado
  useEffect(() => {
    if (!state.gameStarted && state.gameMode && state.gameType) {
      dispatch({
        type: actions.START_GAME,
        payload: { allCards: cardsDatabase },
      });
    }
  }, [state.gameMode, state.gameType, state.gameStarted]);

  // Limpar feedback após alguns segundos
  useEffect(() => {
    if (state.feedback) {
      const timer = setTimeout(() => {
        dispatch({ type: actions.CLEAR_FEEDBACK });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.feedback]);

  // Navegar para resultados quando o jogo terminar
  useEffect(() => {
    if (state.gameFinished) {
      navigation.navigate('Results');
    }
  }, [state.gameFinished]);

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      Alert.alert('Atenção', 'Digite uma resposta antes de continuar.');
      return;
    }

    const isCorrect = validateAnswer(userAnswer, state.currentCard.resposta);
    
    dispatch({
      type: actions.SUBMIT_ANSWER,
      payload: {
        answer: userAnswer.trim(),
        isCorrect,
      },
    });

    setUserAnswer('');
    Keyboard.dismiss();
  };

  const handleRequestHint = () => {
    if (state.currentHintLevel < 3) {
      dispatch({ type: actions.REQUEST_HINT });
    }
  };

  const handleNextCard = () => {
    // Se for modo dupla, trocar jogador
    if (state.gameMode === 'dupla') {
      dispatch({ type: actions.NEXT_PLAYER });
    }
    
    dispatch({ type: actions.NEXT_CARD });
    setUserAnswer('');
  };

  const handleGoHome = () => {
    Alert.alert(
      'Sair do Jogo',
      'Tem certeza que deseja sair? Seu progresso será perdido.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sair', 
          style: 'destructive',
          onPress: () => {
            dispatch({ type: actions.RESET_GAME });
            navigation.navigate('Home');
          }
        },
      ]
    );
  };

  if (!isGameActive || !state.currentCard) {
    return (
      <SafeAreaView style={globalStyles.centerContent}>
        <Text style={globalStyles.body}>Carregando jogo...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={handleGoHome} style={styles.exitButton}>
              <Text style={styles.exitButtonText}>✕</Text>
            </TouchableOpacity>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>
                {state.currentCardIndex + 1} de {state.cards.length}
              </Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>
                {gameSelectors.getTotalScore(state, currentPlayer)} pts
              </Text>
            </View>
          </View>

          {/* Player Info (for dupla mode) */}
          {state.gameMode === 'dupla' && (
            <View style={styles.playerInfo}>
              <Text style={styles.currentPlayerText}>
                Vez de: {currentPlayer}
              </Text>
            </View>
          )}

          {/* Category Badge */}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {state.currentCard.categoria}
            </Text>
          </View>
        </View>

        {/* Game Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Hint Card */}
          <View style={styles.hintCard}>
            <View style={styles.hintHeader}>
              <Text style={styles.hintLevel}>
                Dica {state.currentHintLevel}
              </Text>
              <Text style={styles.hintPoints}>
                {currentHint?.pontos} pontos
              </Text>
            </View>
            <Text style={styles.hintText}>
              {currentHint?.texto}
            </Text>
          </View>

          {/* Feedback */}
          {state.feedback && (
            <View style={[
              styles.feedbackCard,
              state.feedback.type === 'success' ? styles.successFeedback : styles.errorFeedback
            ]}>
              <Text style={[
                styles.feedbackText,
                state.feedback.type === 'success' ? styles.successText : styles.errorText
              ]}>
                {state.feedback.message}
              </Text>
            </View>
          )}

          {/* Explanation (shown after answer) */}
          {state.showExplanation && (
            <View style={styles.explanationCard}>
              <Text style={styles.explanationTitle}>💡 Explicação</Text>
              <Text style={styles.explanationText}>
                {state.currentCard.explicacao}
              </Text>
            </View>
          )}
        </ScrollView>

        {/* Input and Actions */}
        <View style={styles.inputContainer}>
          {!state.showExplanation ? (
            <>
              {/* Answer Input */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[
                    styles.answerInput,
                    isInputFocused && styles.inputFocused
                  ]}
                  placeholder="Digite sua resposta..."
                  value={userAnswer}
                  onChangeText={setUserAnswer}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  onSubmitEditing={handleSubmitAnswer}
                  returnKeyType="done"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Text style={styles.attemptsText}>
                  {remainingAttempts} tentativas restantes
                </Text>
              </View>

              {/* Action Buttons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[globalStyles.button, styles.actionButton]}
                  onPress={handleSubmitAnswer}
                  disabled={!userAnswer.trim()}
                >
                  <Text style={globalStyles.buttonText}>Adivinhar</Text>
                </TouchableOpacity>

                {state.currentHintLevel < 3 && (
                  <TouchableOpacity
                    style={[globalStyles.button, globalStyles.secondaryButton, styles.actionButton]}
                    onPress={handleRequestHint}
                  >
                    <Text style={globalStyles.secondaryButtonText}>
                      Solicitar Dica
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          ) : (
            /* Next Card Button */
            <TouchableOpacity
              style={[globalStyles.button, styles.nextButton]}
              onPress={handleNextCard}
            >
              <Text style={globalStyles.buttonText}>
                {state.currentCardIndex + 1 < state.cards.length ? 'Próxima Carta' : 'Ver Resultados'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  exitButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButtonText: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
  },
  progressText: {
    ...typography.caption,
    fontWeight: '600',
  },
  scoreContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
  },
  scoreText: {
    ...typography.caption,
    color: colors.textLight,
    fontWeight: '600',
  },
  playerInfo: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  currentPlayerText: {
    ...typography.subtitle,
    color: colors.primary,
    fontWeight: 'bold',
  },
  categoryBadge: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
  },
  categoryText: {
    ...typography.caption,
    color: colors.textLight,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  hintCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginTop: spacing.lg,
    ...shadows.medium,
  },
  hintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  hintLevel: {
    ...typography.subtitle,
    color: colors.primary,
  },
  hintPoints: {
    ...typography.body,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  hintText: {
    ...typography.hint,
    lineHeight: 24,
  },
  feedbackCard: {
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  successFeedback: {
    backgroundColor: colors.secondary + '20',
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  errorFeedback: {
    backgroundColor: colors.error + '20',
    borderColor: colors.error,
    borderWidth: 1,
  },
  feedbackText: {
    ...typography.body,
    textAlign: 'center',
    fontWeight: '600',
  },
  successText: {
    color: colors.secondary,
  },
  errorText: {
    color: colors.error,
  },
  explanationCard: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginTop: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  explanationTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  explanationText: {
    ...typography.body,
    lineHeight: 22,
  },
  inputContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  inputWrapper: {
    marginBottom: spacing.md,
  },
  answerInput: {
    ...globalStyles.input,
    fontSize: 18,
    textAlign: 'center',
  },
  inputFocused: {
    ...globalStyles.inputFocused,
  },
  attemptsText: {
    ...typography.caption,
    textAlign: 'center',
    marginTop: spacing.xs,
    color: colors.textSecondary,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  nextButton: {
    width: '100%',
  },
});

export default GameScreen;