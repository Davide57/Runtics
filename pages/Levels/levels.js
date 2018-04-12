import {StyleSheet, ScrollView, View,Image, Button,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Container,
  Header,
  Content,
  List,
  Toast,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Spinner,
  Separator
} from 'native-base';
import * as actions from './levelsActions';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          matrix:[]
        }
      }

render () {
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
         {this.props.loading
            ? <Spinner/>
            : null}
          <View behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require("../../images/logo.png")} />
            </View>
              <TouchableOpacity style={styles.buttonContainerEasy}  onPress={() =>{ navigate('Match',{time:150}); this.props.actions.setting_level()}}>
                <Text style={styles.buttonText}>EASY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerMedium}  onPress={() => navigate('Match',{time:120})}>
                <Text style={styles.buttonText}>MEDIUM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerHard}  onPress={() => navigate('Match',{time:90})}>
                <Text style={styles.buttonText}>HARD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerInsane}  onPress={() => navigate('Match',{time:5})}>
                <Text style={styles.buttonText}>INSANE</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logoContainer: {
      alignItems: "center",
      flexGrow: 0.3,
      marginTop:35,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom:15
    },
    logo: {
      flex: 0.7,
      resizeMode: 'contain',
    },
    buttonContainerEasy: {
      backgroundColor: "#29c100",
      paddingVertical: 15,
      width:"80%",
      marginLeft:"10%",
      marginTop:5
    },
    buttonContainerMedium: {
        backgroundColor: "#e57914",
        paddingVertical: 15,
        width:"80%",
        marginLeft:"10%",
        marginTop:5
    },
    buttonContainerHard:{
        backgroundColor: "#d30404",
        paddingVertical: 15,
        width:"80%",
        marginLeft:"10%",
        marginTop:5
    },
    buttonContainerInsane:{
        backgroundColor: "#b800c1",
        paddingVertical: 15,
        width:"80%",
        marginLeft:"10%",
        marginTop:5
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontWeight: "700"
    },
    button: {
      backgroundColor: "#092D4B",
      paddingVertical: 15,
    }
  });
  
  function mapStateToProps(state) {
    return {data: state.Levels.data, loading: state.Levels.loading};
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  