import { useLiveQuery } from 'dexie-react-hooks';
import { db, JournalEntry } from '@/services/db';

export function useJournal() {
  const entries = useLiveQuery(
    () => db.journal.orderBy('createdAt').reverse().toArray(),
    []
  );

  const addEntry = (content: string) => {
    return db.journal.add({
      content,
      createdAt: new Date().toISOString(),
    });
  };

  const removeEntry = (id: number) => {
    return db.journal.delete(id);
  };

  return {
    entries,
    addEntry,
    removeEntry,
  };
}