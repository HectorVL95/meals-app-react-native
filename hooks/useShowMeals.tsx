import {create} from 'zustand'

type useShowMeals = {
  meal_id: string,
  categories: string,
  set_meal_id: (meal_identificator: string) => void
  set_categories: (cat: string) => void
}

export const useShowMeals = create<useShowMeals>((set) => ({
  meal_id: '',
  categories: '',
  set_meal_id: (meal_identificator) => set({ meal_id: meal_identificator }),
  set_categories: (cat) => set({ categories: cat })
}))