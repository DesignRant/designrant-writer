import React from "react";
let firebase;
if (typeof window !== "undefined") {
  firebase = require("firebase");
}

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user =
      typeof window !== "undefined" ? firebase.auth().currentUser : "";
    return { initializing: !user, user };
  });
  function onChange(user) {
    setState({ initializing: false, user });
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};
