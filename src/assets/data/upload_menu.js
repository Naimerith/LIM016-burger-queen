const admin = require('firebase-admin');
const serviceAccount = require("./key_service_account.json");
const data = require("./listaCartaLuna.json");
const collectionKey = "cartaLuna"; //Name of the collection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

if (data && (typeof data === "object")) {
    data.menu.forEach(docKey => {
        firestore.collection(collectionKey).doc().set(docKey).then((res) => {
            console.log("Document " + docKey + " successfully written!", res);
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
}
