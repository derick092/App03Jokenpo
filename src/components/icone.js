import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

class Icone extends Component {
  render(){
    if(this.props.escolha == 'Pedra'){
      return (
        <View style={styles.vwJogador}>
        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={require('../../imgs/pedra.png')}/>
        </View>
      );
    }else if(this.props.escolha == 'Papel'){
      return (
        <View style={styles.vwJogador}>
        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={require('../../imgs/papel.png')}/>
        </View>
      );
    }else if(this.props.escolha == 'Tesoura'){
      return (
        <View style={styles.vwJogador}>
        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={require('../../imgs/tesoura.png')}/>
        </View>
      );
    }else{
      return false;
    }
  }
}

const styles = StyleSheet.create({
  vwJogador:{
    alignItems:'center',
    marginBottom:10,
  },
  txtJogador:{
    fontSize:18
  }
});

export default Icone;
