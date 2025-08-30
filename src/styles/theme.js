import { StyleSheet } from 'react-native';

// Paleta de cores conforme PRD
export const colors = {
  primary: '#0077B6',      // Azul médico
  secondary: '#28A745',    // Verde sucesso
  error: '#DC3545',        // Vermelho alerta
  warning: '#FFC107',      // Amarelo aviso
  background: '#FFFFFF',   // Branco
  backgroundAlt: '#F8F9FA', // Off-white
  text: '#212529',         // Texto principal
  textSecondary: '#6C757D', // Texto secundário
  textLight: '#FFFFFF',    // Texto claro
  border: '#DEE2E6',       // Bordas
  shadow: '#00000020',     // Sombra
  disabled: '#E9ECEF',     // Desabilitado
  
  // Gradientes
  primaryGradient: ['#0077B6', '#005A8B'],
  successGradient: ['#28A745', '#1E7E34'],
  errorGradient: ['#DC3545', '#C82333'],
};

// Tipografia conforme PRD
export const typography = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text,
  },
  hint: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
  },
  caption: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.textSecondary,
  },
  small: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.textSecondary,
  },
};

// Espaçamentos
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Bordas
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 50,
};

// Sombras
export const shadows = {
  small: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Estilos globais comuns
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 0, // Remove any extra padding
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.medium,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.small,
  },
  buttonText: {
    ...typography.button,
    color: colors.textLight,
  },
  secondaryButton: {
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    ...typography.button,
    color: colors.primary,
  },
  successButton: {
    backgroundColor: colors.secondary,
  },
  errorButton: {
    backgroundColor: colors.error,
  },
  disabledButton: {
    backgroundColor: colors.disabled,
  },
  disabledButtonText: {
    color: colors.textSecondary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: 16,
    backgroundColor: colors.background,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.error,
  },
  title: {
    ...typography.title,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  subtitle: {
    ...typography.subtitle,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  body: {
    ...typography.body,
    lineHeight: 24,
  },
  hint: {
    ...typography.hint,
    lineHeight: 24,
    textAlign: 'center',
  },
  caption: {
    ...typography.caption,
    textAlign: 'center',
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: spacing.xs,
  },
  successText: {
    ...typography.caption,
    color: colors.secondary,
    marginTop: spacing.xs,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  badge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
    alignSelf: 'flex-start',
  },
  badgeText: {
    ...typography.small,
    color: colors.textLight,
    fontWeight: '600',
  },
  successBadge: {
    backgroundColor: colors.secondary,
  },
  errorBadge: {
    backgroundColor: colors.error,
  },
  warningBadge: {
    backgroundColor: colors.warning,
  },
});

// Animações
export const animations = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeInOut: 'ease-in-out',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
  },
};

// Breakpoints para responsividade
export const breakpoints = {
  small: 320,
  medium: 768,
  large: 1024,
};

// Utilitários para estilos condicionais
export const getButtonStyle = (variant = 'primary', disabled = false) => {
  let baseStyle = [globalStyles.button];
  
  if (disabled) {
    baseStyle.push(globalStyles.disabledButton);
  } else {
    switch (variant) {
      case 'secondary':
        baseStyle.push(globalStyles.secondaryButton);
        break;
      case 'success':
        baseStyle.push(globalStyles.successButton);
        break;
      case 'error':
        baseStyle.push(globalStyles.errorButton);
        break;
      default:
        // primary já é o padrão
        break;
    }
  }
  
  return baseStyle;
};

export const getButtonTextStyle = (variant = 'primary', disabled = false) => {
  if (disabled) {
    return [globalStyles.buttonText, globalStyles.disabledButtonText];
  }
  
  switch (variant) {
    case 'secondary':
      return [globalStyles.buttonText, globalStyles.secondaryButtonText];
    default:
      return globalStyles.buttonText;
  }
};

export const getBadgeStyle = (variant = 'primary') => {
  let baseStyle = [globalStyles.badge];
  
  switch (variant) {
    case 'success':
      baseStyle.push(globalStyles.successBadge);
      break;
    case 'error':
      baseStyle.push(globalStyles.errorBadge);
      break;
    case 'warning':
      baseStyle.push(globalStyles.warningBadge);
      break;
    default:
      // primary já é o padrão
      break;
  }
  
  return baseStyle;
};