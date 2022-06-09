import React,{useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'
import lightOff from './assets/icons/eco-light-off.png';
import lightOn from './assets/icons/eco-light.png';
import logoDioOff from './assets/icons/logo-dio-white.png';
import logoDioOn from './assets/icons/logo-dio.png';
const App = () =>{

  const [lightMode,setLightMode] = useState(false);

  const handleChangeMode = () => setLightMode((oldLightMode)=>!oldLightMode);

  useEffect(() => {
    //LanternOn
    Torch.switchState(lightMode);
    console.log('Trocou o estado da lanterna!');
  },[lightMode]);

  useEffect(()=>{
    const subscription = RNShake.addListener(() => {
      setLightMode((oldLightMode)=>!oldLightMode);
    })
    //Quando o componente for desmontado...
    return () => subscription.remove();
  },[]);

  return <View style={lightMode ? style.containerLight : style.container}>
    <TouchableOpacity onPress = {handleChangeMode}>
      
      <Image
        style = {lightMode ?  style.lightingOn : style.lightingOff}
        source = {lightMode ? lightOn:lightOff}
      />
    </TouchableOpacity>

    <Image
      style = {lightMode ?  style.lightingOn : style.lightingOff}
      source = {lightMode ? logoDioOn:logoDioOff}
    />
  </View>
};

export default App

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  containerLight:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  lightingOn:{
    resizeMode:'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode:'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor:  'white',
  },
});