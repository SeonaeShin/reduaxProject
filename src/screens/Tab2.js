/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Tab2 extends Component {
    componentDidMount(){
        setTimeout(()=>{

        },2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Tab2.....
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Tab2;
