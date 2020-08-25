import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect  } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
     <Coutner></Coutner>
      <StatusBar style="auto" />
    </View>
  );
}

function Button(props){
  const buttonStyle = {
    margin: "10px",
    padding: "5px",
    backgroundColor:props.backgroundColor,
    height: props.height,
    width: props.width
  }
  return(
  <div>
   <button style={buttonStyle} onClick={props.onpress}>{props.title}</button>
  </div>
  )
}

function Coutner(){
const [count,setCount] = useState(0)

useEffect(() => {
  if(count %2 == 0 && count != 0){
    alert("Counter is even")

  }
});
  return (
  <div>
    <h1>Count: {count}</h1>
     <Button title="Increment" backgroundColor="lightblue" height="25px" width="80px" onpress={() =>setCount(count +1)}></Button>
     <Button title="Decrement" backgroundColor="lightblue" height="25px" width="80px" onpress={() =>setCount(count -1)}></Button>
  </div>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
