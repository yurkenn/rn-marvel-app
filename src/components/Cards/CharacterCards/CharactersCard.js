import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../constant/style';

const CharactersCard = ({item, onSelect}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={onSelect}>
        <View style={styles.inner_container}>
          <Image
            style={styles.image}
            source={{uri: item.thumbnail.path + '.' + item.thumbnail.extension}}
          />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CharactersCard;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: -40,
  },
  inner_container: {
    width: 100,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: GlobalStyle.colors.tertiary,
  },
  pressed: {
    opacity: 0.7,
  },
});