// DOCS: https://firebase.google.com/docs/firestore/?authuser=0
const admin = require('firebase-admin');

var serviceAccount = require("./firebase-training.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var CloudFireStoreHelper = require("./CloudFireStoreHelper");
var helper = new CloudFireStoreHelper(db);
helper.findAndUpdate(19370);

// ------------------------------------------------------------------------------------------------
// ADD DOCUMENT
// helper.add();
// ------------------------------------------------------------------------------------------------

// ADD / EDIT DOCUMENT
// helper.update();

// ------------------------------------------------------------------------------------------------
// UPDATE FIELD
// helper.updateField();

// ------------------------------------------------------------------------------------------------

// GET ALL DATA
// helper.getAllDocuments();
// ------------------------------------------------------------------------------------------------

// GET A DOCUMENT
// helper.getDocumentById('uWCnfye8y2me7A8yvYbo');

// ------------------------------------------------------------------------------------------------

// GET MULTIPLE DOCUMENTS FROM A COLLECTION
// helper.getMultipleDocuments();

// ------------------------------------------------------------------------------------------------

// GET A REALTIME UPDATES WITH CLOUD FIRESTORE
// helper.realtimeUpdate();
