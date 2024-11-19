import auth from '@react-native-firebase/auth';

export const signInAnonymously = async (): Promise<void> => {
  try {
    await auth().signInAnonymously();
  } catch (error) {
    console.error(`Authentication failed: ${error}`);
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth().signOut();
  } catch (error) {
    console.error(`Sign-out failed: ${error}`);
  }
};
