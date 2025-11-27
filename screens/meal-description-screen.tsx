import { ScrollView, Image, View, Text } from "react-native";

type MealDescriptionScreenTypes = {
  image: string,
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

const MealDescriptionScreen: React.FC<MealDescriptionScreenTypes> = ({ image, title, ingredients, steps, duration, complexity, affordability, is_gluten_free, is_vegan, is_vegetarian, is_lactose_free }) => {
  return (
    <ScrollView style={{backgroundColor: '#64372ce1'}}>
      <Image 
        className="w-full h-84"
        source={{uri: image}}
        
      />
      <View>
        <Text>{title}</Text>
        <View>
          <Text>{duration}m</Text>
          <Text>{complexity}</Text>
          <Text>{affordability}</Text>
        </View>
      </View>
      <View>
        {ingredients}
      </View>
      <View>
        {steps}
      </View>
      <View>
        <Text>Glutten Free: {is_gluten_free}</Text>
        <Text>Vegan: {is_vegan}</Text>
        <Text>Vegetarian: {is_vegetarian}</Text>
        <Text>Lactose Free: {is_lactose_free}</Text>
      </View>
    </ScrollView>
  );
}

export default MealDescriptionScreen;