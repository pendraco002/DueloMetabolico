import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius, shadows, globalStyles } from '../styles/theme';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const menuOptions = [
    {
      id: 'start',
      title: 'Iniciar Duelo',
      subtitle: 'Comece um novo jogo',
      icon: '🎯',
      onPress: () => navigation.navigate('ModeSelection'),
    },
    {
      id: 'howto',
      title: 'Como Jogar',
      subtitle: 'Aprenda as regras',
      icon: '📚',
      onPress: () => navigation.navigate('HowToPlay'),
    },
    {
      id: 'credits',
      title: 'Créditos',
      subtitle: 'Sobre o projeto',
      icon: '👥',
      onPress: () => navigation.navigate('Credits'),
    },
  ];

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🧬</Text>
            <Text style={styles.logoTitle}>Duelo</Text>
            <Text style={styles.logoSubtitle}>Metabólico</Text>
          </View>
          <Text style={styles.tagline}>
            Aprenda metabolismo de forma divertida!
          </Text>
        </View>

        {/* Menu Options */}
        <View style={styles.menuContainer}>
          {menuOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.menuItem}
              onPress={option.onPress}
              activeOpacity={0.8}
            >
              <View style={styles.menuIconContainer}>
                <Text style={styles.menuIcon}>{option.icon}</Text>
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{option.title}</Text>
                <Text style={styles.menuSubtitle}>{option.subtitle}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, spacing.lg) }]}>
          <Text style={styles.footerText}>
            Versão 1.0.0 • Desenvolvido para estudantes de saúde
          </Text>
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
    alignItems: 'center',
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  logoIcon: {
    fontSize: 64,
    marginBottom: spacing.sm,
  },
  logoTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  logoSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.secondary,
  },
  tagline: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  menuIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  menuIcon: {
    fontSize: 28,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    ...typography.subtitle,
    marginBottom: spacing.xs,
  },
  menuSubtitle: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  menuArrow: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: 'bold',
  },
  footer: {
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  footerText: {
    ...typography.small,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default HomeScreen;