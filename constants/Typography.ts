import { StyleSheet } from 'react-native';

export const FONTS = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
};

export const FONT_SIZES = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 22,
  xxl: 28,
  xxxl: 36,
};

export const TYPOGRAPHY = StyleSheet.create({
  h1: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xxxl,
    lineHeight: FONT_SIZES.xxxl * 1.2,
  },
  h2: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xxl,
    lineHeight: FONT_SIZES.xxl * 1.2,
  },
  h3: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xl,
    lineHeight: FONT_SIZES.xl * 1.2,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.l,
    lineHeight: FONT_SIZES.l * 1.3,
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.m,
    lineHeight: FONT_SIZES.m * 1.3,
  },
  body: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.m,
    lineHeight: FONT_SIZES.m * 1.5,
  },
  bodySmall: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.s,
    lineHeight: FONT_SIZES.s * 1.5,
  },
  caption: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.xs,
    lineHeight: FONT_SIZES.xs * 1.5,
  },
  button: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.m,
    lineHeight: FONT_SIZES.m * 1.5,
  },
});