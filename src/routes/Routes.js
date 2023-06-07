import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from "./tabs/Tabs";
import Splash from "../screens/Splash";
import ProductDetails from "../screens/ProductDetails";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Signup from "../screens/Signup";


const Stack = createNativeStackNavigator();
const DrawerNav = createDrawerNavigator();

function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Button title='Logout' onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

function Setting() {
    return (
        <View style={styles.container}>
            <Text>Settings Page</Text>
        </View>
    )
}

function Chat() {
    return (
        <View style={styles.container}>
            <Text>Chat Room</Text>
        </View>
    )
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

function Drawer() {
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Dashboard' component={Dashboard} />
            <DrawerNav.Screen name='Main' component={Tabs} screenOptions={{ headerShown: false }} />
            <DrawerNav.Screen name='Profile' component={Profile} />
            <DrawerNav.Screen name='Chat' component={Chat} />
        </DrawerNav.Navigator>
    )
}

const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="splash"  >
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Home" component={Drawer} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='signup' component={Signup} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Routes;