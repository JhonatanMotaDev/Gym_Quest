import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import { Skill } from '@/types';
import { Lock } from 'lucide-react-native';

interface SkillCardProps {
  skill: Skill;
  onPress: (skill: Skill) => void;
}

export default function SkillCard({ skill, onPress }: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        !skill.unlocked && styles.lockedContainer
      ]}
      onPress={() => onPress(skill)}
      disabled={!skill.unlocked}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: skill.imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />
        {!skill.unlocked && (
          <View style={styles.lockOverlay}>
            <Lock size={24} color={COLORS.white} />
            <Text style={styles.lockText}>Level {skill.requiredLevel}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>{skill.name}</Text>
        
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>
            Level {skill.level}/{skill.maxLevel}
          </Text>
          
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar,
                { width: `${(skill.level / skill.maxLevel) * 100}%` }
              ]} 
            />
          </View>
        </View>
        
        {skill.unlocked && skill.progress > 0 && (
          <View style={styles.currentProgressContainer}>
            <View style={styles.currentProgressBarContainer}>
              <View 
                style={[
                  styles.currentProgressBar,
                  { width: `${skill.progress}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>{skill.progress}%</Text>
          </View>
        )}
        
        <View style={styles.rewardsContainer}>
          <Text style={styles.rewardText}>+{skill.rewards.xp} XP</Text>
          <Text style={styles.rewardText}>+{skill.rewards.coins} coins</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    marginBottom: SPACING.m,
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
  lockedContainer: {
    opacity: 0.7,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.white,
    marginTop: SPACING.xs,
  },
  contentContainer: {
    padding: SPACING.m,
  },
  title: {
    ...TYPOGRAPHY.title,
    color: COLORS.black,
    marginBottom: SPACING.s,
  },
  levelContainer: {
    marginBottom: SPACING.s,
  },
  levelText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.grayDark,
    marginBottom: SPACING.xs,
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
  currentProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.s,
  },
  currentProgressBarContainer: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.grayLight,
    borderRadius: 2,
    marginRight: SPACING.s,
    overflow: 'hidden',
  },
  currentProgressBar: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 2,
  },
  progressText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.grayDark,
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