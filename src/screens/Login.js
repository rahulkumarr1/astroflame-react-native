import React, {useState} from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    console.log({email: email, password: password});
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 30}}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../assets/icons/Login.jpg')}
        />
      </View>

      <ScrollView style={styles.form}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,  
            color: '#000',
            marginBottom: 20,
          }}>
          Sign in
        </Text>

        <Input
          text={email}
          setText={setEmail}
          icon="account"
          placeholder="Enter email"
        />

        <Input
          text={password}
          setText={setPassword}
          placeholder="Enter password"
          password={true}
          icon="account-key"
        />

        <Pressable
          style={{alignSelf: 'flex-end', marginVertical: 10}}
          onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              color: 'gray',
              textDecorationColor: 'gray',
              textDecorationLine: 'underline',
            }}>
            Create an account
          </Text>
        </Pressable>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => onSubmit()}>
          <Text style={{...styles.btnTextPrimary, color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;
