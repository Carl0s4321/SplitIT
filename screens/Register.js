import React, { useState } from 'react';
import { Text, View, TouchableOpacity} from "react-native";
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, 
    Colors, StyledButton, ButtonText, MsgBox, TextLink, SmallButton} from "../components/styles";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebaseConfig';
import { doc, setDoc, } from 'firebase/firestore';


// icons
import {Octicons, Ionicons, AntDesign} from '@expo/vector-icons';

// Colors
const  {primary,lightgrey, grey} = Colors;

const Register = ({navigation}) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            // save to Firestore
            await setDoc(doc(db, "users", user.uid), {
              name: name,
              email: email
            });

            navigation.navigate('Login');
        }catch(error){
            setError(error.message);
        }
    };

    return(
        <KeyboardAwareScrollView style={{flex: 1}}>
            <StyledContainer>
                <StatusBar style="dark"/>
                <AntDesign name="arrowleft" size={30} color={primary} onPress={() => navigation.navigate('Login')}/>
                <InnerContainer>
                    <PageLogo resizeMode='cover' source={require('./../assets/icon.png')}/>
                    <SubTitle>Create your Account</SubTitle>
                        {error ? <Text style={{ color: 'red', marginBottom: 20, textAlign: 'center'}}>{error}</Text> : null}
                    <StyledFormArea>
                        <MyTextInput 
                            icon="person-fill" 
                            placeholder="Full Name" 
                            placeholderTextColor={lightgrey}
                            onChangeText={setName}
                            keyboard-type="name"/>
                            
                        <MyTextInput 
                            // label="Email Address" 
                            icon="mail" 
                            placeholder="Email Address" 
                            placeholderTextColor={lightgrey} 
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboard-type="email-address"/>

                        <MyTextInput 
                            // label="Password" 
                            icon="lock" 
                            placeholder="Password" 
                            placeholderTextColor={lightgrey} 
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}/>

                        <StyledButton onPress={handleSignup}>
                            <ButtonText>Sign up</ButtonText>
                        </StyledButton>
                        {/* <Line/> */}
                        <MsgBox style={{margin: 15}}>- Or sign up with -</MsgBox>

                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <SmallButton>
                                <AntDesign name="google" size={30} color={primary} />
                            </SmallButton>
                            <SmallButton>
                                <AntDesign name="facebook-square" size={30} color={primary} />
                            </SmallButton>
                            <SmallButton>
                                <AntDesign name="twitter" size={30} color={primary} />
                            </SmallButton>
                        </View>
                    </StyledFormArea>

                        
                </InnerContainer>
            </StyledContainer>
        </KeyboardAwareScrollView>
    );
}
  

const MyTextInput = ({label, icon, hidePassword, setHidePassword, isPassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={primary}/>
            </LeftIcon>
            {/* <StyledInputLabel>{label}</StyledInputLabel> */}
            <StyledTextInput {...props}/>
            {isPassword &&  (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye' : 'eye-off'} size={30} color={primary}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Register;