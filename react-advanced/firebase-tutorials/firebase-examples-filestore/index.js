
var admin = require("firebase-admin");

var serviceAccount = require("./hellofirebase-f22f9-firebase-adminsdk-myh8h-e9b1105a00.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hellofirebase-f22f9.firebaseio.com"
});

// NoSql database
const db = admin.firestore();


var data = {
  'title': 'Hue City',
  'subTitle': 'Co do Hue',
  'text': 'Thanh pho du lich',
  'imageUrl': "https://images.unsplash.com/photo-1446770145316-10a05382c470?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
};

var docRef = db.collection('images').add(data)
  .then(result => {
    console.log('OK');
  });