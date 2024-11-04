import React from 'react';
import { View , Text , Stylesheet , FlatList } from "react-native";


class PostScreen extends React.Component{

    constructor (){
        super();
        this.state = {
            posts:[]
        }
    }

    async componentDidMount(){
        const data = aeait fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.son();
        this.setState({posts: jsonData});
    }

    render(){
        const {posts} = this.state;
        return(
                <View>   
                         <Text> Posts screem  </Text>
                         <FlatList keyExtractor={posts => posts.id}
                            data={posts} renderItem={({item}) =>}>
                                <View>
                                    <Text>{item.id}</Text>
                                    <Text>{item.tittle}</Text>
                                </View>
                            </FlatList>
                </View>
        )
    }
}

const styles = Stylesheet.create({});


export default PostsScreen;