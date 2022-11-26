const firebaseConfig = {
  apiKey: "AIzaSyCwAIow-OJbs6GaGzPXyAOy68FJZPQDx5Y",
  authDomain: "music-project-9a9c9.firebaseapp.com",
  databaseURL: "https://music-project-9a9c9-default-rtdb.firebaseio.com",
  projectId: "music-project-9a9c9",
  storageBucket: "music-project-9a9c9.appspot.com",
  messagingSenderId: "855192458682",
  appId: "1:855192458682:web:ee2de8ddeeb692035bb983",
  measurementId: "G-N5CQB5D8S1"
};
  
  firebase.initializeApp(firebaseConfig);
  
  function randomID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0;
      let v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  function generateFirebaseItem(ID, value) {
    return {
      userid: ID,
      data: value,
    };
  }
  
  function addElementInFirebase(REF, data) {
    firebase
      .database()
      .ref(REF + randomID())
      .set(data);
  }
  
  function getArrayFromFirebase(REF) {
    let tempArray = [];
    firebase
      .database()
      .ref(REF)
      .on("value", (response) => {
        response.forEach((element) => {
          tempArray.push(generateFirebaseItem(element.key, element.val()));
        });
      });
    return tempArray;
  }
  
  function removeRefFromFirebase(REF) {
    firebase.database().ref(`${REF}`).remove();
  }
  
  function removeElementFromFirebase(REF, id) {
    firebase.database().ref(`${REF}/${id}`).remove();
  }
  
  function getElementFromFirebaseByID(REF, id) {
    const tempArray = getArrayFromFirebase(REF);
    let temp = {};
    tempArray.forEach((element) => {
      if (element.userid === id) {
        temp = element;
      }
    });
    console.log(temp);
    return temp;
  }
  
  function changeDataOnFirebaseByID(REF, ID, data) {
    firebase
      .database()
      .ref(REF + "/" + ID)
      .set(data);
  }
  