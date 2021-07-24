
import { db } from "./firebase";

var data = [
];


db.collection("recentData").onSnapshot(function (querySnapshot) {
  querySnapshot.docChanges.forEach((change) => {
    if(change.type === "added"){
    data.push({
      name: change.doc.data().name,
      email: change.doc.data().email,
      contactNumber: change.doc.data().contactNumber,
      academicYear: change.doc.data().academicYear,
      preference1: change.doc.data().preference1,
      preference2: change.doc.data().preference2,
      preference3: change.doc.data().preference3,
      message: change.doc.data().message,
    });
  }
  });
});

export default data;
