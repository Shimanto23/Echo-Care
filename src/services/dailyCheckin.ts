import { DailyCheckin, StoredDailyCheckin } from '../types/dailyCheckin';
import { getFromStorage, setToStorage, STORAGE_KEYS } from '../utils/storageUtils';

export const saveDailyCheckin = async (checkin: DailyCheckin): Promise<StoredDailyCheckin> => {
  const checkins = getFromStorage<StoredDailyCheckin[]>(STORAGE_KEYS.DAILY_CHECKINS, []);
  
  const newCheckin: StoredDailyCheckin = {
    ...checkin,
    id: Date.now(),
    timestamp: new Date().toISOString()
  };
  
  checkins.push(newCheckin);
  setToStorage(STORAGE_KEYS.DAILY_CHECKINS, checkins);
  
  return newCheckin;
};

export const getDailyCheckins = (): StoredDailyCheckin[] => {
  return getFromStorage<StoredDailyCheckin[]>(STORAGE_KEYS.DAILY_CHECKINS, []);
};

export const getDailyCheckinById = (id: number): StoredDailyCheckin | undefined => {
  const checkins = getDailyCheckins();
  return checkins.find(checkin => checkin.id === id);
};

export const deleteDailyCheckin = (id: number): void => {
  const checkins = getDailyCheckins();
  const filteredCheckins = checkins.filter(checkin => checkin.id !== id);
  setToStorage(STORAGE_KEYS.DAILY_CHECKINS, filteredCheckins);
};