import firebase from 'firebase';
import db from '../config/db';

export const updateEmail = (email) => {
    return {type: 'UPDATE_EMAIL', payload: email}
}
export const updatePassword = (password) => {
    return {type: 'UPDATE_PASSWORD', payload: password}
}
export const updateUsername = (username) => {
    return {type: 'UPDATE_USERNAME', payload: username}
}
export const updateBio = (bio) => {
    return {type: 'UPDATE_BIO', payload: bio}
}

export const login = (props) => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            if(response) {
                props.navigation.navigate("Home");
            }
            dispatch({type: 'LOGIN', payload: response.user})
		} catch (e) {
			alert(e)
		}
	}

}

export const signup = (props) => {
	return async (dispatch, getState) => {
		try {
			const { email, password, username, bio } = getState().user
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if(response) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    username: username,
                    bio: bio,
                    photo: '',
                    token: null,
                }

            db.collection('users').doc(response.user.uid).set(user)
            dispatch({type: 'SIGNUP', payload: user})
            props.navigation.navigate("Home");
            }
		} catch (e) {
			alert(e)
		}
	}
}