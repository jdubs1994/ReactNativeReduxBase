import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import firebase from 'firebase'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, login, getUser } from "../actions/user";

class Login extends Component {

  componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.props.getUser(user.uid)
          if(this.props.user) {
            console.log('Made it here')
            this.props.navigation.navigate('Home')
          }
        }
      })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <Input
            value={this.props.user.email}
            containerStyle={{marginBottom: '5%'}}
            onChangeText={input => this.props.updateEmail(input)}
            inputStyle={{textAlign: "center"}}
            placeholder="Email"
          />
          <Input
            value={this.props.user.password}
            secureTextEntry={true}
            onChangeText={input => this.props.updatePassword(input)}
            inputStyle={{textAlign: "center"}}
            containerStyle={{marginBottom: '5%'}}
            placeholder="Password"
          />
          <Button
            title="Login"
            type='outline'
            containerStyle={{marginRight: '20%', marginLeft: '20%'}}
            buttonStyle={{borderColor: 'black'}}
            titleStyle={{color: 'black'}}
            onPress={() => this.props.login(this.props)}
          />
          <Button
            title="Signup"
            type='outline'
            containerStyle={{marginRight: '20%', marginLeft: '20%'}}
            buttonStyle={{borderColor: 'black'}}
            titleStyle={{color: 'black'}}
            onPress={() => this.props.navigation.navigate("Signup")}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
