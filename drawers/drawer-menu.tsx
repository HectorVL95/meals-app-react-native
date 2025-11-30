import { View, Text, Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

type DrawerMenuTypes = {
  open_drawer: boolean,
  set_open_drawer: () => void
}

const DrawerMenu: React.FC<DrawerMenuTypes> = ({ open_drawer, set_open_drawer }) => {
  return (
    <View style={{paddingTop: 48, paddingHorizontal: 24}}>
      <View>
        <Pressable style={{gap: 12}} className='flex-row items-center items-center'>
          <Ionicons name='star' size={24} color="#fff"/>
          <Text style={{color: '#fff'}}>Favorites</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DrawerMenu;