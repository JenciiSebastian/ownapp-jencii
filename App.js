import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screen/HomeScreen';
import Revision from './screen/Revision';
import OptionScreen from './screen/OptionScreen';
import Memorise from './screen/Memorise'
import Formulae from './screen/Formulae';
import Rmaths from './REVMAT/Rmaths';
import Ramaths from './REVMAT/Ramaths';
import Rsci from './REVSCI/Rsci';
import Rasci from './REVSCI/Rasci';
import Rtam from './REVTAM/Rtam';
import Ratam from './REVTAM/Ratam';
import Reng from './REVENG/Reng';
import Raeng from './REVENG/Raeng';
import Rsoc from './REVSOC/Rsoc';
import Rasoc from './REVSOC/Rasoc';
import Mtam from './MEMTAM/Mtam';
import Meng from './MEMENG/Meng';
import Mmat from './MEMMAT/Mmat';
import Msci from './MEMSCI/Msci';
import Msoc from './MEMSOC/Msoc';
import Fmat from './FORMAT/Fmat';
import Fsci from './FORMSCI/Fsci';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  OptionScreen:OptionScreen,
  Revision:Revision,
  Memorise:Memorise,
  Formulae:Formulae,
  Rmaths:Rmaths,
  Ramaths:Ramaths,
  Rsci:Rsci,
  Rasci:Rasci,
  Rtam:Rtam,
  Ratam:Ratam,
  Reng:Reng,
  Raeng:Raeng,
  Rsoc:Rsoc,
  Rasoc:Rasoc,
  Mtam:Mtam,
  Meng:Meng,
  Mmat:Mmat,
  Msci:Msci,
  Msoc:Msoc,
  Fmat:Fmat,
  Fsci:Fsci
});

const AppContainer = createAppContainer(AppNavigator);

