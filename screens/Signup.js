import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, updateUsername, updateBio, signup } from "../actions/user";

class Signup extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            marginRight: "5%",
            marginLeft: "5%"
          }}
        >
          <Input
            value={this.props.user.username}
            onChangeText={input => this.props.updateUsername(input)}
            inputStyle={{ textAlign: "center" }}
            containerStyle={{ marginBottom: "5%" }}
            placeholder="Username"
          />
          <Input
            value={this.props.user.email}
            containerStyle={{ marginBottom: "5%" }}
            onChangeText={input => this.props.updateEmail(input)}
            inputStyle={{ textAlign: "center" }}
            placeholder="Email"
          />
          <Input
            value={this.props.user.password}
            secureTextEntry={true}
            onChangeText={input => this.props.updatePassword(input)}
            inputStyle={{ textAlign: "center" }}
            containerStyle={{ marginBottom: "5%" }}
            placeholder="Password"
          />
          <Input
            value={this.props.user.bio}
            onChangeText={input => this.props.updateBio(input)}
            inputStyle={{ textAlign: "center" }}
            containerStyle={{ marginBottom: "5%" }}
            placeholder="Bio"
          />
          <Button
            title="Register"
            type="outline"
            containerStyle={{ marginRight: "20%", marginLeft: "20%" }}
            buttonStyle={{ borderColor: "black" }}
            titleStyle={{ color: "black" }}
            onPress={() => this.props.signup(this.props)}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, updateUsername, updateBio, signup }, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
