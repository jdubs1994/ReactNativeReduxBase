import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

class Login extends Component {
    render() {
        return (
     <View style={styles.container}>
         <Text>Login {this.props.fart}</Text>
    </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fart: state
    }

}

export default connect(mapStateToProps)(Login)
