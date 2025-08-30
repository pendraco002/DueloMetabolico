import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius, shadows, globalStyles } from '../styles/theme';

const CreditsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const teamMembers = [
    {
      name: 'Equipe de Desenvolvimento',
      role: 'Gabriel,Rennan, Thiago e Vitoria',
      description: 'Responsáveis pela criação e implementação do aplicativo',
    },
    {
      name: 'Consultores Acadêmicos',
      role: 'Especialistas em Metabolismo',
      description: 'Validação do conteúdo científico e educacional',
    },
    {
      name: 'Designers UX/UI',
      role: 'Design de Interface',
      description: 'Criação da experiência visual e interativa',
    },
  ];

  const acknowledgments = [
    {
      title: '📚 Conteúdo Educacional',
      description: 'Baseado em literatura científica reconhecida e diretrizes acadêmicas atuais.',
    },
    {
      title: '🎨 Design e Usabilidade',
      description: 'Interface desenvolvida seguindo princípios de acessibilidade e experiência do usuário.',
    },
    {
      title: '🔬 Validação Científica',
      description: 'Todo conteúdo foi revisado por especialistas em bioquímica e metabolismo.',
    },
    {
      title: '🎯 Metodologia Educacional',
      description: 'Sistema de dicas progressivas baseado em técnicas de aprendizagem ativa.',
    },
  ];

  const handleContactPress = () => {
    // Implementar contato (email, site, etc.)
    Linking.openURL('mailto:contato@duelometabolico.com').catch(() => {
      alert('Não foi possível abrir o cliente de email');
    });
  };

  const handleRateApp = () => {
    // Implementar avaliação na loja
    alert('Funcionalidade de avaliação será implementada na versão da loja');
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appIcon}>🧬</Text>
          <Text style={styles.appName}>Duelo Metabólico</Text>
          <Text style={styles.version}>Versão 1.0.0</Text>
          <Text style={styles.tagline}>
            Aprendizado gamificado de metabolismo
          </Text>
        </View>

        {/* Mission */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 Nossa Missão</Text>
          <View style={styles.missionCard}>
            <Text style={styles.missionText}>
              Tornar o aprendizado de metabolismo e sistemas biológicos mais 
              acessível, divertido e eficaz através de uma experiência gamificada 
              que promove o raciocínio dedutivo e a retenção de conhecimento.
            </Text>
          </View>
        </View>

        {/* Team */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👥 Equipe</Text>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.memberCard}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
              <Text style={styles.memberDescription}>{member.description}</Text>
            </View>
          ))}
        </View>

        {/* Acknowledgments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🙏 Reconhecimentos</Text>
          {acknowledgments.map((item, index) => (
            <View key={index} style={styles.acknowledgmentCard}>
              <Text style={styles.acknowledgmentTitle}>{item.title}</Text>
              <Text style={styles.acknowledgmentDescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        {/* Technical Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Informações Técnicas</Text>
          <View style={styles.techCard}>
            <View style={styles.techRow}>
              <Text style={styles.techLabel}>Framework:</Text>
              <Text style={styles.techValue}>React Native + Expo</Text>
            </View>
            <View style={styles.techRow}>
              <Text style={styles.techLabel}>Navegação:</Text>
              <Text style={styles.techValue}>React Navigation 6</Text>
            </View>
            <View style={styles.techRow}>
              <Text style={styles.techLabel}>Base de Dados:</Text>
              <Text style={styles.techValue}>50+ cartas educacionais</Text>
            </View>
            <View style={styles.techRow}>
              <Text style={styles.techLabel}>Compatibilidade:</Text>
              <Text style={styles.techValue}>iOS 13+ • Android 8+</Text>
            </View>
          </View>
        </View>

        {/* Educational Purpose */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📖 Propósito Educacional</Text>
          <View style={styles.purposeCard}>
            <Text style={styles.purposeText}>
              Este aplicativo foi desenvolvido como ferramenta educacional 
              complementar para estudantes da área de saúde. O conteúdo não 
              substitui livros didáticos ou orientação acadêmica formal.
            </Text>
            <Text style={styles.purposeText}>
              Recomendamos o uso em conjunto com materiais de estudo tradicionais 
              e supervisão de professores qualificados.
            </Text>
          </View>
        </View>

        {/* Contact and Feedback */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📞 Contato e Feedback</Text>
          <View style={styles.contactCard}>
            <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
              <Text style={styles.contactButtonText}>📧 Enviar Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton} onPress={handleRateApp}>
              <Text style={styles.contactButtonText}>⭐ Avaliar App</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Copyright */}
        <View style={styles.footer}>
          <Text style={styles.copyright}>
            © 2024 Duelo Metabólico
          </Text>
          <Text style={styles.footerText}>
            Desenvolvido com ❤️ para a educação em saúde
          </Text>
        </View>
      </ScrollView>

      {/* Back Button */}
      <View style={[styles.backButtonContainer, { paddingBottom: Math.max(insets.bottom, spacing.lg) }]}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.buttonText}>Voltar ao Menu</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl + 20, // add extra top padding
    paddingBottom: spacing.lg,
    backgroundColor: colors.backgroundAlt,
  },
  appIcon: {
    fontSize: 64,
    marginBottom: spacing.sm,
  },
  appName: {
    ...typography.title,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  version: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  tagline: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
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
  missionCard: {
    backgroundColor: colors.primary + '10',
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  missionText: {
    ...typography.body,
    lineHeight: 24,
    textAlign: 'justify',
  },
  memberCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  memberName: {
    ...typography.subtitle,
    marginBottom: spacing.xs,
  },
  memberRole: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  memberDescription: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  acknowledgmentCard: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  acknowledgmentTitle: {
    ...typography.body,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  acknowledgmentDescription: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  techCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.small,
  },
  techRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  techLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  techValue: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },
  purposeCard: {
    backgroundColor: colors.secondary + '10',
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  purposeText: {
    ...typography.body,
    lineHeight: 22,
    marginBottom: spacing.sm,
    textAlign: 'justify',
  },
  contactCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.small,
  },
  contactButton: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
  contactButtonText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },
  copyright: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  footerText: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  backButtonContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default CreditsScreen;