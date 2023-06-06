import { ScrollView, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductList from '../../components/ProductList';
import ProductSlider from '../../components/ProductSlider';
import ProductCarousel from '../../components/ProductCarousel';
import HomeScreen from '../../screens/HomeScreen';
import Profile from "../../screens/Profile";
import Dashboard from "../../screens/Dashboard";
import styles from '../../styles';

function Feed({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <HomeScreen/>        */}

      <ScrollView style={{ paddingTop: 70 }}>
        <Text style={styles.heading}>Explore</Text>    
        <ProductCarousel navigation={navigation} />
        <Text style={styles.heading}>Popular Products</Text>
        {/* <ProductSlider navigation={navigation} /> */}
        <Text style={styles.heading}>Top Picks For You</Text>
        {/* <ProductSlider navigation={navigation} /> */}
        <View style={{ height: 100 }}></View>
      </ScrollView>  
    </View>
  );
}

function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Homepage"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;