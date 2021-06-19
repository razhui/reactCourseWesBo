import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWMAFP7_VvD12dUuStngfqlZonLAk6lsU",
    authDomain: "catch-of-the-day-aaron-course.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-aaron-course-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export

export default base;