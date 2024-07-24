import react, { useEffect, useState } from "react";
import { StyledContainer, MsgBox } from "../components/styles";
import { auth, db } from './../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from "firebase/auth";

const Home = ({navigation}) => {
    const [name, setName] = useState('');

    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigation.navigate('Auth', {Screen: 'Login'});
      } catch (error) {
        console.error('Error signing out: ', error);
      }
    }

      const fetchUserData = async () => {
        const user = auth.currentUser;
  
        if (user) {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setName(userData.name);
          } else {
            console.log('no document :(');
          }
        }
      };
  
      fetchUserData();

    return(
        <StyledContainer>
            <MsgBox>Hi {name}!</MsgBox>
            <MsgBox onPress={handleLogout}>Logout</MsgBox>
        </StyledContainer>
    );
};

export default Home;