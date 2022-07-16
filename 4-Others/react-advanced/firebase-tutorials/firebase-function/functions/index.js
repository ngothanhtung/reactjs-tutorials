const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({ origin: true });
const app = express();

app.use(cors);
app.use(cookieParser);

app.get('/getImages', (req, res) => {
	var docs = [];
	db.collection('images').get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				docs.push(doc.data());
			});

			res.send(docs);
		})
		.catch((err) => {
			res.send("Error getting documents: " + err);
		});
});


app.get('/getProducts', (req, res) => {
	var docs = [];
	db.collection('products').get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				docs.push(doc.data());
			});

			res.send(docs);
		})
		.catch((err) => {
			res.send("Error getting documents: " + err);
		});
});


app.post('/addImage', (req, res) => {
	const data = { title, subTitle, text, imageUrl } = req.body;
	db.collection('images').add(data)
		.then(result => {
			res.json(result);
		}).catch(error => {
			res.send("Error adding document: " + err);
		});
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	db.collection('users').where('username', '==', username).where('password', '==', password).get()
		.then((snapshot) => {
			if (snapshot.size === 0) {
				res.send({ message: 'Login OK' })
			}
			else {
				res.send({ message: 'Login failed' })
			}
		})
		.catch((err) => {
			res.send("Error getting documents: " + err);
		});
});

exports.api = functions.https.onRequest(app);