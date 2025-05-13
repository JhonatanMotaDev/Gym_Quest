export const COLORS = {
  primary: '#3267E3',
  primaryLight: '#5388FF',
  primaryDark: '#1E4FC1',
  
  secondary: '#21D375',
  secondaryLight: '#4DF29A',
  secondaryDark: '#0CA854',
  
  accent: '#FF8A47',
  accentLight: '#FFA973',
  accentDark: '#E66D2C',
  
  success: '#00C48C',
  warning: '#FFD166',
  error: '#FF647C',
  
  gray: '#757575',
  grayLight: '#E5E5E5',
  grayDark: '#424242',
  
  black: '#222222',
  white: '#FFFFFF',
  
  background: '#F9F9F9',
  card: '#FFFFFF',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
};