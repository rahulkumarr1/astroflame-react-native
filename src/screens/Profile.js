import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}) => {
  return (
    <View>
      <View style={styles.profile}>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri: 'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
          }}
        />
        <Text style={styles.profileName}>Rahul Rajput</Text>
      </View>

      <View style={styles.menuOptions}>
        <Pressable style={styles.menuOption}>      
          <MaterialCommunityIcons name="account" color="#ccc" size={25} />
          <Text style={styles.menuText}>Edit Profile</Text>
          <MaterialCommunityIcons name="chevron-right" color="#ccc" size={25} />          
        </Pressable>

        <Pressable style={styles.menuOption}>      
          <MaterialCommunityIcons name="map-marker" color="#ccc" size={25} />
          <Text style={styles.menuText}>Shopping Address</Text>
          <MaterialCommunityIcons name="chevron-right" color="#ccc" size={25} />  
        </Pressable>

        <Pressable style={styles.menuOption}>     
          <MaterialCommunityIcons name="tag-heart" color="#ccc" size={25} />
          <Text style={styles.menuText}>Wishlist</Text>
          <MaterialCommunityIcons name="chevron-right" color="#ccc" size={25} />  
        </Pressable>

        <Pressable style={styles.menuOption}>       
          <MaterialCommunityIcons name="shopping" color="#ccc" size={25} />
          <Text style={styles.menuText}>Orders</Text>
          <MaterialCommunityIcons name="chevron-right" color="#ccc" size={25} />  
        </Pressable>
     
      </View>
    </View>
  );
};

export default Profile;
