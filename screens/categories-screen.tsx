import { FlatList } from "react-native";
import { CATEGORIES } from "data/dummy-data";
import CategorySquare from "components/category-square";
import { useNavigation } from "@react-navigation/native";


const CategoriesScreen = () => {
  const navigation = useNavigation()

  return (
    <FlatList
      numColumns={2}
      contentContainerClassName="flex-1 items-center justify-center px-8"
      data={CATEGORIES}
      renderItem={(cat) => <CategorySquare category={cat.item.title} color={cat.item.color} on_press={() => navigation.navigate('Meals')} />}
      keyExtractor={cat => cat.id}
      style={{ gap: 24 }}
    />
  );
}

export default CategoriesScreen;