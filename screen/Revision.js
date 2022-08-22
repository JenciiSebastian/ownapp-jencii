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

export default class Revision extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Rmaths')}>
              <Text style={{ fontSize:20, color:"white"}}>Maths</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Rsci')}>
              <Text style={{ fontSize:20, color:"white"}}>Science</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Rtam')}>
              <Text style={{ fontSize:20, color:"white"}}>Tamil</Text>
            </TouchableOpacity>
          </View>
         
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Reng')}>
              <Text style={{ fontSize:20, color:"white"}}>English</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Rsoc')}>
              <Text style={{ fontSize:20, color:"white"}}>Social</Text>
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
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
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
