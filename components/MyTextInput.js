import react from "react";
import { View} from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons'; 
import { LeftIcon, RightIcon, StyledTextInput, StyledInputLabel, Colors, InnerContainer} from "./styles";

// Colors
const  {primary} = Colors;

const MyTextInput = ({label, icon, hidePassword, setHidePassword, isPassword, ...props}) => {
    return(
        <View style={{justifyContent:'center'}}>
            <LeftIcon>
                <Octicons name={icon} size={30} color={primary}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword &&  (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye' : 'eye-off'} size={30} color={primary}/>
                </RightIcon>
            )}
        </View>
    );
};


export default MyTextInput;