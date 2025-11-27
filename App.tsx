import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from 'screens/categories-screen';
import { NavigationContainer } from '@react-navigation/native';
import MealsListScreen from 'screens/meals-list-screen';
import MealDescriptionScreen from 'screens/meal-description-screen';
import './global.css';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#d432008e',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff'
        }
      }}>
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='Meals' component={MealsListScreen} />
        <Stack.Screen name='About' component={MealDescriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
