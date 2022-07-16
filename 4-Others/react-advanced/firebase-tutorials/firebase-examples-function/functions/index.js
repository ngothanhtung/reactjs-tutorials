const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.addImage = functions.https.onRequest((request, response) => {
  const data = request.body;

  db.collection('images').add(data)
    .then(result => {
      response.json(result);
    }).catch(error => {
      response.status(500).json(error);
    });
});
