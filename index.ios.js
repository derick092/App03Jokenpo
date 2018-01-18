import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app03 extends Component{
  constructor(props){
    super(props);

    this.state = { escolhaUsuario:'', escolhaComputador:'', resultado:'' }
  }

  jokenpo(escolhaUsuario){
    var numeroAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';
    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'Pedra'){
      if(escolhaUsuario == 'Pedra'){
        resultado = 'Empate!';
      }

      if(escolhaUsuario == 'Papel'){
        resultado = 'Você venceu!';
      }else

      if(escolhaUsuario == 'Tesoura'){
        resultado = 'Você perdeu!';
      }
    }

    if(escolhaComputador == 'Papel'){
      if(escolhaUsuario == 'Pedra'){
        resultado = 'Você perdeu!';
      }

      if(escolhaUsuario == 'Papel'){
        resultado = 'Empate!';
      }else

      if(escolhaUsuario == 'Tesoura'){
        resultado = 'Você venceu!';
      }
    }

    if(escolhaComputador == 'Tesoura'){
      if(escolhaUsuario == 'Pedra'){
        resultado = 'Você venceu!';
      }

      if(escolhaUsuario == 'Papel'){
        resultado = 'Você perdeu!';
      }else

      if(escolhaUsuario == 'Tesoura'){
        resultado = 'Empate!';
      }
    }

    this.setState(
      {
        escolhaUsuario : escolhaUsuario,
        escolhaComputador : escolhaComputador,
        resultado : resultado});
      }

      render(){
        return(
          <View>
            <Topo/>
            <View style = {styles.vwAcoes}>
              <View style = {styles.btnEscolha}>
                <Button
                  title='Pedra'
                  onPress={() => {this.jokenpo('Pedra')}}/>
              </View>
              <View style = {styles.btnEscolha}>
                <Button
                  title='Papel'
                  onPress={() => {this.jokenpo('Papel')}}/>
              </View>
              <View style = {styles.btnEscolha}>
                <Button
                  title='Tesoura'
                  onPress={() => {this.jokenpo('Tesoura')}}/>
              </View>
            </View>
            <View style = {styles.vwPalco}>
              <Text style = {styles.txtResultado}>{this.state.resultado}</Text>

              <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
              <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>


            </View>
          </View>
        );
      }
    }

    /*class Topo extends Component{
      render(){
        return(
          <Image source={require('./imgs/jokenpo.png')}/>
        );
      }
    }*/

    const styles = StyleSheet.create({
      vwAcoes:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
      },
      btnEscolha:{
        width:90
      },
      vwPalco:{
        alignItems:'center',
        marginTop:10
      },
      txtResultado:{
        fontSize:25,
        fontWeight:'bold',
        color:'red',
        height:60
      }
    });

    /*class Icone extends Component {
      render(){
        if(this.props.escolha == 'Pedra'){
          return (
            <View style={styles.vwJogador}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require('./imgs/pedra.png')}/>
            </View>
          );
        }else if(this.props.escolha == 'Papel'){
          return (
            <View style={styles.vwJogador}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require('./imgs/papel.png')}/>
            </View>
          );
        }else if(this.props.escolha == 'Tesoura'){
          return (
            <View style={styles.vwJogador}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require('./imgs/tesoura.png')}/>
            </View>
          );
        }else{
          return false;
        }
      }
    }*/
    AppRegistry.registerComponent('app03', () => app03);

    // <MeuComponente p1='1' p2='2' p3='3'></MeuComponente>
    // class MeuComponente extends Component{
    //   render(){
    //     return (
    //       <View >
    //         <Text>{this.props.p1}</Text>
    //         <Text>{this.props.p2}</Text>
    //         <Text>{this.props.p3}</Text>
    //       </View>
    //     )
    //   };
    // }
