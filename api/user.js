import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address'};
    }
    return {error: 'Something went wrong'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: error.code};
    } else if (error.code === 'auth/user-not-found') {
      return {status: false, error: error.code};
    }
    return {
      status: false,
      error: 'Email does not exist or Password you entered is incorrect',
    };
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    console.log('We are updating token for u');
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
