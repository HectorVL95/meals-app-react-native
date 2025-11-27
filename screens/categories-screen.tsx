import { FlatList, View } from "react-native";
import { CATEGORIES } from "data/dummy-data";
import CategorySquare from "components/category-square";
import { useNavigation } from "@react-navigation/native";
import { useShowMeals } from "hooks/useShowMeals";


const CategoriesScreen = () => {
  const navigation = useNavigation()
  const { set_categories } = useShowMeals()

  const handle_navigation = (id: string) => {
    navigation.navigate('Meals')
    set_categories(id)
  }

  return (
    <FlatList
      numColumns={2}
      contentContainerClassName="items-center justify-center"
      columnWrapperStyle={{gap: 24}}
      style={{paddingTop: 24, paddingBottom: 24, backgroundColor: '#64372ce1'}}
      ItemSeparatorComponent={() => <View style={{height: 24}} />}
      data={CATEGORIES}
      renderItem={(cat) => <CategorySquare category={cat.item.title} color={cat.item.color} on_press={() => handle_navigation(cat.item.id)} />}
      keyExtractor={cat => cat.id}
    />
  );
}

export default CategoriesScreen;