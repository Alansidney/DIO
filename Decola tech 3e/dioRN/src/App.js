import React from 'react';
import {
    View
    ,Text
    ,Image
    ,StyleSheet
    ,SafeAreaView
    ,StatusBar
    ,Pressable
    ,Linking
} from 'react-native';


const imageProfileGithub = 'https://avatars.githubusercontent.com/u/48067468?s=400&u=01792f7e5fafec97508262278e65b18253889cd3&v=4';

const textColor = '#c9d1d9';
const colorGithub = '#010409';
const buttonColor = '#238639';

const urlGithub = 'https://github.com/Alansidney';


const App = () => {

    const handlePressGithub = async () => {
        console.log('Trying to validate URL...');
        const res = await Linking.canOpenURL(urlGithub);
        if(res){
            console.log('URL valid, opening URL...');
            await Linking.openURL(urlGithub);
        }

    };
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content}>
            <Image accessibilityLabel='Alan em um fundo branco' style={style.avatar} source={{uri:imageProfileGithub}}/>
            <Text accessibilityLabel='Nome: Alansidney da Silva' style={[style.defaultText,style.name]}>Alansidney da Silva</Text>
            <Text accessibilityLabel='Subtítulo: Software Engineer' style={style.defaultText}>Software Engineer</Text>
            <Text accessibilityLabel='Descrição: Hi, I’m @Alansidney, I’m interested in data science, tecnology and data structures, I’m currently learning python, I’m looking to collaborate on projects that envolves data science' style={[style.defaultText,style.description]}>  
                    👋 Hi, I’m @Alansidney
                    👀 I’m interested in data science, tecnology and data structures.
                    🌱 I’m currently learning python.
                    💞️ I’m looking to collaborate on projects that envolves data science.
            </Text>
        </View>
        <Pressable onPress={handlePressGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>Go to Github</Text>
            </View>
        </Pressable>
    </SafeAreaView>
    
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex:1, //Expandir para tela inteira
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        alignItems:'center',
        padding: 30,
        
    },
    avatar:{
        height:150,
        width: 150,
        borderRadius:75,
        borderColor: textColor,
        borderWidth: 2,
        margin: 10,
    },
    defaultText:{

        color: textColor,
        padding: 2,
        fontSize: 17
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
    },
    description:{
        fontSize:15,
    },
    button:{
        backgroundColor: buttonColor,
        padding: 15,
        borderRadius:10,
    },
    textButton:{
        fontWeight:'bold',
        fontSize: 17,
    },
})