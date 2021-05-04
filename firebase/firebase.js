import app from "firebase/app";

import firebaseConfig from "./config";


class firebase {
    constructor() {
        if(!app.apps.length){  //Si no hay una app inicializada entonces ...
            app.initializeApp(firebaseConfig)
        }
    }
}


const firebase1 = new firebase();

export default firebase;