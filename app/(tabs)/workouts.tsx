import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { SPACING, BORDER_RADIUS } from '@/constants/Spacing';
import { TYPOGRAPHY } from '@/constants/Typography';
import WorkoutCard from '@/components/WorkoutCard';
import { mockWorkouts } from '@/data/mockData';
import { Workout } from '@/types';
import { Search, Filter } from 'lucide-react-native';

const categories = ['All', 'Strength', 'Cardio', 'Flexibility', 'Core'];

export default function WorkoutsScreen() {
  const [workouts] = useState(mockWorkouts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleWorkoutPress = (workout: Workout) => {
    // In a real app, navigate to workout details or start the workout
    console.log('Workout pressed:', workout.id);
  };
  
  const renderCategoryItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item && styles.selectedCategoryItem
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text 
        style={[
          styles.categoryText,
          selectedCategory === item && styles.selectedCategoryText
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
  
  // Filter workouts based on search query and selected category
  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = searchQuery === '' || 
      workout.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workout.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'All' || 
      workout.category.toLowerCase() === selectedCategory.toLowerCase();
      
    return matchesSearch && matchesCategory;
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workouts</Text>
        <Text style={styles.headerSubtitle}>Find your perfect workout</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <Search size={20} color={COLORS.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search workouts..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={COLORS.gray}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesList}
        contentContainerStyle={styles.categoriesContent}
      />
      
      <ScrollView 
        style={styles.workoutsList}
        contentContainerStyle={styles.workoutsContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map(workout => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onPress={handleWorkoutPress}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No workouts found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search or filters</Text>
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
    backgroundColor: COLORS.primary,
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.l,
    borderBottomLeftRadius: BORDER_RADIUS.xl,
    borderBottomRightRadius: BORDER_RADIUS.xl,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    marginHorizontal: SPACING.l,
    marginTop: -SPACING.l,
    paddingHorizontal: SPACING.m,
    paddingVertical: SPACING.s,
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
  searchIcon: {
    marginRight: SPACING.s,
  },
  searchInput: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: COLORS.black,
  },
  filterButton: {
    padding: SPACING.xs,
  },
  categoriesList: {
    marginTop: SPACING.l,
  },
  categoriesContent: {
    paddingHorizontal: SPACING.l,
  },
  categoryItem: {
    paddingHorizontal: SPACING.m,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.white,
    marginRight: SPACING.s,
  },
  selectedCategoryItem: {
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
  workoutsList: {
    flex: 1,
    marginTop: SPACING.l,
  },
  workoutsContent: {
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
  },
  emptySubtext: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.gray,
    marginTop: SPACING.xs,
  },
});