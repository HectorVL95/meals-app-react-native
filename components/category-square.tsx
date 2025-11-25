import { Text, Pressable } from "react-native";

type CategorySquareTypes = {
  category: string,
  color: string
  on_press: () => void
}

const CategorySquare: React.FC<CategorySquareTypes> = ({ category, color, on_press }) => {
  return (
    <Pressable onPress={on_press} className={`w-48 h-48 justify-center items-center rounded-2xl m-4`}
    style={{backgroundColor: color}}>
      <Text className="text-[#000000] font-bold text-center">
        {category}
      </Text>
    </Pressable>
  );
}

export default CategorySquare;