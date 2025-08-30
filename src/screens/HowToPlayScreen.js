import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius, shadows, globalStyles } from '../styles/theme';

const HowToPlayScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const sections = [
    {
      title: '🎯 Objetivo do Jogo',
      content: 'Teste seus conhecimentos sobre metabolismo e sistemas biológicos através de um quiz com dicas progressivas. Quanto menos dicas usar, mais pontos você ganha!',
    },
    {
      title: '🎮 Modos de Jogo',
      content: [
        '• Modo Individual: Jogue sozinho e teste seus conhecimentos',
        '• Duelo Rápido: 10 cartas aleatórias para uma partida rápida',
        '• Prática Focada: Escolha um sistema específico para estudar',
        '• Modo Dupla: Jogue com um amigo no sistema "Passa e Joga"',
      ],
    },
    {
      title: '💡 Sistema de Dicas',
      content: [
        'Cada carta possui 3 dicas progressivas:',
        '• Dica 1: Mais difícil - 15 pontos',
        '• Dica 2: Média dificuldade - 10 pontos',
        '• Dica 3: Mais fácil - 5 pontos',
        '',
        'Você tem 3 tentativas por dica antes de passar para a próxima.',
      ],
    },
    {
      title: '🎯 Como Jogar',
      content: [
        '1. Leia a primeira dica com atenção',
        '2. Digite sua resposta no campo de texto',
        '3. Pressione "Adivinhar" para verificar',
        '4. Se errar, tente novamente ou solicite uma nova dica',
        '5. Após acertar ou esgotar as dicas, leia a explicação educacional',
        '6. Continue para a próxima carta',
      ],
    },
    {
      title: '📊 Pontuação',
      content: [
        'Sua pontuação depende de quantas dicas você usou:',
        '• Acertou na 1ª dica: 15 pontos',
        '• Acertou na 2ª dica: 10 pontos',
        '• Acertou na 3ª dica: 5 pontos',
        '• Não acertou: 0 pontos',
        '',
        'No modo dupla, os jogadores alternam turnos e competem pela maior pontuação.',
      ],
    },
    {
      title: '🏆 Dicas de Estudo',
      content: [
        '• Leia cada dica com calma e pense antes de responder',
        '• Use o modo Prática Focada para estudar temas específicos',
        '• Preste atenção nas explicações para aprender mais',
        '• Revise suas respostas na tela de resultados',
        '• Jogue regularmente para fixar o conhecimento',
      ],
    },
  ];

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Como Jogar</Text>
          <Text style={styles.subtitle}>
            Guia completo do Duelo Metabólico
          </Text>
        </View>

        {/* Content */}
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {sections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.sectionContent}>
                {Array.isArray(section.content) ? (
                  section.content.map((item, itemIndex) => (
                    <Text key={itemIndex} style={styles.sectionText}>
                      {item}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.sectionText}>{section.content}</Text>
                )}
              </View>
            </View>
          ))}

          {/* Tips Box */}
          <View style={styles.tipsBox}>
            <Text style={styles.tipsTitle}>💡 Dica Especial</Text>
            <Text style={styles.tipsText}>
              As respostas não diferenciam maiúsculas de minúsculas e ignoram acentos. 
              Você pode digitar "glicose" ou "Glicose" que ambas serão aceitas!
            </Text>
          </View>
        </ScrollView>

        {/* Footer Button */}
        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={globalStyles.buttonText}>Entendi, Vamos Jogar!</Text>
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
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  sectionContent: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  sectionText: {
    ...typography.body,
    lineHeight: 22,
    marginBottom: spacing.xs,
  },
  tipsBox: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.md,
    ...shadows.small,
  },
  tipsTitle: {
    ...typography.subtitle,
    color: colors.textLight,
    marginBottom: spacing.sm,
  },
  tipsText: {
    ...typography.body,
    color: colors.textLight,
    lineHeight: 22,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default HowToPlayScreen;