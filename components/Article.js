import React from "react";
import {View,StyleSheet,Text,SafeAreaView,Image} from "react-native";

const Article = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            
            <Image source={{
                uri: props.urlToImage
            }}
            style={styles.image}
            />

            <View style={{padding: 20}}>


        
              <Text style={styles.title}>{props.title}</Text>

        
              <Text style={styles.description} numberOfLines={10}>
                  {props.description}
              </Text>


        
              <View style={{marginTop: 10}}>
                  <Text style={styles.source}>source: <Text>{props.sourceName}</Text></Text>
              </View>
            </View>
        </SafeAreaView>
    )
}

export default Article;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "white",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#161717",
        marginTop: 20
    },
    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: '#f2c23d'
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
        color: 'white'
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 12
    }
})