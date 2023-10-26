import { create } from "zustand";
import { persist } from 'zustand/middleware';

type favoriteRepositoryState = {
    favoriteRepositoryId: number[],
    addFavoriteRepo: (id: number) => void,
    removeFavoriteRepo: (id:number) => void
}

export const useFavoriteRepositoryStore = create(persist<favoriteRepositoryState>(
    (set) => ({
        favoriteRepositoryId: [],
        addFavoriteRepo: (id) => set((state) => ({
            favoriteRepositoryId: [...state.favoriteRepositoryId, id]
        })),
        removeFavoriteRepo: (id) => set((state) => ({
            favoriteRepositoryId: state.favoriteRepositoryId.filter(eId => eId !== id)
        }))
    }), {name: 'favorite-repository'}
))