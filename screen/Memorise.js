import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';


import AppHeader from './AppHeader';

export default class Memorise extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Mmat')}>
              <Text style={{ fontSize:20, color:"white"}}>Maths</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Msci')}>
              <Text style={{ fontSize:20, color:"white"}}>Science</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Mtam')}>
              <Text style={{ fontSize:20, color:"white"}}>Tamil</Text>
            </TouchableOpacity>
          </View>
         
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Meng')}>
              <Text style={{ fontSize:20, color:"white"}}>English</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Msoc')}>
              <Text style={{ fontSize:20, color:"white"}}>Social</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  points:{
    fontSize: 20
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  },
 
});
