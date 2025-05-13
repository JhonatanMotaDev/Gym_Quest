import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import StatusBar from '@/components/StatusBar';
import QuestCard from '@/components/QuestCard';
import WorkoutCard from '@/components/WorkoutCard';
import { mockUser, mockDailyQuests, mockWorkouts } from '@/data/mockData';
import { DailyQuest, Workout } from '@/types';
import { ChevronRight, Award, Gift } from 'lucide-react-native';

export default function HomeScreen() {
  const [user] = useState(mockUser);
  const [dailyQuests] = useState(mockDailyQuests);
  const [featuredWorkouts] = useState(mockWorkouts.slice(0, 2));
  
  const handleQuestPress = (quest: DailyQuest) => {
    console.log('Quest pressed:', quest.id);
  };
  
  const handleWorkoutPress = (workout: Workout) => {
    console.log('Workout pressed:', workout.id);
  };
  
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.greeting}>
              Hello, <Text style={styles.username}>{user.username}</Text>
            </Text>
            <Text style={styles.subtitle}>Ready for today's challenge?</Text>
          </View>
          
          <TouchableOpacity style={styles.avatarContainer}>
            <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
          </TouchableOpacity>
        </View>
        
        <StatusBar 
          level={user.level}
          xp={user.xp}
          levelProgress={user.levelProgress}
          streak={user.streak}
          coins={user.coins}
        />
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daily Quests</Text>
          <Text style={styles.questsCompletionText}>
            {dailyQuests.filter(q => q.completed).length}/{dailyQuests.length} Completed
          </Text>
        </View>
        
        {dailyQuests.map((quest) => (
          <QuestCard 
            key={quest.id} 
            quest={quest} 
            onPress={handleQuestPress} 
          />
        ))}
        
        <View style={styles.streakContainer}>
          <View style={styles.streakContent}>
            <Award size={24} color={COLORS.accent} />
            <View style={styles.streakTextContainer}>
              <Text style={styles.streakTitle}>
                {user.streak} Day Streak!
              </Text>
              <Text style={styles.streakDescription}>
                Keep it up for bonus rewards
              </Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.streakButton}>
            <Gift size={18} color={COLORS.white} />
            <Text style={styles.streakButtonText}>Claim</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Workouts</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
            <ChevronRight size={16} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        
        {featuredWorkouts.map((workout) => (
          <WorkoutCard 
            key={workout.id} 
            workout={workout} 
            onPress={handleWorkoutPress} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.m,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.l,
    paddingHorizontal: SPACING.m,
  },
  userInfo: {
    flex: 1,
  },
  greeting: {
    ...TYPOGRAPHY.h2,
    color: COLORS.black,
  },
  username: {
    color: COLORS.primary,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.gray,
    marginTop: SPACING.xs,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
      web: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      default: {}, // fallback seguro
    }),
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.l,
    marginBottom: SPACING.m,
    paddingHorizontal: SPACING.m,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.black,
  },
  questsCompletionText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
  },
  streakContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.m,
    marginTop: SPACING.m,
    marginBottom: SPACING.m,
    flexDirection: 'row',
    alignItems: 'center',
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
      default: {},
    }),
  },
  streakContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakTextContainer: {
    marginLeft: SPACING.m,
  },
  streakTitle: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.black,
  },
  streakDescription: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
  },
  streakButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 8,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakButtonText: {
    ...TYPOGRAPHY.button,
    color: COLORS.white,
    marginLeft: SPACING.xs,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    marginRight: SPACING.xxs,
  },
});
