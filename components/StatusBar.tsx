import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';

interface StatusBarProps {
  level: number;
  xp: number;
  levelProgress: number;
  streak: number;
  coins: number;
}

export default function StatusBar({
  level,
  xp,
  levelProgress,
  streak,
  coins,
}: StatusBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Text style={styles.statValue}>{level}</Text>
        <Text style={styles.statLabel}>LEVEL</Text>
      </View>
      
      <View style={styles.xpContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.xpLabel}>XP: {xp}</Text>
          <Text style={styles.xpPercentage}>{Math.round(levelProgress * 100)}%</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${levelProgress * 100}%` }]} />
        </View>
      </View>
      
      <View style={styles.statContainer}>
        <Text style={styles.statValue}>{streak}</Text>
        <Text style={styles.statLabel}>STREAK</Text>
      </View>
      
      <View style={styles.statContainer}>
        <Text style={styles.statValue}>{coins}</Text>
        <Text style={styles.statLabel}>COINS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.s,
    padding: SPACING.m,
    marginHorizontal: SPACING.m,
    marginBottom: SPACING.m,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
      web: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
    }),
  },
  statContainer: {
    alignItems: 'center',
    padding: SPACING.xs,
    minWidth: 50,
  },
  statValue: {
    ...TYPOGRAPHY.h3,
    color: COLORS.black,
  },
  statLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.gray,
    marginTop: 2,
  },
  xpContainer: {
    flex: 1,
    marginHorizontal: SPACING.m,
    justifyContent: 'center',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  xpLabel: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.grayDark,
  },
  xpPercentage: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: COLORS.grayLight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
});