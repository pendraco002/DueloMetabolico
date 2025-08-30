import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGame, gameSelectors } from '../context/GameContext';
import { colors, typography, spacing, borderRadius, shadows, globalStyles } from '../styles/theme';

const ResultsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { state, dispatch, actions } = useGame();

  const currentPlayer = gameSelectors.getCurrentPlayer(state);
  const totalScore = gameSelectors.getTotalScore(state, currentPlayer);
  const correctAnswers = gameSelectors.getCorrectAnswersCount(state);
  const totalCards = gameSelectors.getTotalCards(state);
  const accuracyRate = gameSelectors.getAccuracyRate(state);

  // Calcular estatísticas para modo dupla
  const getPlayerStats = () => {
    if (state.gameMode === 'individual') {
      return [{
        name: currentPlayer || 'Jogador',
        score: totalScore || 0,
        correct: correctAnswers || 0,
        total: totalCards || 0,
        accuracy: accuracyRate || 0,
      }];
    }

    if (!state.players || !Array.isArray(state.players) || state.players.length === 0) {
      return [];
    }

    return state.players.map(player => {
      const playerHistory = (state.gameHistory || []).filter(h => h.player === player);
      const playerCorrect = playerHistory.filter(h => h.isCorrect).length;
      const playerTotal = playerHistory.length;
      const playerAccuracy = playerTotal > 0 ? Math.round((playerCorrect / playerTotal) * 100) : 0;

      return {
        name: player,
        score: (state.scores && state.scores[player]) || 0,
        correct: playerCorrect,
        total: playerTotal,
        accuracy: playerAccuracy,
      };
    });
  };

  const playerStats = getPlayerStats();
  const winner = playerStats.length > 0 ? playerStats.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  ) : null;

  const handlePlayAgain = () => {
    dispatch({ type: actions.RESET_GAME });
    navigation.navigate('ModeSelection');
  };

  const handleGoHome = () => {
    dispatch({ type: actions.RESET_GAME });
    navigation.navigate('Home');
  };

  const renderStatCard = ({ item: player }) => (
    <View style={[
      styles.statCard,
      winner && player.name === winner.name && styles.winnerCard
    ]}>
      {winner && player.name === winner.name && state.gameMode === 'dupla' && (
        <View style={styles.winnerBadge}>
          <Text style={styles.winnerBadgeText}>🏆 Vencedor</Text>
        </View>
      )}
      
      <Text style={styles.playerName}>{player.name}</Text>
      
      <View style={styles.statRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{player.score}</Text>
          <Text style={styles.statLabel}>Pontos</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{player.correct}/{player.total}</Text>
          <Text style={styles.statLabel}>Acertos</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{player.accuracy}%</Text>
          <Text style={styles.statLabel}>Precisão</Text>
        </View>
      </View>
    </View>
  );

  const renderGameHistoryItem = ({ item, index }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyHeader}>
        <Text style={styles.historyQuestion}>
          {index + 1}. {item.question || 'Pergunta não disponível'}
        </Text>
        <View style={[
          styles.historyBadge,
          item.isCorrect ? styles.correctBadge : styles.incorrectBadge
        ]}>
          <Text style={styles.historyBadgeText}>
            {item.isCorrect ? '✓' : '✗'}
          </Text>
        </View>
      </View>

      <View style={styles.historyDetails}>
        <Text style={styles.historyAnswer}>
          Sua resposta: {item.userAnswer || 'Não respondido'}
        </Text>
        <Text style={styles.historyMeta}>
          {(item.hintsUsed || 0)} dicas • {(item.points || 0)} pontos
          {state.gameMode === 'dupla' && item.player && ` • ${item.player}`}
        </Text>
      </View>
    </View>
  );

  // Safety check - if no game data, show error message
  if (!state.gameStarted && !state.gameFinished) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={[globalStyles.centerContent, { padding: spacing.lg }]}>
          <Text style={globalStyles.title}>Erro</Text>
          <Text style={[globalStyles.body, { textAlign: 'center', marginVertical: spacing.md }]}>
            Não há dados de jogo disponíveis. Por favor, inicie um novo jogo.
          </Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={handleGoHome}
          >
            <Text style={globalStyles.buttonText}>Voltar ao Menu</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {state.gameMode === 'dupla' ? 'Resultado do Duelo' : 'Seus Resultados'}
          </Text>
          <Text style={styles.subtitle}>
            Parabéns! Você completou o desafio
          </Text>
        </View>

        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Player Statistics */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 Estatísticas</Text>
            <FlatList
              data={playerStats}
              renderItem={renderStatCard}
              keyExtractor={(item) => item.name}
              scrollEnabled={false}
            />
          </View>

          {/* Performance Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎯 Resumo da Performance</Text>
            <View style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total de Cartas:</Text>
                <Text style={styles.summaryValue}>{totalCards}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Cartas Completadas:</Text>
                <Text style={styles.summaryValue}>{(state.gameHistory || []).length}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Modo de Jogo:</Text>
                <Text style={styles.summaryValue}>
                  {state.gameMode === 'individual' ? 'Individual' : 'Dupla'} - {' '}
                  {state.gameType === 'rapido' ? 'Duelo Rápido' : 'Prática Focada'}
                </Text>
              </View>
              {state.selectedCategory && (
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Categoria:</Text>
                  <Text style={styles.summaryValue}>{state.selectedCategory}</Text>
                </View>
              )}
            </View>
          </View>

          {/* Game History */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📝 Histórico de Respostas</Text>
            <FlatList
              data={state.gameHistory || []}
              renderItem={renderGameHistoryItem}
              keyExtractor={(item, index) => `${item.cardId || index}-${index}`}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>

        {/* Action Buttons */}
        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
          <TouchableOpacity
            style={[globalStyles.button, styles.actionButton]}
            onPress={handlePlayAgain}
          >
            <Text style={globalStyles.buttonText}>Jogar Novamente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[globalStyles.button, globalStyles.secondaryButton, styles.actionButton]}
            onPress={handleGoHome}
          >
            <Text style={globalStyles.secondaryButtonText}>Menu Principal</Text>
          </TouchableOpacity>
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.backgroundAlt,
  },
  title: {
    ...typography.title,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.lg,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  sectionTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  statCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  winnerCard: {
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  winnerBadge: {
    position: 'absolute',
    top: -spacing.sm,
    right: spacing.md,
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
  },
  winnerBadgeText: {
    ...typography.small,
    color: colors.textLight,
    fontWeight: 'bold',
  },
  playerName: {
    ...typography.subtitle,
    textAlign: 'center',
    marginBottom: spacing.md,
    color: colors.text,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    ...typography.title,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  summaryCard: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  summaryLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  summaryValue: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },
  historyItem: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  historyQuestion: {
    ...typography.body,
    fontWeight: '600',
    flex: 1,
    marginRight: spacing.sm,
  },
  historyBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctBadge: {
    backgroundColor: colors.secondary,
  },
  incorrectBadge: {
    backgroundColor: colors.error,
  },
  historyBadgeText: {
    color: colors.textLight,
    fontSize: 12,
    fontWeight: 'bold',
  },
  historyDetails: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  historyAnswer: {
    ...typography.body,
    marginBottom: spacing.xs,
  },
  historyMeta: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
});

export default ResultsScreen;