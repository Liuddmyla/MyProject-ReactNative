import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
 
} from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const loadApplication = async () => {
  await Font.loadAsync({
    "RobotoRegular": require("../assets/font/Roboto-Regular.ttf"),
    "RobotoBold": require("../assets/font/Roboto-Bold.ttf"),
  });
};

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);

  // const [dimensions, setDimensions] = useState({
  //   width: Dimensions.get("window").width - 5 * 2,
  // });


  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width - 5 * 2;
  //     setDimensions(width);
  //   };
  //    Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }
 
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };
 
  return (
     <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
     
      <ImageBackground
        style={styles.image}
        source={require("../assets/PhotoBG.jpg")}>        
          
          <View style={styles.registration}>
            <View style={styles.photo}>
               <TouchableOpacity >
                  <Image
                    style={styles.addBtn}
                    source={require("../assets/add.png")}
                  />
                </TouchableOpacity>
            </View>
          
            <Text style={styles.title}>Registration</Text>
            
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100,   }}>
              <View>                
                <TextInput
                  style={styles.input}                  
                  placeholder="Login"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) => setState((prevState) => ({...prevState, login: value, }))}
                />                
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}                  
                  placeholder="Email"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({...prevState, email: value, }))}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}                  
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) => setState((prevState) => ({...prevState, password: value, }))}
                />
                <TouchableOpacity>
                  <Text style={styles.passwordText}>Show</Text>
                </TouchableOpacity>
              </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={keyboardHide}>
                  <Text style={styles.btnTitle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={styles.subText}>Already have an account? Enter</Text>
                </TouchableOpacity>
            </View>
          </View>                         
      </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    position: "relative",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end", 
    position: "relative",
  }, 
  registration: {    
    flex: 0.65,
    backgroundColor: "#fff",   
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,    
    alignItems: "center",   
  },
   photo: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    top: -60,
    borderRadius: 16,
  },
  title: {
    fontWeight: 500,
    fontSize: 30, 
    lineHeight: 35,
    color: "#212121",
    marginTop: 82,
    marginBottom: 23,
    fontFamily: "RobotoBold",
  },
   form: {
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    height: 50,
    width: 300,
    paddingLeft: 16,
    fontFamily: "RobotoRegular",
  },
  btn: {
    alignItems: 'center',
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginTop: 33,
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
  },
  subText: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "RobotoRegular",
  },
  passwordText: {
    position: "absolute",
    top: -35,
    right: 20,
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "RobotoRegular",
  },
  addBtn: {
    top: 80,
    left: 105,
  }
});
