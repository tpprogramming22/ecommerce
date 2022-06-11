import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
        </div>
    );    
};

export default SignIn;