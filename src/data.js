
import { db } from "./firebase";

var data = [
];


db.collection("recentData").orderBy("name").onSnapshot(function (querySnapshot) {
  querySnapshot.forEach((doc) => {
    data.push({
      name: doc.data().name,
      email: doc.data().email,
      contactNumber: doc.data().contactNumber,
      academicYear: doc.data().academicYear,
      preference1: doc.data().preference1,
      preference2: doc.data().preference2,
      preference3: doc.data().preference3,
      message: doc.data().message,
      timestamp: doc.data().timestamp,
    });
  });
});


export default data;
