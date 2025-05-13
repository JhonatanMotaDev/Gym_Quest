import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import SkillCard from '@/components/SkillCard';
import { mockSkills, mockUser } from '@/data/mockData';
import { Skill } from '@/types';
import { BookOpen, Info } from 'lucide-react-native';

const categories = ['All', 'Strength', 'Cardio', 'Flexibility'];

export default function SkillsScreen() {
  const [skills] = useState(mockSkills);
  const [user] = useState(mockUser);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleSkillPress = (skill: Skill) => {
    // In a real app, navigate to skill details or start training
    console.log('Skill pressed:', skill.id);
  };
  
  const filteredSkills = skills.filter(skill => 
    selectedCategory === 'All' || skill.category.toLowerCase() === selectedCategory.toLowerCase()
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Skill Tree</Text>
          <Text style={styles.headerSubtitle}>Level up your fitness abilities</Text>
          
          <View style={styles.levelInfo}>
            <Text style={styles.levelText}>Your Level: {user.level}</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Info size={16} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.headerGraphic}>
          <BookOpen size={60} color={COLORS.white} style={{ opacity: 0.2 }} />
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text 
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoCardText}>
          Skills are unlocked as you level up. Complete workouts to earn XP and unlock new skills!
        </Text>
      </View>
      
      <ScrollView 
        style={styles.skillsList}
        contentContainerStyle={styles.skillsContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredSkills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onPress={handleSkillPress}
          />
        ))}
        
        <View style={styles.comingSoonContainer}>
          <Text style={styles.comingSoonTitle}>More Skills Coming Soon</Text>
          <Text style={styles.comingSoonSubtitle}>
            Keep training to unlock new abilities and workout types
          </Text>
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
    backgroundColor: COLORS.primaryDark,
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.l,
    borderBottomLeftRadius: BORDER_RADIUS.xl,
    borderBottomRightRadius: BORDER_RADIUS.xl,
    flexDirection: 'row',
  },
  headerContent: {
    flex: 3,
  },
  headerGraphic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...TYPOGRAPHY.h1,
    color: COLORS.white,
  },
  headerSubtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.white,
    opacity: 0.8,
    marginTop: SPACING.xs,
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.m,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignSelf: 'flex-start',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.m,
    borderRadius: BORDER_RADIUS.full,
  },
  levelText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.white,
    fontFamily: 'Inter-Medium',
  },
  infoButton: {
    marginLeft: SPACING.s,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: SPACING.l,
    paddingHorizontal: SPACING.l,
    flexWrap: 'wrap',
  },
  categoryButton: {
    paddingHorizontal: SPACING.m,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.white,
    marginRight: SPACING.s,
    marginBottom: SPACING.s,
  },
  selectedCategoryButton: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
  },
  selectedCategoryText: {
    color: COLORS.white,
    fontFamily: 'Inter-Medium',
  },
  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.m,
    marginHorizontal: SPACING.l,
    marginTop: SPACING.m,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  infoCardText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.grayDark,
    textAlign: 'center',
  },
  skillsList: {
    flex: 1,
    marginTop: SPACING.m,
  },
  skillsContent: {
    padding: SPACING.l,
    paddingBottom: SPACING.xxl,
  },
  comingSoonContainer: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.l,
    alignItems: 'center',
    marginTop: SPACING.m,
    opacity: 0.8,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
      web: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
    }),
  },
  comingSoonTitle: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.grayDark,
    textAlign: 'center',
  },
  comingSoonSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
});