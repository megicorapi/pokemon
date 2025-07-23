'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Pokemon } from '@/types/pokemon';

interface TeamContextType {
  team: Pokemon[];
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (id: number) => void;
  isInTeam: (id: number) => boolean;
}

const TeamContext = createContext<TeamContextType | null>(null);
const LOCAL_STORAGE_KEY = 'pokemon-team';

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setTeam(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse saved team:', e);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(team));
    }
  }, [team, isHydrated]);

  const addToTeam = (pokemon: Pokemon) => {
    setTeam((prev) =>
      prev.find((p) => p.id === pokemon.id) ? prev : [...prev, pokemon]
    );
  };

  const removeFromTeam = (id: number) => {
    setTeam((prev) => prev.filter((p) => p.id !== id));
  };

  const isInTeam = (id: number) => {
    return team.some((p) => p.id === id);
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam, isInTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
};
