<<<<<<< HEAD
import Dexie from 'dexie';
import type { Table } from 'dexie';

// ========================================
// INTERFACES - Estructura de datos
// ========================================

export interface Activity {
  id?: number;
  timestamp: number;
  activity: string;
  motivation?: string;
  moodBefore?: number;
  moodAfter: number;
  moodChange: number; // moodAfter - moodBefore
  observations: string[];
  notes?: string;
  completed: boolean;
  category?: string;
}

export interface JournalEntry {
  id?: number;
  timestamp: number;
  type: 'free' | 'prompt' | 'checkin';
  content: string;
  mood?: number;
  prompt?: string;
  flagged: boolean;
  tags?: string[];
}

export interface UserSettings {
  id?: number;
  name?: string;
  tone: 'warm' | 'neutral' | 'gentle';
  notifications: boolean;
  notificationTime?: string;
  onboardingCompleted: boolean;
  createdAt: number;
}

export interface PlannedActivity {
  id?: number;
  activityName: string;
  scheduledFor?: number;
  weekDay?: number; // 0-6
  completed: boolean;
  completedAt?: number;
  createdAt: number;
}

// ========================================
// CLASE DE BASE DE DATOS
// ========================================

export class FlowDatabase extends Dexie {
  activities!: Table<Activity, number>;
  journal!: Table<JournalEntry, number>;
  settings!: Table<UserSettings, number>;
  plannedActivities!: Table<PlannedActivity, number>;

  constructor() {
    super('FlowDB');

    this.version(1).stores({
      activities: '++id, timestamp, completed, moodAfter, category',
      journal: '++id, timestamp, type, flagged',
      settings: '++id',
      plannedActivities: '++id, scheduledFor, completed, createdAt'
    });
  }
}

export const db = new FlowDatabase();

// ========================================
// HELPERS
// ========================================

export const dbHelpers = {
  async initializeSettings() {
    const count = await db.settings.count();
    if (count === 0) {
      await db.settings.add({
        tone: 'warm',
        notifications: false,
        onboardingCompleted: false,
        createdAt: Date.now()
      });
    }
  },

  async clearAllData() {
    await db.activities.clear();
    await db.journal.clear();
    await db.plannedActivities.clear();
  },

  async getRecentActivities(days: number = 7): Promise<Activity[]> {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    return db.activities
      .where('timestamp')
      .above(cutoff)
      .reverse()
      .sortBy('timestamp');
  }
=======
import Dexie from 'dexie';
import type { Table } from 'dexie';

// ========================================
// INTERFACES - Estructura de datos
// ========================================

export interface Activity {
  id?: number;
  timestamp: number;
  activity: string;
  motivation?: string;
  moodBefore?: number;
  moodAfter: number;
  moodChange: number; // moodAfter - moodBefore
  observations: string[];
  notes?: string;
  completed: boolean;
  category?: string;
}

export interface JournalEntry {
  id?: number;
  timestamp: number;
  type: 'free' | 'prompt' | 'checkin';
  content: string;
  mood?: number;
  prompt?: string;
  flagged: boolean;
  tags?: string[];
}

export interface UserSettings {
  id?: number;
  name?: string;
  tone: 'warm' | 'neutral' | 'gentle';
  notifications: boolean;
  notificationTime?: string;
  onboardingCompleted: boolean;
  createdAt: number;
}

export interface PlannedActivity {
  id?: number;
  activityName: string;
  scheduledFor?: number;
  weekDay?: number; // 0-6
  completed: boolean;
  completedAt?: number;
  createdAt: number;
}

// ========================================
// CLASE DE BASE DE DATOS
// ========================================

export class FlowDatabase extends Dexie {
  activities!: Table<Activity, number>;
  journal!: Table<JournalEntry, number>;
  settings!: Table<UserSettings, number>;
  plannedActivities!: Table<PlannedActivity, number>;

  constructor() {
    super('FlowDB');

    this.version(1).stores({
      activities: '++id, timestamp, completed, moodAfter, category',
      journal: '++id, timestamp, type, flagged',
      settings: '++id',
      plannedActivities: '++id, scheduledFor, completed, createdAt'
    });
  }
}

export const db = new FlowDatabase();

// ========================================
// HELPERS
// ========================================

export const dbHelpers = {
  async initializeSettings() {
    const count = await db.settings.count();
    if (count === 0) {
      await db.settings.add({
        tone: 'warm',
        notifications: false,
        onboardingCompleted: false,
        createdAt: Date.now()
      });
    }
  },

  async clearAllData() {
    await db.activities.clear();
    await db.journal.clear();
    await db.plannedActivities.clear();
  },

  async getRecentActivities(days: number = 7): Promise<Activity[]> {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    return db.activities
      .where('timestamp')
      .above(cutoff)
      .reverse()
      .sortBy('timestamp');
  }
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
};