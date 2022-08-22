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

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
        <Text style={styles.textContainer}>{"\n"}{"\n"}  Students use this app {"\n"}  to revise, 
memorize {"\n"}  and go through their {"\n"}           formulae.</Text>
        <Text> </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('OptionScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>GO</Text>
            </TouchableOpacity>
          </View>
          
         
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
  textContainer: {
  alignSelf:'center',
  fontSize:25,
  color:"green",
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
