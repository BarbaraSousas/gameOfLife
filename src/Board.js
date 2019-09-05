import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions
} from 'react-native';
import Canvas from 'react-native-canvas'

const {width, height} = Dimensions.get('screen');

export class Board extends Component {
    make2dArray(cols, rows) {
        let arr = new Array(cols);
        for(let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }
    }
    render() {
        const gradientHeight=height;
        const gradientBackground  = 'white';
        const data = Array.from({ length: gradientHeight });
        return(
            <View>
                <View style={styles.board}>
                    <Canvas ref={this.handleCanvas} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    board: {
        height: height,
        width: width,
        resizeMode: 'cover',
        backgroundColor: '#000',
        // ImageBackground: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)'
    },
    imageBackground: {

    },
    text: {
        color: 'black',
    }
})

export default Board;