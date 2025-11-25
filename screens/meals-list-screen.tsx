import { FlatList } from "react-native";
import { MEALS } from "data/dummy-data";
import MealCard from "components/meal-card";


const MealsListScreen = () => {
  return (
    <FlatList 
      data={MEALS}
      contentContainerClassName="justify-center items-center"
      style={{gap: 24}}
      renderItem={(meal) =>{ 
        return (
          <MealCard
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