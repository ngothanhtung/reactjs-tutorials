const util = require('util');
// ------------------------------------------------------------------------------------------------
// ADD DATA
class CloudFireStoreHelper {
	constructor(db) {
		this.db = db;
	}
	// Add Document
	add() {
		var data = {
			'title': 'Vung Tau City',
			'subTitle': 'Phia Nam',
			'text': 'Thanh pho Bien xinh dep',
			'imageUrl': "https://images.unsplash.com/photo-1446770145316-10a05382c470?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
		};

		var docRef = this.db.collection('images').add(data);
	}

	// Update Document
	update() {
		var docRef = this.db.collection('images').doc("POKuvbni0KBlXGj0wwdr")

		var result = docRef.set({
			'title': 'Danang City',
			'subTitle': 'Beautiful city',
			'text': '',
			'imageUrl': "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
		});
	}

	// Find And update Document
	async findAndUpdate(customerId) {
		let notificationRef = this.db.collection('Notifications');
		let snapshot = await notificationRef.where('customerId', '==', customerId).get();
		if (snapshot.docs.size === 0) {
			// ADD NEW
			let addResult = await notificationRef.add({ customerId: customerId, notificationCount: 1 });
		} else {
			snapshot.docs.forEach(async (doc) => {
				let docRef = notificationRef.doc(doc.id);
				let getResult = await docRef.get();
				let data = getResult.data();
				// console.log(docRef.data());
				let updateResult = await docRef.set({ customerId: customerId, notificationCount: data.notificationCount + 1 });
			});
		}

		// for (doc of customerRef.docs) {
		// 	console.log(doc.id);
		// }
		// .then((snapshot) => {
		// 	if (snapshot.size === 0) {
		// 		// ADD NEW
		// 		notificationRef.add({ customerId: customerId, notificationCount: 1 }).then(result => console.log(result));
		// 	} else {
		// 		snapshot.forEach((doc) => {
		// 			const ref = docRef.doc(doc.id);
		// 			ref.get().then(x => {
		// 				if (!x.exists) {
		// 					console.log('No such document!');
		// 				} else {
		// 					// UPDATE NOTIFICATION COUNT
		// 					ref.set({ customerId: customerId, notificationCount: x.data().notificationCount + 1 });
		// 				}
		// 			});
		// 		});
		// 	}
		// })
		// .catch((error) => {
		// 	console.log('Error', error);
		// 	res.json(error);
		// });
	}


	// Update Document Fields
	updateField() {
		var updateDocRef = this.db.collection('images').doc('POKuvbni0KBlXGj0wwdr');
		var updateSingle = updateDocRef.update({
			subTitle: 'New Nes New SubTitle'
		});
	}

	// Get All Documents
	getAllDocuments() {
		this.db.collection('images').get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					console.log(doc.id, '=>', doc.data());
					console.log("===========================================================================");
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	}

	// Get A Document
	getDocumentById(id) {
		var imagesRef = this.db.collection('images').doc(id);
		var getProduct = imagesRef.get()
			.then(doc => {
				if (!doc.exists) {
					console.log('No such document!');
				} else {
					console.log('Document data (images):', doc.data());
				}
			})
			.catch(err => {
				console.log('Error getting document', err);
			});
	}

	// Get Multiple Documents
	getMultipleDocuments() {
		var imagesRef = this.db.collection("images");
		var query = imagesRef.where('title', '==', 'Danang City').get()
			.then(snapshot => {
				console.log('Document data (images):');
				snapshot.forEach(doc => {
					console.log(doc.id, '=>', doc.data());
				});
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
	}

	realtimeUpdate() {
		var doc = this.db.collection('images').where('title', '==', 'Danang City');

		var observer = doc.onSnapshot(docSnapshot => {
			console.log(`Received doc snapshot: ${docSnapshot}`);
			docSnapshot.docChanges.forEach(function (change) {
				if (change.type === "added") {
					console.log("New: ", change.doc.data());
				}
				if (change.type === "modified") {
					console.log("Modified: ", change.doc.data());
				}
				if (change.type === "removed") {
					console.log("Removed: ", change.doc.data());
				}
			});
			// ...
		}, err => {
			console.log(`Encountered error: ${err}`);
		});
	}
};

module.exports = CloudFireStoreHelper;