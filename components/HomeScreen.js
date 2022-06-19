import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList} from "react-native";
import Article from "../components/Article";
import axios from "axios";


const HomeScreen = () => {
  
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9',{
            params:{
                category: "general"
            }
        })
            .then( (response) =>{
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });
    }

    useEffect(() => {
        getNews();
    },[]);

    return(
        <SafeAreaView>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        sourceName = {item.source.name}
                    />}
                keyExtractor = {(item) => item.title}
            />

        </SafeAreaView>
    )
}

export default HomeScreen;