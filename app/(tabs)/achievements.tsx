import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import AchievementCard from '@/components/AchievementCard';
import { mockAchievements, mockUser } from '@/data/mockData';
import { Award, Gift } from 'lucide-react-native';

export default function AchievementsScreen() {
  const [achievements] = useState(mockAchievements);
  const [user] = useState(mockUser);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'inProgress'
  
  const completedCount = achievements.filter(a => a.completed).length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);
  
  const filteredAchievements = achievements.filter(achievement => {
    if (filter === 'all') return true;
    if (filter === 'completed') return achievement.completed;
    if (filter === 'inProgress') return !achievement.completed;
    return true;
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Achievements</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar,
                { width: `${completionPercentage}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {completedCount}/{totalCount} ({completionPercentage}%)
          </Text>
        </View>
      </View>
      
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Award size={24} color={COLORS.primary} />
          <Text style={styles.statValue}>{completedCount}</Text>
          <Text style={styles.statLabel}>UNLOCKED</Text>
        </View>
        
        <View style={styles.statDivider} />
        
        <View style={styles.statItem}>
          <Gift size={24} color={COLORS.secondary} />
          <Text style={styles.statValue}>{totalCount - completedCount}</Text>
          <Text style={styles.statLabel}>REMAINING</Text>
        </View>
      </View>
      
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'all' && styles.activeFilterButton
          ]}
          onPress={() => setFilter('all')}
        >
          <Text 
            style={[
              styles.filterText,
              filter === 'all' && styles.activeFilterText
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'completed' && styles.activeFilterButton
          ]}
          onPress={() => setFilter('completed')}
        >
          <Text 
            style={[
              styles.filterText,
              filter === 'completed' && styles.activeFilterText
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'inProgress' && styles.activeFilterButton
          ]}
          onPress={() => setFilter('inProgress')}
        >
          <Text 
            style={[
              styles.filterText,
              filter === 'inProgress' && styles.activeFilterText
            ]}
          >
            In Progress
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.achievementsList}
        contentContainerStyle={styles.achievementsContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No achievements found</Text>
            <Text style={styles.emptySubtext}>
              {filter === 'completed' 
                ? 'Complete achievements to see them here!' 
                : 'Try changing your filter options'}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.accent,
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.l,
  },
  headerTitle: {
    ...TYPOGRAPHY.h1,
    color: COLORS.white,
    marginBottom: SPACING.m,
  },
  progressContainer: {
    marginTop: SPACING.s,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginBottom: SPACING.xs,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  progressText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.white,
    textAlign: 'right',
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    marginHorizontal: SPACING.l,
    marginTop: -SPACING.l,
    padding: SPACING.l,
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
      web: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
    }),
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    ...TYPOGRAPHY.h2,
    color: COLORS.black,
    marginVertical: SPACING.xs,
  },
  statLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.gray,
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.grayLight,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginTop: SPACING.l,
    paddingHorizontal: SPACING.l,
    marginBottom: SPACING.m,
  },
  filterButton: {
    flex: 1,
    paddingVertical: SPACING.s,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeFilterButton: {
    borderBottomColor: COLORS.primary,
  },
  filterText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
  },
  activeFilterText: {
    color: COLORS.primary,
    fontFamily: 'Inter-Medium',
  },
  achievementsList: {
    flex: 1,
  },
  achievementsContent: {
    padding: SPACING.l,
    paddingBottom: SPACING.xxl,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xxxl,
  },
  emptyText: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.grayDark,
    textAlign: 'center',
  },
  emptySubtext: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
});