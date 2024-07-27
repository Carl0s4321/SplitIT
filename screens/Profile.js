import react from "react";
import { StyledContainer, StyledFormArea, MsgBox } from "../components/styles";
import MyTextInput from "../components/MyTextInput";
import { Colors } from "../components/styles";
import { signOut } from "firebase/auth";
import { auth} from './../firebaseConfig';

const {lightgrey} = Colors;

const Profile = ({route, navigation}) =>{
    const userData = route.params;
    
    const handleLogout = async () => {
        try {
          await signOut(auth);
          navigation.navigate('Auth', {Screen: 'Login'});
        } catch (error) {
          console.error('Error signing out: ', error);
        }
    }

    return (
        <StyledContainer>
            {userData && (
                <>
                <StyledFormArea>
                    <MyTextInput 
                        icon="person-fill" 
                        placeholder={userData.name} 
                        placeholderTextColor='#000' 
                        keyboard-type="name"
                        />
                    <MyTextInput 
                        icon="mail" 
                        placeholder={userData.email} 
                        placeholderTextColor='#000' 
                        keyboard-type="email-address"
                        />
                </StyledFormArea>
                <MsgBox onPress={handleLogout}>Logout</MsgBox>
            </>
            )}
        </StyledContainer>

// value={password}
// onChangeText={setPassword}

    );
}
export default Profile;