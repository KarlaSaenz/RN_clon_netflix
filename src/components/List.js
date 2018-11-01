import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';

const shows_first = [
    {
        key:1,
        name:'Suits',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key:2,
        name:'Modern Family',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key:3,
        name:'The Flash',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key:4,
        name:'SuperGirl',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    },
    {
        key:5,
        name:'Designated Survivor',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key:6,
        name:'Legacy',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
    }
]

const shows_second = [
    {
        key:7,
        name: 'suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key:8,
        name: 'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key:9,
        name: 'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key:10,
        name: 'SuperGirl',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    },
    {
        key:11,
        name: 'Designated Survivor',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key:12,
        name: 'Legacy',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
    }
]


class List extends Component {

    _renderItem(item){
        return(
            <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
        )
    }

    render(){
        return(
            <View style ={{flex: 1}}>
                <FlatList
                    horizontal
                    SeparatorComponent={() => <View style={{width: 5}} />}
                    renderItem = {({item}) => this._renderItem(item)}
                    data={shows_first}
                />
            </View>
        )
    }
}
export default List