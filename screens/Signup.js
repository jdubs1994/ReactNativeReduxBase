import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/user'
import styles from '../styles';

class Signup extends Component {
    render() {
        return (
     <View style={styles.container}>
         <Text>Signup</Text>
         <TextInput 
            value={this.props.user.email}
            onChangeText={(input) => this.props.updateEmail(input)}
            placeholder='Email'
         />
         <TextInput 
            value={this.props.user.password}
            onChangeText={(input) => this.props.updatePassword(input)}
            placeholder='Password'
         />
    </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
