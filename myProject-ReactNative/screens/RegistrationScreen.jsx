import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function RegistrationScreen() {
 
 
 
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/PhotoBG.jpg")}>
              
            <View style={styles.registration}>
                  <View style={styles.photo}></View>
            </View>      
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
      top: -50,
      borderRadius: 16,
  },
  registration: {
     position:"relative",
     flex: 0.6,
     backgroundColor: "#fff",   
     borderTopLeftRadius: 25,
     borderTopRightRadius: 25,
    
  }
});
