import { useLiveQuery } from 'dexie-react-hooks';
import { db, MoodEntry } from '@/services/db';

export function useMoods() {
  const moods = useLiveQuery(() => db.moods.orderBy('createdAt').reverse().toArray(), []);

  const addMood = (value: number, note?: string) => {
    return db.moods.add({
      value,
      note,
      createdAt: new Date().toISOString(),
    });
  };

  return { moods, addMood };
}
