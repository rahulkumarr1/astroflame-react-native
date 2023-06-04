import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import colors from '../constants/Colors';

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.innerContainer}>
      <View>
        {item.image != null ? (
          <Image source={{ uri: item.image }} style={styles.productImage} />
        ) : (
          <View style={styles.ImageContainer}></View>
        )}
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.productInfoItem}>
          <Text style={styles.productInfoItemText}>Category: </Text>
          <Text>{item.category}</Text>
        </View>
        <View style={styles.productInfoItem}>
          <Text style={styles.productInfoItemText}>Price: </Text>
          <Text>{item.price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);


const ProductList = ({navigation}) => {

  const [selectedId, setSelectedId] = useState();
  const [isLoading, setLoading] = useState(true);
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


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: item.id,
          });
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  ImageContainer: {
    backgroundColor: colors.light,
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  productInfoContainer: {
    paddingLeft: 5,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  actionButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    height: 30,
    width: 30,
    backgroundColor: colors.primary,
    borderRadius: 5,
    elevation: 2,
  },
  productInfoItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  productInfoItemText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.muted,
  },
});

export default ProductList;