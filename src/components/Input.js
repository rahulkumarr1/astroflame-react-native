import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from '../styles';
import {SecondaryColor} from '../styles/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, text, setText, password, icon}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={focused ? styles.inputViewFocused : styles.inputView}>
      {icon && <MaterialCommunityIcons name={icon} color="#ccc" size={25} />}
      <TextInput
        secureTextEntry={password ? true : false}
        placeholder={placeholder}
        style={focused ? styles.inputFocused : styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={text}
        onChangeText={e => setText(e)}
        selectionColor={SecondaryColor}
      />
    </View>
  );
};

export default Input;
