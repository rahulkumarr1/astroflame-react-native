import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from "./tabs/Tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";


const Stack = createNativeStackNavigator();
// const DrawerNav = createDrawerNavigator();

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
            <Button onPress={() => navigation.navigate('Signup')}
                title='Need an account?' />
        </View>
    )
}

function Signup({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
            <Button onPress={() => navigation.navigate('Tab')}
                title='Need To Login?' />
        </View>
    )
}

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

function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile Page</Text>
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

// function Drawer() {
//     return (
//         <DrawerNav.Navigator>
//             <DrawerNav.Screen name='Dashboard' component={Dashboard} />
//             <DrawerNav.Screen name='Profile' component={Profile} />
//             <DrawerNav.Screen name='Chat' component={Chat} />
//         </DrawerNav.Navigator>
//     )
// }

const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
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