'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { Pokemon } from '@/app/types/pokemon';

interface TeamContextType {
  team: Pokemon[];
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (id: number) => void;
  isInTeam: (id: number) => boolean;
}

const TeamContext = createContext<TeamContextType | null>(null);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<Pokemon[]>([]);

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
