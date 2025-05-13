import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import { Workout } from '@/types';
import { Clock, Dumbbell, ChevronRight } from 'lucide-react-native';

interface WorkoutCardProps {
  workout: Workout;
  onPress: (workout: Workout) => void;
}

export default function WorkoutCard({ workout, onPress }: WorkoutCardProps) {
  const getDifficultyColor = () => {
    switch (workout.difficulty) {
      case 'beginner':
        return COLORS.secondary;
      case 'intermediate':
        return COLORS.accent;
      case 'advanced':
        return COLORS.error;
      default:
        return COLORS.secondary;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(workout)}
    >
      <Image 
        source={{ uri: workout.imageUrl }} 
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title} numberOfLines={1}>{workout.name}</Text>
          <View 
            style={[
              styles.difficultyBadge, 
              { backgroundColor: getDifficultyColor() }
            ]}
          >
            <Text style={styles.difficultyText}>
              {workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1)}
            </Text>
          </View>
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {workout.description}
        </Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock size={16} color={COLORS.gray} />
            <Text style={styles.metaText}>{workout.duration} min</Text>
          </View>
          
          <View style={styles.metaItem}>
            <Dumbbell size={16} color={COLORS.gray} />
            <Text style={styles.metaText}>{workout.exercises.length} exercises</Text>
          </View>
          
          <View style={styles.xpContainer}>
            <Text style={styles.xpText}>+{workout.xpReward} XP</Text>
            <ChevronRight size={16} color={COLORS.primary} />
          </View>
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
  image: {
    width: '100%',
    height: 140,
  },
  contentContainer: {
    padding: SPACING.m,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  title: {
    ...TYPOGRAPHY.title,
    color: COLORS.black,
    flex: 1,
    marginRight: SPACING.s,
  },
  difficultyBadge: {
    paddingHorizontal: SPACING.s,
    paddingVertical: SPACING.xxs,
    borderRadius: BORDER_RADIUS.full,
  },
  difficultyText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.white,
    fontFamily: 'Inter-Medium',
  },
  description: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
    marginBottom: SPACING.m,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SPACING.m,
  },
  metaText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
    marginLeft: SPACING.xs,
  },
  xpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  xpText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontFamily: 'Inter-Medium',
    marginRight: SPACING.xxs,
  },
});