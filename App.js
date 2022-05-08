import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert} from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('text pressed!')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.text}>Hello World!!! I love you</Text>
      <TouchableHighlight onPress={()=>{Alert.alert("My Title", "My Message", [
        {text: "Yes", onPress:()=>console.log("Yes")},
        {text: "No", onPress: ()=>console.log("No")},
      ])}}>
        <Image 
          // blurRadius= {1}
          source={{ 
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300" }} />
      </TouchableHighlight>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    transform: [
      {translateY: -200}
    ],
  },
  text: {
    backgroundColor: 'darkorange',
    color: 'white',
  }
});
  
