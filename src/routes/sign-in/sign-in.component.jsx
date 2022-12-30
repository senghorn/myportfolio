import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase-app";
import { useEffect, useState } from "react";
const SignIn = () => {
  const [user, setUser] = useState(null);
  
  const logGoogleUser = async () => {
    const {loggedUser} = await signInWithGooglePopup();
    setUser(loggedUser);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  if (user != null){
    return(
      <div>
        <h1>Logged In</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;