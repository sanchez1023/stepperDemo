import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyCAogXLHEUqGOD0IOFiJ2UA5R8q60j9FAs",
        authDomain: "asvvv-86585.firebaseapp.com",
        databaseURL: "https://asvvv-86585.firebaseio.com",
        projectId: "asvvv-86585",
        storageBucket: "asvvv-86585.appspot.com",
        messagingSenderId: "93238979383",
        appId: "1:93238979383:web:3a6ff7d09b22a493b408b2"
    });
}
export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token of firebase -->', token);
        return token;
    } catch (error) {
        console.error("Error of FIREBASE --->", error);
    }
}

