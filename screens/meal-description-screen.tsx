import { useEffect, useState } from "react";
import { MEALS } from "data/dummy-data";
import { useShowMeals } from "hooks/useShowMeals";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";

type MealDescriptionScreenTypes = {
  image: ''
  title: string,
  ingredients: string[],
  steps: string[],
  duration: string,
  complexity: string,
  affordability: string,
  is_gluten_free: boolean,
  is_vegan: boolean,
  is_vegetarian: boolean,
  is_lactose_free: boolean
}

const MealDescriptionScreen = () => {
  const { meal_id } = useShowMeals()

  const [ meal_info, set_meal_info] = useState<MealDescriptionScreenTypes>({
    image: '',
    title: '',
    ingredients: [],
    steps: [],
    duration: '',
    complexity: '',
    affordability: '',
    is_gluten_free: false,
    is_vegan: false,
    is_vegetarian: false,
    is_lactose_free: false
  })
  
  useEffect(() =>{
    const meal = MEALS.filter(meal => meal.id === meal_id )
    const destructured_meal = meal[0]
    set_meal_info({
      image: destructured_meal.imageUrl,
      title: destructured_meal.title,
      ingredients: destructured_meal.ingredients,
      steps: destructured_meal.steps,
      duration: destructured_meal.duration,
      complexity: destructured_meal.complexity,
      affordability: destructured_meal.affordability,
      is_gluten_free: destructured_meal.isGlutenFree,
      is_vegan: destructured_meal.isVegan,
      is_vegetarian: destructured_meal.isVegetarian,
      is_lactose_free: destructured_meal.isLactoseFree
    })
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#64372ce1', paddingTop: 16}}>
      <View className="justify-center items-center">
        {meal_info.image && (
          <Image
            style={{height:220, width:'100%', maxWidth: 320}}
            source={{ uri: meal_info.image }}
            className="rounded-t-xl"
          />
        )}
        <View style={{backgroundColor: '#fff', width: 320, paddingVertical: 20}} className="justify-center items-center w-full rounded-b-xl">
          <Text className="font-bold">{meal_info.title}</Text>
          <View style={{gap: 24}} className="flex-row w-full justify-center ">
            <Text>{meal_info.duration}m</Text>
            <Text>{meal_info.complexity}</Text>
            <Text>{meal_info.affordability}</Text>
          </View>
        </View>
      </View>
      <View style={{gap: 20}} className="justify-center items-center">
        <View>
          <Text style={{color: '#d1bc95ff'}} className="">Ingredients</Text>
        </View>
        {
          meal_info.ingredients.map((ingredient, index) => {
            return (
              <View key={index} style={{backgroundColor: '#d1bc95ff', paddingVertical: 8}} className="justify-center items-center w-[320px] rounded-2xl px-12">
                <Text  className="text-center text-bold" key={index}>
                  {ingredient}
                </Text>
              </View>

            )
          })
        }
      </View>
      <View style={{gap: 20}} className="justify-center items-center">
        <View>
            <Text style={{color: '#d1bc95ff'}} className="">Ingredients</Text>
        </View>
        {
          meal_info.steps.map((step, index) => {
            return (
              <View key={index} style={{backgroundColor: '#d1bc95ff', paddingVertical: 8}} className="justify-center items-center w-[320px] rounded-2xl px-12">
                <Text  className="text-center text-bold" key={index}>
                  {step}
                </Text>
              </View>
            )
          })
        }
      </View>
      <View className="justify-center items-center">
        <Text style={{color: '#d1bc95ff'}}>
          Miscelaneous
        </Text>
        <View style={{gap: 20}}>
          <View style={{backgroundColor: '#d1bc95ff', paddingVertical: 8}} className="justify-center items-center w-[320px] rounded-2xl px-12">
            <Text>Glutten Free: {meal_info.is_gluten_free ? 'Yes' : 'No'}</Text>
          </View>
          <View style={{backgroundColor: '#d1bc95ff', paddingVertical: 8}} className="justify-center items-center w-[320px] rounded-2xl px-12">
            <Text>Vegan: {meal_info.is_vegan ? 'Yes' : 'No'}</Text>
          </View>
          <View style={{backgroundColor: '#d1bc95ff', paddingVertical: 8}} className="justify-center items-center w-[320px] rounded-2xl px-12">
            <Text>Vegetarian: {meal_info.is_vegetarian  ? 'Yes' : 'No'}</Text>
          </View>
          <View style={{backgroundColor: '#d1bc95ff', paddingVertical: 8}} className="justify-center items-center w-[320px] rounded-2xl px-12">
            <Text>Lactose Free: {meal_info.is_lactose_free  ? 'Yes' : 'No'}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDescriptionScreen;

const styles = StyleSheet.create({
  text: { 
    color: '#ffffff',
   }
})