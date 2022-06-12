import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ColorsUI from '../assets/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Details = ({route, navigation}) => {
  const {item} = route.params;

  const renderIngridientsItem = ({item}) => {
    return (
      <View style={[styles.ingredientsImageWrapper]}>
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather
                name="chevron-left"
                size={15}
                color={ColorsUI.textDark}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <Feather name="star" size={15} color="#FFF" />
          </View>
        </View>
      </SafeAreaView>

      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceItem}>${item.price}</Text>
      </View>

      {/* Pizza Info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumbe}
            </Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery In</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} mins</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngridientsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={15} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: ColorsUI.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: ColorsUI.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: ColorsUI.primary,
    borderWidth: 2,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: ColorsUI.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceItem: {
    color: ColorsUI.price,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoRightWrapper: {},
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: ColorsUI.textLight,
    marginBottom: 3,
  },
  infoItemText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: ColorsUI.textDark,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: ColorsUI.textDark,
  },
  ingredientsImageWrapper: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: ColorsUI.primary,
    borderRadius: 15,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
  },
});
