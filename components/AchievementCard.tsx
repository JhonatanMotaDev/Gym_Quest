import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import { Achievement } from '@/types';
import { CircleCheck as CheckCircle, Lock } from 'lucide-react-native';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const isSecret = achievement.secret && !achievement.completed;
  
  return (
    <View 
      style={[
        styles.container,
        achievement.completed && styles.completedContainer,
        isSecret && styles.secretContainer
      ]}
    >
      <View style={styles.imageContainer}>
        {isSecret ? (
          <View style={styles.secretImagePlaceholder}>
            <Lock size={32} color={COLORS.grayLight} />
          </View>
        ) : (
          <Image 
            source={{ uri: achievement.imageUrl }} 
            style={styles.image}
            resizeMode="cover"
          />
        )}
        
        {achievement.completed && (
          <View style={styles.completedBadge}>
            <CheckCircle size={20} color={COLORS.white} fill={COLORS.success} />
          </View>
        )}
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {isSecret ? 'Secret Achievement' : achievement.name}
        </Text>
        
        <Text style={styles.description} numberOfLines={2}>
          {isSecret ? 'Keep working out to unlock this achievement!' : achievement.description}
        </Text>
        
        {!isSecret && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View 
                style={[
                  styles.progressBar,
                  { width: `${(achievement.progress / achievement.target) * 100}%` },
                  achievement.completed && styles.completedProgressBar
                ]} 
              />
            </View>
            <Text style={styles.progressText}>
              {achievement.progress}/{achievement.target}
            </Text>
          </View>
        )}
        
        {achievement.completed ? (
          <Text style={styles.completedText}>
            Completed on {new Date(achievement.dateCompleted!).toLocaleDateString()}
          </Text>
        ) : !isSecret ? (
          <View style={styles.rewardsContainer}>
            <Text style={styles.rewardText}>+{achievement.xpReward} XP</Text>
            <Text style={styles.rewardText}>+{achievement.coinReward} coins</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    marginBottom: SPACING.m,
    flexDirection: 'row',
    overflow: 'hidden',
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
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  secretContainer: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.grayDark,
  },
  imageContainer: {
    position: 'relative',
    width: 80,
    height: 80,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  secretImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.grayDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.full,
    padding: 2,
  },
  contentContainer: {
    flex: 1,
    padding: SPACING.m,
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
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.s,
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
    backgroundColor: COLORS.success,
  },
  progressText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.grayDark,
  },
  completedText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.success,
  },
  rewardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontFamily: 'Inter-Medium',
  },
});