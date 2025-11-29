import {create} from 'zustand'

type useFavoriteMealsTypes = {
  favorite_meals: string[],
  set_favorite_meals: (set: string) => void,
}

export const useFavoriteMeals = create<useFavoriteMealsTypes>((set) => ({
  favorite_meals: [],
  set_favorite_meals: (meal: string) => set((state) => ({favorite_meals: [...state.favorite_meals, meal]})),
}))