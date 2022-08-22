import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

import AppHeader from '../screen/AppHeader';
export default class Mtam extends Component {
  render() {
    return (
      <View>
        <AppHeader />
      <View style={styles.container}>

        <Text> </Text>
        <Text style={styles.points}>1) {"\n"}எட்டுத்தொகை :

{"\n"}நற்றிணை
{"\n"}குறுந்தொகை
{"\n"}ஐங்குறுநூறு
{"\n"}பதிற்றுப்பத்து
{"\n"}பரிபாடல்
{"\n"}கலித்தொகை
{"\n"}அகநானூறு
{"\n"}புறநானூறு</Text>
        <Text> </Text>
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
    fontSize: 21
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"violet",
    margin: 10,
    width: 200,
    height: 50,
  }
})