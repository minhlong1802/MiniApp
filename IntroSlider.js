// IntroSlider.js
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image, StyleSheet } from 'react-native';

const slides = [
  {
    key: '1',
    title: 'Scan, Pay & Enjoy!',
    text: ' Scan your items, pay and enjoy your day. We will take care of the rest. Hope you have a great day! From app-developer to you.',
    image: require('./Sea.jpg'),
    backgroundColor: '#F4A261',
  },
  {
    key: '2',
    title: 'Scan, Pay & Enjoy!',
    text: 'Scan your items, pay and enjoy your day. We will take care of the rest. Hope you have a great day! From app-developer to you.',
    image: require('./Sea.jpg'),
    backgroundColor: '#E9C46A',
  },
  {
    key: '3',
    title: 'Scan, Pay & Enjoy!',
    text: 'Scan your items, pay and enjoy your day. We will take care of the rest. Hope you have a great day! From app-developer to you.',
    image: require('./Sea.jpg'),
    backgroundColor: '#36BA98',
  },
];

const IntroSlider = ({ onDone }) => {
  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>   
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />;
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 60,
    marginTop:120,
    borderRadius: 100,
  },
});

export default IntroSlider;
