import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword } from "../actions/user";

class Login extends Component {
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
            title="Signup"
            type='outline'
            containerStyle={{marginRight: '20%', marginLeft: '20%'}}
            // style={{}}
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
  return bindActionCreators({ updateEmail, updatePassword }, dispatch);
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
