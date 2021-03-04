import { UserDataType } from "./../../components/SignUpForm";
import type { NextApiRequest, NextApiResponse } from "next";
import firebase from "firebase";

(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyBxkXkmAz8ojoAGHEO6D7JapYJwPQnakho",
    authDomain: "flip-lp.firebaseapp.com",
    projectId: "flip-lp",
    storageBucket: "flip-lp.appspot.com",
    messagingSenderId: "204686729080",
    appId: "1:204686729080:web:a2c20dc6b4066d4d58728d"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
})();

const saveUser = (data: UserDataType) => {
  return new Promise((resolve, reject) => {
    const userData = data;
    userData["createdAt"] = firebase.database.ServerValue.TIMESTAMP;
    firebase
      .database()
      .ref()
      .child("users")
      .push(userData, (error: Error | null) => {
        error ? reject(error) : resolve("Success");
      });
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await saveUser(req.body);
    res.statusCode = 200;
    res.json({ ok: true, name: req.body.fullName });
  } catch (error) {
    res.statusCode = 500;
    res.json({ ok: false });
  }
};