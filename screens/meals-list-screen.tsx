import { FlatList, View } from "react-native";
import { MEALS } from "data/dummy-data";
import MealCard from "components/meal-card";
import { useShowMeals } from "hooks/useShowMeals";
import { useNavigation } from "@react-navigation/native";


const MealsListScreen = () => {
  const { categories } = useShowMeals()
  const navigation = useNavigation()
  const {set_meal_id } = useShowMeals()

  const filteredMeals = categories.trim().length === 0 ? MEALS : MEALS.filter(meal => meal.categoryIds.some((catId: string) => catId.toLowerCase().includes(categories.toLocaleLowerCase())))

  const handle_show_meal_info = (id: string) => {
    navigation.navigate('About')
    set_meal_id(id)
  }

  return (
    <FlatList 
      data={filteredMeals}
      contentContainerClassName="justify-center items-center"
      ItemSeparatorComponent={() => <View style={{height: 48}} />}
      style={{backgroundColor: '#64372ce1', paddingTop: 24, paddingBottom: 24}}
      renderItem={(meal) => {
        return (
          <MealCard
            on_press={() => handle_show_meal_info(meal.item.id)}
            image={meal.item.imageUrl} 
            title={meal.item.title} 
            duration={meal.item.duration}
            complexity={meal.item.complexity}
            affordability={meal.item.affordability}
          />
      )}}
    />
  );
}

export default MealsListScreen;