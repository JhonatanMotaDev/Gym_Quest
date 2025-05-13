import {
  User,
  DailyQuest,
  Exercise,
  Workout,
  Skill,
  Achievement,
} from '@/types';

// Mock user data
export const mockUser: User = {
  id: 'user1',
  username: 'GymHero',
  level: 5,
  xp: 2350,
  levelProgress: 0.7,
  streak: 3,
  totalWorkoutsCompleted: 24,
  coins: 450,
  joinDate: '2023-10-15',
  avatarUrl: 'https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg',
};

// Mock exercises
export const mockExercises: Exercise[] = [
  {
    id: 'ex1',
    name: 'Push-Ups',
    category: 'strength',
    difficulty: 'beginner',
    targetMuscles: ['chest', 'triceps', 'shoulders'],
    description: 'A classic bodyweight exercise that targets the chest, triceps, and shoulders.',
    instructions: [
      'Start in a plank position with hands slightly wider than shoulder-width apart',
      'Lower your body until your chest nearly touches the floor',
      'Push yourself back up to the starting position',
      'Keep your core tight and body in a straight line throughout the movement'
    ],
    imageUrl: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg',
    reps: 10,
    sets: 3,
    xpReward: 20,
  },
  {
    id: 'ex2',
    name: 'Squats',
    category: 'strength',
    difficulty: 'beginner',
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings'],
    description: 'A compound exercise that targets the muscles in your thighs, hips, and buttocks.',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Bend knees and lower your hips as if sitting in a chair',
      'Keep chest up and knees in line with toes',
      'Lower until thighs are parallel to the ground',
      'Return to starting position'
    ],
    imageUrl: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
    reps: 15,
    sets: 3,
    xpReward: 25,
  },
  {
    id: 'ex3',
    name: 'Plank',
    category: 'strength',
    difficulty: 'beginner',
    targetMuscles: ['core', 'shoulders', 'back'],
    description: 'An isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.',
    instructions: [
      'Start in a forearm plank position with elbows under shoulders',
      'Keep body in a straight line from head to heels',
      'Engage core and glutes',
      'Hold the position for the prescribed time'
    ],
    imageUrl: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg',
    duration: 30,
    sets: 3,
    xpReward: 15,
  },
  {
    id: 'ex4',
    name: 'Jumping Jacks',
    category: 'cardio',
    difficulty: 'beginner',
    targetMuscles: ['full body'],
    description: 'A full-body cardio exercise that increases heart rate and improves coordination.',
    instructions: [
      'Start standing with feet together and arms at sides',
      'Jump and spread legs wide while raising arms overhead',
      'Jump back to starting position',
      'Repeat at a quick pace'
    ],
    imageUrl: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg',
    duration: 60,
    xpReward: 10,
  },
];

// Mock daily quests
export const mockDailyQuests: DailyQuest[] = [
  {
    id: 'quest1',
    title: 'Morning Energizer',
    description: 'Complete a 10-minute morning workout to start your day',
    xpReward: 50,
    coinReward: 15,
    type: 'workout',
    completed: false,
    exercises: [mockExercises[0], mockExercises[1]],
    duration: 10,
    iconName: 'sun',
  },
  {
    id: 'quest2',
    title: 'Push-Up Challenge',
    description: 'Complete 3 sets of push-ups',
    xpReward: 30,
    coinReward: 10,
    type: 'exercise',
    completed: true,
    exercises: [mockExercises[0]],
    progress: 3,
    target: 3,
    iconName: 'trending-up',
  },
  {
    id: 'quest3',
    title: 'Keep The Streak',
    description: 'Log in for 5 consecutive days',
    xpReward: 100,
    coinReward: 25,
    type: 'streak',
    completed: false,
    progress: 3,
    target: 5,
    iconName: 'flame',
  },
];

// Mock workouts
export const mockWorkouts: Workout[] = [
  {
    id: 'workout1',
    name: 'Full Body Starter',
    description: 'A beginner-friendly full-body workout to build strength and endurance.',
    imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    difficulty: 'beginner',
    duration: 15,
    category: 'strength',
    exercises: [mockExercises[0], mockExercises[1], mockExercises[2]],
    xpReward: 100,
    tags: ['beginner', 'full body', 'strength'],
  },
  {
    id: 'workout2',
    name: 'Cardio Blast',
    description: 'A high-energy cardio workout to get your heart pumping.',
    imageUrl: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
    difficulty: 'intermediate',
    duration: 20,
    category: 'cardio',
    exercises: [mockExercises[3], mockExercises[0], mockExercises[3]],
    xpReward: 120,
    tags: ['cardio', 'endurance', 'fat burning'],
  },
  {
    id: 'workout3',
    name: 'Core Crusher',
    description: 'Focus on building a strong core with this targeted workout.',
    imageUrl: 'https://images.pexels.com/photos/6551136/pexels-photo-6551136.jpeg',
    difficulty: 'intermediate',
    duration: 18,
    category: 'strength',
    exercises: [mockExercises[2], mockExercises[1], mockExercises[0]],
    xpReward: 130,
    tags: ['core', 'abs', 'strength'],
  },
];

// Mock skills
export const mockSkills: Skill[] = [
  {
    id: 'skill1',
    name: 'Strength Basics',
    description: 'Learn fundamental strength exercises and proper form.',
    level: 3,
    maxLevel: 5,
    category: 'strength',
    imageUrl: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg',
    unlockedAt: 1,
    progress: 60,
    unlocked: true,
    rewards: {
      xp: 200,
      coins: 50,
      workouts: ['workout1']
    }
  },
  {
    id: 'skill2',
    name: 'Cardio Fundamentals',
    description: 'Master basic cardio exercises to improve endurance.',
    level: 2,
    maxLevel: 5,
    category: 'cardio',
    imageUrl: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg',
    unlockedAt: 1,
    progress: 40,
    unlocked: true,
    rewards: {
      xp: 150,
      coins: 40,
      workouts: ['workout2']
    }
  },
  {
    id: 'skill3',
    name: 'Core Mastery',
    description: 'Advanced techniques for building a strong core.',
    level: 1,
    maxLevel: 5,
    category: 'strength',
    imageUrl: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg',
    unlockedAt: 3,
    progress: 20,
    unlocked: true,
    requiredLevel: 3,
    prerequisites: ['skill1'],
    rewards: {
      xp: 250,
      coins: 60,
      workouts: ['workout3']
    }
  },
  {
    id: 'skill4',
    name: 'Flexibility',
    description: 'Improve your range of motion and prevent injuries.',
    level: 0,
    maxLevel: 5,
    category: 'flexibility',
    imageUrl: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg',
    unlockedAt: 4,
    progress: 0,
    unlocked: false,
    requiredLevel: 5,
    prerequisites: ['skill1', 'skill2'],
    rewards: {
      xp: 300,
      coins: 75
    }
  },
];

// Mock achievements
export const mockAchievements: Achievement[] = [
  {
    id: 'ach1',
    name: 'First Steps',
    description: 'Complete your first workout',
    imageUrl: 'https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg',
    progress: 1,
    target: 1,
    completed: true,
    dateCompleted: '2023-10-16',
    xpReward: 50,
    coinReward: 20,
  },
  {
    id: 'ach2',
    name: 'Consistency Champion',
    description: 'Maintain a 7-day streak',
    imageUrl: 'https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg',
    progress: 3,
    target: 7,
    completed: false,
    xpReward: 150,
    coinReward: 50,
  },
  {
    id: 'ach3',
    name: 'Strength Seeker',
    description: 'Complete 10 strength workouts',
    imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    progress: 6,
    target: 10,
    completed: false,
    xpReward: 200,
    coinReward: 75,
  },
  {
    id: 'ach4',
    name: 'Hidden Potential',
    description: 'Reach level 10',
    imageUrl: 'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg',
    progress: 5,
    target: 10,
    completed: false,
    xpReward: 500,
    coinReward: 150,
    secret: true,
  },
];