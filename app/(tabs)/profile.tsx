import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import { mockUser, mockWorkouts } from '@/data/mockData';
import { Settings, ChevronRight, Calendar, Dumbbell, Award, Gift, Trophy, Clock } from 'lucide-react-native';

export default function ProfileScreen() {
  const [user] = useState(mockUser);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color={COLORS.white} />
        </TouchableOpacity>
        
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: user.avatarUrl }} 
            style={styles.avatar}
          />
        </View>
        
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.joinDate}>Member since {new Date(user.joinDate).toLocaleDateString()}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.level}</Text>
            <Text style={styles.statLabel}>LEVEL</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.streak}</Text>
            <Text style={styles.statLabel}>STREAK</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.totalWorkoutsCompleted}</Text>
            <Text style={styles.statLabel}>WORKOUTS</Text>
          </View>
        </View>
      </View>
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Activity</Text>
        
        <View style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <Calendar size={20} color={COLORS.primary} />
            <Text style={styles.activityTitle}>This Week</Text>
          </View>
          
          <View style={styles.weekContainer}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <View key={index} style={styles.dayContainer}>
                <View 
                  style={[
                    styles.dayIndicator,
                    index < 3 && styles.activeDayIndicator
                  ]}
                />
                <Text style={styles.dayText}>{day}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Dumbbell size={20} color={COLORS.primary} />
            </View>
            <Text style={styles.menuText}>Workout History</Text>
            <ChevronRight size={16} color={COLORS.gray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Award size={20} color={COLORS.accent} />
            </View>
            <Text style={styles.menuText}>Achievements</Text>
            <ChevronRight size={16} color={COLORS.gray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Gift size={20} color={COLORS.secondary} />
            </View>
            <Text style={styles.menuText}>Rewards</Text>
            <ChevronRight size={16} color={COLORS.gray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Trophy size={20} color={COLORS.success} />
            </View>
            <Text style={styles.menuText}>Challenges</Text>
            <ChevronRight size={16} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Stats Overview</Text>
        
        <View style={styles.statsCard}>
          <View style={styles.statRow}>
            <View style={styles.statDetail}>
              <Clock size={18} color={COLORS.primary} />
              <View style={styles.statTextContainer}>
                <Text style={styles.statName}>Training Time</Text>
                <Text style={styles.statDetailValue}>12h 45m</Text>
              </View>
            </View>
            
            <View style={styles.statDetail}>
              <Dumbbell size={18} color={COLORS.primary} />
              <View style={styles.statTextContainer}>
                <Text style={styles.statName}>Total Workouts</Text>
                <Text style={styles.statDetailValue}>{user.totalWorkoutsCompleted}</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.statRow}>
            <View style={styles.statDetail}>
              <Award size={18} color={COLORS.primary} />
              <View style={styles.statTextContainer}>
                <Text style={styles.statName}>Achievements</Text>
                <Text style={styles.statDetailValue}>5/20</Text>
              </View>
            </View>
            
            <View style={styles.statDetail}>
              <Gift size={18} color={COLORS.primary} />
              <View style={styles.statTextContainer}>
                <Text style={styles.statName}>Coins Earned</Text>
                <Text style={styles.statDetailValue}>{user.coins}</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: COLORS.primary,
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.xl,
    alignItems: 'center',
    borderBottomLeftRadius: BORDER_RADIUS.xl,
    borderBottomRightRadius: BORDER_RADIUS.xl,
  },
  settingsButton: {
    position: 'absolute',
    top: SPACING.xxxl,
    right: SPACING.l,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: COLORS.white,
    marginBottom: SPACING.m,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    ...TYPOGRAPHY.h2,
    color: COLORS.white,
  },
  joinDate: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.white,
    opacity: 0.8,
    marginTop: SPACING.xs,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BORDER_RADIUS.m,
    paddingVertical: SPACING.m,
    paddingHorizontal: SPACING.l,
    marginTop: SPACING.l,
    width: '90%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...TYPOGRAPHY.h3,
    color: COLORS.white,
  },
  statLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.white,
    opacity: 0.8,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.l,
    paddingBottom: SPACING.xxl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.black,
    marginBottom: SPACING.m,
    marginTop: SPACING.l,
  },
  activityCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.m,
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
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.m,
  },
  activityTitle: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.black,
    marginLeft: SPACING.s,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.grayLight,
    marginBottom: SPACING.xs,
  },
  activeDayIndicator: {
    backgroundColor: COLORS.secondary,
  },
  dayText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.gray,
  },
  menuSection: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    marginTop: SPACING.l,
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.m,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.m,
  },
  menuText: {
    ...TYPOGRAPHY.body,
    color: COLORS.black,
    flex: 1,
  },
  statsCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.m,
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
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.m,
  },
  statDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
  },
  statTextContainer: {
    marginLeft: SPACING.s,
  },
  statName: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
  },
  statDetailValue: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.black,
  },
  buttonContainer: {
    marginTop: SPACING.xl,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.m,
    paddingVertical: SPACING.m,
    alignItems: 'center',
  },
  buttonText: {
    ...TYPOGRAPHY.button,
    color: COLORS.white,
  },
});