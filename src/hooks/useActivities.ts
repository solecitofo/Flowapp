<<<<<<< HEAD
import { useLiveQuery } from 'dexie-react-hooks';
import { db, Activity } from '@/services/db';

export function useActivities() {
  const activities = useLiveQuery(
    () => db.activities.orderBy('createdAt').reverse().toArray(),
    []
  );

  const addActivity = (title: string, description?: string) => {
    return db.activities.add({
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    });
  };

  const toggleActivity = (id: number, current: boolean) => {
    return db.activities.update(id, { completed: !current });
  };

  const removeActivity = (id: number) => {
    return db.activities.delete(id);
  };

  return {
    activities,
    addActivity,
    toggleActivity,
    removeActivity,
  };
=======
import { useLiveQuery } from 'dexie-react-hooks';
import { db, Activity } from '@/services/db';

export function useActivities() {
  const activities = useLiveQuery(
    () => db.activities.orderBy('createdAt').reverse().toArray(),
    []
  );

  const addActivity = (title: string, description?: string) => {
    return db.activities.add({
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    });
  };

  const toggleActivity = (id: number, current: boolean) => {
    return db.activities.update(id, { completed: !current });
  };

  const removeActivity = (id: number) => {
    return db.activities.delete(id);
  };

  return {
    activities,
    addActivity,
    toggleActivity,
    removeActivity,
  };
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
}