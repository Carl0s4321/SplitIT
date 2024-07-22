import React, {useState } from 'react';
import { Text, View, TouchableOpacity} from "react-native";
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, 
    Colors, StyledButton, ButtonText, MsgBox, TextLink, SmallButton} from "../components/styles";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


// icons
import {Octicons, Ionicons, AntDesign} from '@expo/vector-icons';

// Colors
const  {primary,lightgrey, grey} = Colors;

const Login = ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigation.navigate('Home');
        }catch(error){
            setError(error.message);
        }
    };

    return(
        <KeyboardAwareScrollView style={{flex: 1}}>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo resizeMode='cover' source={require('./../assets/icon.png')}/>
                    {/* <PageTitle>SplitIT</PageTitle> */}
                    <SubTitle>Login to your Account</SubTitle>
                    {error ? <Text style={{ color: 'red', marginBottom: 20, textAlign: 'center'}}>{error}</Text> : null}
                    <StyledFormArea>
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

                        <StyledButton onPress={handleLogin}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        {/* <Line/> */}
                        <MsgBox style={{margin: 15}}>- Or sign in with -</MsgBox>

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
                        
                        <MsgBox style={{marginTop: 125}}>Don't have an account?</MsgBox>
                        <TouchableOpacity>
                            <MsgBox style={{color: primary}} onPress={() => navigation.navigate('Register')}>Sign up here</MsgBox>
                        </TouchableOpacity>
                        
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

export default Login;