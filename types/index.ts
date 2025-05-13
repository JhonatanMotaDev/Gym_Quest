export interface User {
  id: string;
  username: string;
  level: number;
  xp: number;
  levelProgress: number;
  streak: number;
  totalWorkoutsCompleted: number;
  coins: number;
  joinDate: string;
  avatarUrl: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'balance';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetMuscles: string[];
  description: string;
  instructions: string[];
  imageUrl: string;
  animationUrl?: string;
  duration?: number;
  reps?: number;
  sets?: number;
  xpReward: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  coinReward: number;
  type: 'workout' | 'exercise' | 'streak' | 'special';
  completed: boolean;
  exercises?: Exercise[];
  duration?: number;
  progress?: number;
  target?: number;
  iconName?: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  category: string;
  exercises: Exercise[];
  xpReward: number;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  level: number;
  maxLevel: number;
  category: string;
  imageUrl: string;
  unlockedAt: number;
  progress: number;
  unlocked: boolean;
  requiredLevel?: number;
  prerequisites?: string[];
  rewards: {
    xp: number;
    coins: number;
    workouts?: string[];
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  progress: number;
  target: number;
  completed: boolean;
  dateCompleted?: string;
  xpReward: number;
  coinReward: number;
  secret?: boolean;
}