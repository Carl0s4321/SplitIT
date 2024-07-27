import react, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StyledContainer, MsgBox, LoadingContainer } from "../components/styles";

import { doc, getDoc } from 'firebase/firestore';


const Home = ({navigation}) => {
    // const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //       try {
    //         const user = auth.currentUser;
    //         if (user) {
    //           const docRef = doc(db, 'users', user.uid);
    //           const docSnap = await getDoc(docRef);
    //           if (docSnap.exists()) {
    //             setUserData(docSnap.data());
    //           } else {
    //             console.log('No such document!');
    //           }
    //         }
    //       } catch (error) {
    //         console.error('Error fetching user data: ', error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };

    //     fetchUserData();
    //   }, []);

      // if (loading) {
      //   return (
      //     <LoadingContainer>
      //       <ActivityIndicator size="large" color="#0000ff" />
      //     </LoadingContainer>
      //   );
      // }

    return(
        <StyledContainer>
            <MsgBox>Hi</MsgBox>
            
        </StyledContainer>
    );
};

export default Home;