<<<<<<< HEAD
import { create } from 'zustand';
import { db } from '../services/db';


interface AppState {
  isOnboarded: boolean;
  userName?: string;
  tone: 'warm' | 'neutral' | 'gentle';
  isLoading: boolean;

  checkOnboarding: () => Promise<void>;
  completeOnboarding: (settings: { name?: string; tone: 'warm' | 'neutral' | 'gentle' }) => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isOnboarded: false,
  userName: undefined,
  tone: 'warm',
  isLoading: true,

  checkOnboarding: async () => {
    try {
      const settings = await db.settings.toArray();
      if (settings.length > 0 && settings[0].onboardingCompleted) {
        set({
          isOnboarded: true,
          userName: settings[0].name,
          tone: settings[0].tone,
          isLoading: false
        });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.error('Error checking onboarding:', error);
      set({ isLoading: false });
    }
  },

  completeOnboarding: async (settings) => {
    try {
      const existing = await db.settings.toArray();

      if (existing.length > 0) {
        await db.settings.update(existing[0].id!, {
          ...settings,
          onboardingCompleted: true
        });
      } else {
        await db.settings.add({
          ...settings,
          onboardingCompleted: true,
          notifications: false,
          createdAt: Date.now()
        });
      }

      set({
        isOnboarded: true,
        userName: settings.name,
        tone: settings.tone
      });
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  },

  setLoading: (loading) => set({ isLoading: loading })
=======
import { create } from 'zustand';
import { db } from '../services/db';


interface AppState {
  isOnboarded: boolean;
  userName?: string;
  tone: 'warm' | 'neutral' | 'gentle';
  isLoading: boolean;

  checkOnboarding: () => Promise<void>;
  completeOnboarding: (settings: { name?: string; tone: 'warm' | 'neutral' | 'gentle' }) => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isOnboarded: false,
  userName: undefined,
  tone: 'warm',
  isLoading: true,

  checkOnboarding: async () => {
    try {
      const settings = await db.settings.toArray();
      if (settings.length > 0 && settings[0].onboardingCompleted) {
        set({
          isOnboarded: true,
          userName: settings[0].name,
          tone: settings[0].tone,
          isLoading: false
        });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.error('Error checking onboarding:', error);
      set({ isLoading: false });
    }
  },

  completeOnboarding: async (settings) => {
    try {
      const existing = await db.settings.toArray();

      if (existing.length > 0) {
        await db.settings.update(existing[0].id!, {
          ...settings,
          onboardingCompleted: true
        });
      } else {
        await db.settings.add({
          ...settings,
          onboardingCompleted: true,
          notifications: false,
          createdAt: Date.now()
        });
      }

      set({
        isOnboarded: true,
        userName: settings.name,
        tone: settings.tone
      });
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  },

  setLoading: (loading) => set({ isLoading: loading })
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
}));