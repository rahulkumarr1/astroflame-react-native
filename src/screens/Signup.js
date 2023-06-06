import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';

import styles from '../styles';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    console.log({
      email: email,
      password: password,
      name: name,
    });
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('../../assets/icons/Login.jpg')}
      />
      <ScrollView style={{ ...styles.form }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,        
            color: '#000',
            marginBottom: 20,
          }}>
          Create an account
        </Text>

        <Input
          text={name}
          setText={setName}
          placeholder="Enter name"
          icon="account"
        />
        <Input
          text={email}
          setText={setEmail}
          placeholder="Enter email"
          icon="email"
        />
        <Input
          password={true}
          text={password}
          setText={setPassword}
          placeholder="Enter password"
          icon="account-key"
        />

        <Pressable
          style={{ alignSelf: 'flex-end', marginVertical: 10 }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: 'gray',
              textDecorationColor: 'gray',
              textDecorationLine: 'underline',
            }}>
            Already have an account
          </Text>
        </Pressable>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => {
            // Register();
            // navigation.navigate('Dashboard', {parama: [], auth: true});
            onSubmit();
          }}>
          <Text style={{ color: '#fff' }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Signup;
