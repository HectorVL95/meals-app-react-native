import { View, Text, Image, Pressable } from "react-native";

type MealCardType = {
  on_press: () => void,
  image: string,
  title: string,
  duration: number,
  complexity: string,
  affordability: string
}

const MealCard: React.FC<MealCardType> = ({ on_press, image, title, duration, complexity, affordability }) => {
  return (
    <Pressable onPress={on_press} style={{borderRadius: 24, overflow: "hidden"}} className=" justify-center items-center w-[320px] object-contain">
      <Image className="w-full h-48 rounded-t-xl" source={{uri: image}}/>
      <View className="justify-center items-center bg-[#ffffff] w-full gap-4 py-4 rounded-b-xl">
        <Text className="text-2xl text-center font-bold">
          {title}
        </Text>
        <View className="w-full flex-row gap-4 justify-center items-center">
          <Text className="text-center flex-row text-center">
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
    </Pressable>
  );
}

export default MealCard;