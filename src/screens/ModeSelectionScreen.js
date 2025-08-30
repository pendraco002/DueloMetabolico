import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGame } from '../context/GameContext';
import { colors, typography, spacing, borderRadius, shadows, globalStyles } from '../styles/theme';
import { getCategories } from '../data/cardsDatabase.js';

// ... existing code ...

const ModeSelectionScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { dispatch, actions } = useGame();
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const categories = getCategories();

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setSelectedType(null);
    setSelectedCategory(null);
    dispatch({ type: actions.SET_GAME_MODE, payload: mode });
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedCategory(null);
    dispatch({ type: actions.SET_GAME_TYPE, payload: type });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    dispatch({ type: actions.SET_SELECTED_CATEGORY, payload: category });
  };

  const handleStartGame = () => {
    // Validações
    if (!selectedMode || !selectedType) {
      Alert.alert('Atenção', 'Selecione o modo e tipo de jogo.');
      return;
    }

    if (selectedType === 'focado' && !selectedCategory) {
      Alert.alert('Atenção', 'Selecione uma categoria para a prática focada.');
      return;
    }

    if (selectedMode === 'dupla') {
      if (!player1Name.trim() || !player2Name.trim()) {
        Alert.alert('Atenção', 'Digite os nomes dos dois jogadores.');
        return;
      }
      if (player1Name.trim() === player2Name.trim()) {
        Alert.alert('Atenção', 'Os nomes dos jogadores devem ser diferentes.');
        return;
      }
      dispatch({
        type: actions.SET_PLAYERS,
        payload: [player1Name.trim(), player2Name.trim()]
      });
    } else if (selectedMode === 'individual') {
      // Ensure individual player is set
      dispatch({
        type: actions.SET_PLAYERS,
        payload: ['Jogador']
      });
    }

    navigation.navigate('Game');
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Configurar Jogo</Text>
          <Text style={styles.subtitle}>
            Escolha como você quer jogar
          </Text>
        </View>

        {/* Mode Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎮 Modo de Jogo</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedMode === 'individual' && styles.selectedOption
              ]}
              onPress={() => handleModeSelect('individual')}
            >
              <Text style={styles.optionIcon}>👤</Text>
              <Text style={styles.optionTitle}>Individual</Text>
              <Text style={styles.optionDescription}>
                Jogue sozinho e teste seus conhecimentos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedMode === 'dupla' && styles.selectedOption
              ]}
              onPress={() => handleModeSelect('dupla')}
            >
              <Text style={styles.optionIcon}>👥</Text>
              <Text style={styles.optionTitle}>Dupla</Text>
              <Text style={styles.optionDescription}>
                Desafie um amigo no sistema "Passa e Joga"
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Type Selection */}
        {selectedMode && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⚡ Tipo de Jogo</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  selectedType === 'rapido' && styles.selectedOption
                ]}
                onPress={() => handleTypeSelect('rapido')}
              >
                <Text style={styles.optionIcon}>🚀</Text>
                <Text style={styles.optionTitle}>Duelo Rápido</Text>
                <Text style={styles.optionDescription}>
                  10 cartas aleatórias para uma partida rápida
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.optionCard,
                  selectedType === 'focado' && styles.selectedOption
                ]}
                onPress={() => handleTypeSelect('focado')}
              >
                <Text style={styles.optionIcon}>🎯</Text>
                <Text style={styles.optionTitle}>Prática Focada</Text>
                <Text style={styles.optionDescription}>
                  Escolha um sistema específico para estudar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Category Selection */}
        {selectedType === 'focado' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📚 Categoria</Text>
            <View style={styles.categoriesContainer}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryChip,
                    selectedCategory === category && styles.selectedCategory
                  ]}
                  onPress={() => handleCategorySelect(category)}
                >
                  <Text style={[
                    styles.categoryText,
                    selectedCategory === category && styles.selectedCategoryText
                  ]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Player Names (for dupla mode) */}
        {selectedMode === 'dupla' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✏️ Nomes dos Jogadores</Text>
            <View style={styles.playersContainer}>
              <View style={styles.playerInput}>
                <Text style={styles.playerLabel}>Jogador 1</Text>
                <TextInput
                  style={styles.nameInput}
                  placeholder="Digite o nome do jogador 1"
                  value={player1Name}
                  onChangeText={setPlayer1Name}
                  maxLength={20}
                />
              </View>
              
              <View style={styles.playerInput}>
                <Text style={styles.playerLabel}>Jogador 2</Text>
                <TextInput
                  style={styles.nameInput}
                  placeholder="Digite o nome do jogador 2"
                  value={player2Name}
                  onChangeText={setPlayer2Name}
                  maxLength={20}
                />
              </View>
            </View>
          </View>
        )}

        {/* Start Button */}
        {selectedMode && selectedType && (
          <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
            <TouchableOpacity
              style={globalStyles.button}
              onPress={handleStartGame}
            >
              <Text style={globalStyles.buttonText}>
                🎮 Iniciar Jogo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[globalStyles.button, globalStyles.secondaryButton, styles.backButton]}
              onPress={() => navigation.goBack()}
            >
              <Text style={globalStyles.secondaryButtonText}>
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  optionsContainer: {
    gap: spacing.md,
  },
  optionCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    ...shadows.small,
  },
  selectedOption: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  optionIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  optionTitle: {
    ...typography.subtitle,
    marginBottom: spacing.xs,
  },
  optionDescription: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  categoryChip: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.round,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedCategory: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    ...typography.body,
    color: colors.text,
  },
  selectedCategoryText: {
    color: colors.textLight,
  },
  playersContainer: {
    gap: spacing.md,
  },
  playerInput: {
    gap: spacing.xs,
  },
  playerLabel: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },
  nameInput: {
    ...globalStyles.input,
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },
  backButton: {
    marginTop: spacing.sm,
  },
});

export default ModeSelectionScreen;