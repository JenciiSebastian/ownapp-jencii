import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

import AppHeader from '../screen/AppHeader';
export default class Reng extends Component {
  render() {
    return (
      <View>
        <AppHeader />
      <View style={styles.container}>
      
        <Text style={{ fontSize:30, backgroundColor:"pink"}}>Revision Questions</Text>
        <Text> </Text>
        <Text style={styles.points}>1)What is verb?Give some examples</Text>
        <Text> </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Raeng')}>
              <Text style={{ fontSize:20, color:"white"}}>Answer</Text>
        </TouchableOpacity>

         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('OptionScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"purple",
    margin: 10,
    width: 200,
    height: 50,
  }
})