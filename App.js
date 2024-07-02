import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Alert, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function DetailsTabScreen({ navigation }) {
  return (
    <ImageBackground source={require('./ImageBackground.png')} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

function HomeTabScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.helloText}>Hello</Text>
            <Text>Long dzai</Text>
          </View>
          <Image source={require('./Logo.png')} style={styles.image} />
        </View>
        <Text style={{ marginLeft: 20, fontSize: 18 }}>Your Insights</Text>
        <View style={styles.middleContainer}>
          <View style={styles.box}>
            <Image source={require('./scanner.png')} style={styles.boxImage} />
          </View>
          <View style={styles.box}>
            <Image source={require('./warning.png')} style={styles.boxImage} />
          </View>
          <View style={styles.box}>
            <Image source={require('./check.png')} style={styles.boxImage} />
          </View>
          <View style={styles.box}>
            <Image source={require('./calendar.png')} style={styles.boxImage} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginLeft: 20, fontSize: 18 }}>Explore more</Text>
          <Image source={require('./right-arrow.png')} style={{ width: 30, height: 30, marginRight: 20 }} />
        </View>
        <View style={{ flexDirection: 'row',flexWrap:"wrap", justifyContent: 'space-between',justifyContent: 'space-around', marginVertical: 10 }}>
          <View style={{width: '45%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',}}>
            <ImageBackground source={require('./Untitled-1.jpg')} style={{width: '100%',
    height: '100%',
    resizeMode: 'cover'}}></ImageBackground>
          </View>
          <View style={{width: '45%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',}}>
            <ImageBackground source={require('./Untitled-1.jpg')} style={{width: '100%',
    height: '100%',
    resizeMode: 'cover'}}></ImageBackground>
          </View>
          <View style={{width: '45%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',}}>
            <ImageBackground source={require('./Untitled-1.jpg')} style={{width: '100%',
    height: '100%',
    resizeMode: 'cover'}}></ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const DetailsScreen = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTabScreen" activeColor="#e91e63" barStyle={styles.tabBarStyle}>
      <Tab.Screen
        name="Home"
        component={HomeTabScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DetailsTabScreen"
        component={DetailsTabScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TextInputExample = ({ setSignedIn }) => {
  const [text, onChangeText] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  useEffect(() => {
    if (isPhoneNumberValid) {
      Alert.alert("Số điện thoại hợp lệ. Welcome to OneHousing Pro!");
      setSignedIn(true);
    }
  }, [isPhoneNumberValid]);

  const validatePhoneNumber = (number) => {
    const phoneNumberRegex = /^(03|05|07|08|09|01[2689])+([0-9]{8})\b/;
    return phoneNumberRegex.test(number);
  };

  const handlePress = () => {
    if (validatePhoneNumber(text)) {
      setIsPhoneNumberValid(true);
    } else {
      Alert.alert("Không đúng định dạng! Nhập lại");
      onChangeText(''); // Clear the TextInput
      setIsPhoneNumberValid(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.boldText}>Nhập số điện thoại</Text>
        <View style={styles.spacer} />
        <Text>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="phone-pad"
          placeholder="Nhập số điện thoại"
        />
        <Button title="Tiếp tục" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

function SignInNavigator({ setSignedIn }) {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn">
        {(props) => <TextInputExample {...props} setSignedIn={setSignedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsTabScreen" component={DetailsTabScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <NavigationContainer>
      {signedIn ? <AppNavigator /> : <SignInNavigator setSignedIn={setSignedIn} />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  spacer: {
    height: 10,
  },
  input: {
    height: 40,
    margin: 12,
  },
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    position: 'absolute',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 60,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  helloText: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    marginTop: 40,
    width: 80,
    height: 80,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  box: {
    width: '45%',
    height: 160,
    backgroundColor: '#A7E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  boxImage: {
    width: 50,
    height: 50,
  },
});

export default App;
