import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import firebase from 'firebase'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, login, getUser } from "../actions/user";

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <Text>{this.props.user.email}</Text>
          <Text>{this.props.user.username}</Text>
          <Text>{this.props.user.bio}</Text>

          <Button
            title="Signout"
            type='outline'
            containerStyle={{marginRight: '20%', marginLeft: '20%'}}
            buttonStyle={{borderColor: 'black'}}
            titleStyle={{color: 'black'}}
            onPress={() => firebase.auth().signOut()}
          />
        </View>
      </View>
    )
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
)(Profile);
