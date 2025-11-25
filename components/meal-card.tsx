import { View, Text, Image } from "react-native";

type MealCardType = {
  image: string,
  title: string,
  duration: number,
  complexity: string,
  affordability: string
}

const MealCard: React.FC<MealCardType> = ({ image, title, duration, complexity, affordability }) => {
  return (
    <View className="justify-center items-center w-72 mx-8">
      <Image className="w-full h-48" source={{uri: image}}/>
      <View>
        <View className="justify-center items-center">
          <Text className="font-bold">
            {title}
          </Text>
          <View className="w-full flex-row gap-4">
            <Text className="flex-row text-center">
              {duration}m
            </Text>
            <Text className="flex-row text-center">
              {complexity}  
            </Text>
            <Text className="flex-row text-center">
              {affordability}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MealCard;