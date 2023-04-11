const firebaseConfig = {
  apiKey: "AIzaSyDRbXgHz2kWYE-4kug_kuSnEm6PaQJ7O_M",
  authDomain: "music-project-71f63.firebaseapp.com",
  databaseURL: "https://music-project-71f63-default-rtdb.firebaseio.com",
  projectId: "music-project-71f63",
  storageBucket: "music-project-71f63.appspot.com",
  messagingSenderId: "739716797365",
  appId: "1:739716797365:web:920f8d7835fe13dd93fffc",
  measurementId: "G-BV00R2HQLJ"
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
    return temp;
  }
  
  function changeDataOnFirebaseByID(REF, ID, data) {
    firebase
      .database()
      .ref(REF + "/" + ID)
      .set(data);
  }