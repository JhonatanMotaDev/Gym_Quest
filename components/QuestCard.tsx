import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import { DailyQuest } from '@/types';
import { Flame, Sun, TrendingUp, Trophy, CircleCheck as CheckCircle } from 'lucide-react-native';

interface QuestCardProps {
  quest: DailyQuest;
  onPress: (quest: DailyQuest) => void;
}

export default function QuestCard({ quest, onPress }: QuestCardProps) {
  const getIcon = () => {
    switch (quest.iconName) {
      case 'flame':
        return <Flame size={24} color={quest.completed ? COLORS.grayLight : COLORS.accent} />;
      case 'sun':
        return <Sun size={24} color={quest.completed ? COLORS.grayLight : COLORS.accent} />;
      case 'trending-up':
        return <TrendingUp size={24} color={quest.completed ? COLORS.grayLight : COLORS.accent} />;
      default:
        return <Trophy size={24} color={quest.completed ? COLORS.grayLight : COLORS.accent} />;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        quest.completed && styles.completedContainer
      ]}
      onPress={() => onPress(quest)}
      disabled={quest.completed}
    >
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        
        <View style={styles.textContainer}>
          <Text 
            style={[
              styles.title,
              quest.completed && styles.completedText
            ]}
            numberOfLines={1}
          >
            {quest.title}
          </Text>
          
          <Text 
            style={[
              styles.description,
              quest.completed && styles.completedText
            ]}
            numberOfLines={2}
          >
            {quest.description}
          </Text>
          
          {quest.progress !== undefined && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar,
                    { width: `${(quest.progress / quest.target!) * 100}%` },
                    quest.completed && styles.completedProgressBar
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>
                {quest.progress}/{quest.target}
              </Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.rewardsContainer}>
        {quest.completed ? (
          <CheckCircle size={20} color={COLORS.grayLight} />
        ) : (
          <>
            <View style={styles.reward}>
              <Text style={styles.rewardValue}>{quest.xpReward}</Text>
              <Text style={styles.rewardLabel}>XP</Text>
            </View>
            
            <View style={styles.reward}>
              <Text style={styles.rewardValue}>{quest.coinReward}</Text>
              <Text style={styles.rewardLabel}>COINS</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.m,
    marginBottom: SPACING.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  completedContainer: {
    backgroundColor: COLORS.grayLight,
    opacity: 0.7,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.m,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.m,
  },
  textContainer: {
    flex: 1,
    marginRight: SPACING.s,
  },
  title: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.black,
    marginBottom: SPACING.xs,
  },
  description: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
    marginBottom: SPACING.s,
  },
  completedText: {
    color: COLORS.gray,
    textDecorationLine: 'line-through',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarContainer: {
    flex: 1,
    height: 6,
    backgroundColor: COLORS.grayLight,
    borderRadius: 3,
    marginRight: SPACING.s,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  completedProgressBar: {
    backgroundColor: COLORS.gray,
  },
  progressText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.grayDark,
  },
  rewardsContainer: {
    justifyContent: 'center',
  },
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  rewardValue: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.primary,
    marginRight: SPACING.xxs,
  },
  rewardLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.gray,
  },
});