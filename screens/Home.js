import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

class Home extends Component {
    render() {
        return (
     <View style={styles.container}>
         <Text>Farts {this.props.fart}</Text>
    </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }

}

export default connect(mapStateToProps)(Home)
