import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform } from "react-native";

export default function RegistrationScreen() {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
 
 
 
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/PhotoBG.jpg")}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}>
          
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
            
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}>
              <View>                
                <TextInput
                  style={styles.input}                  
                  placeholder="Login"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}/>                
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}                  
                  placeholder="Email"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}/>
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}                  
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}/>
                <TouchableOpacity>
                  <Text style={styles.passwordText}>Show</Text>
                </TouchableOpacity>
              </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                  <Text style={styles.btnTitle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={styles.subText}>Already have an account? Enter</Text>
                </TouchableOpacity>
            </View>
          </View>
          </KeyboardAvoidingView>                
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",  
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
    photo: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    top: -60,
    borderRadius: 16,
  },
  registration: {
    position:"relative",
    flex: 0.65,
    backgroundColor: "#fff",   
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,    
    alignItems: "center",    
  },
  title: {
    fontWeight: 500,
    fontSize: 30, 
    lineHeight: 35,
    color: "#212121",
    marginTop: 82,
    marginBottom: 23,
  
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
    color:"#FFFFFF",
  },
  subText: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  passwordText: {
    position: "absolute",
    top: -35,
    right: 20,
    fontSize: 16,
    color: "#1B4371",
  },
  addBtn: {
    top: 80,
    left: 105,
  }
});
