import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles';

const ProductSlider = ({ navigation }) => {

  const [data, setData] = useState([]);

  const getProductList = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ScrollView horizontal={true} style={styles.productSlider}>
      {data.map((x, i) => (
        <Pressable
          onPress={() => {
            navigation.navigate('ProductDetails', {
              productId: x.id,
            });
          }}
          key={i}
          style={styles.sliderItem}>
          <Image style={styles.sliderImg} source={{ uri: x.image  }} />
          <Text style={styles.sliderText}>{x.name}</Text>
          <Text style={styles.sliderPrice}>${x.price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};


export default ProductSlider;