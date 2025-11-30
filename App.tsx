import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native';
import CategoriesScreen from 'screens/categories-screen';
import { NavigationContainer } from '@react-navigation/native';
import MealsListScreen from 'screens/meals-list-screen';
import MealDescriptionScreen from 'screens/meal-description-screen';
import { Pressable } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';
import './global.css';
import { useShowMeals } from 'hooks/useShowMeals';
import { useFavoriteMeals } from 'hooks/useFavoriteMeals';
import { useEffect } from 'react';
import { Drawer } from 'react-native-drawer-layout'
import DrawerMenu from 'drawers/drawer-menu';

export default function App() {
  const Stack = createStackNavigator();
  const { meal_id } = useShowMeals();
  const { favorite_meals, set_favorite_meals } = useFavoriteMeals();
  const [favorited, set_favorited] = useState(false);
  const [open_drawer, set_open_drawer] = useState(false);

  const handle_favorites = () => {
    set_favorited(!favorited)
    if (favorite_meals.includes(meal_id)) return;
    set_favorite_meals(meal_id)
  }

  const handle_drawer = () => {
    set_open_drawer(true)
  }

  return (
    <Drawer
      open={open_drawer}
      onOpen={() => set_open_drawer(true)}
      onClose={() => set_open_drawer(false)}
      drawerPosition='left'
    
      drawerStyle={{backgroundColor: '#553737ff'}}
      renderDrawerContent={() => (
        <DrawerMenu open_drawer={open_drawer} set_open_drawer={set_open_drawer} />
      )

      }
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#d432008e',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            color: '#fff'
          },
        }}>
          <Stack.Screen name='Categories' component={CategoriesScreen} options={{headerLeft: () => (
            <Pressable onPress={handle_drawer} className='ml-3'>
              <Ionicons name='menu-outline' size={24} color='#FFFF'/>
            </Pressable>
          )}} />
          <Stack.Screen name='Meals' component={MealsListScreen} />
          <Stack.Screen options={{headerRight: () => (
            <Pressable className='mr-3' onPress={handle_favorites}>
              {
                favorited === true ? <Ionicons name='star' size={24} color='#FFFF'/> : <Ionicons name='star-outline' size={24} color='#FFFF'/>
              }
            </Pressable>
          )}} name='About' component={MealDescriptionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Drawer>
  );
}
