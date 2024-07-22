import styled from 'styled-components';
import Constants from 'expo-constants';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    offwhite: "#f9faff",
    white: "#ffffff",
    grey: "#575757",
    lightgrey: "#999999",
    primary: "#1f319d",
    secondary: "#00b4d8",
    tertiary: "#caf0f8",
};

const {offwhite, white, grey, lightgrey, primary, secondary, tertiary} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${offwhite};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
    padding: 20px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-top: 20px;
    margin-bottom:20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${grey};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${offwhite};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color:${grey};
    borderColor: ${grey};
    borderWidth: 1px;
`;

export const StyledInputLabel = styled.Text`
    color: ${grey};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 18px;
    position: absolute;
    z-index: 1;
`;

// for the eye icon
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 18px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${primary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const SmallButton = styled.TouchableOpacity`
    padding: 15px;
    border-width: 1px;
    border-color: ${grey};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 60px;
    width: 100px;
`;



export const ButtonText = styled.Text`
    color: ${offwhite};
    font-size: 16px;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 14px;
`;

export const TextLink = styled.TouchableOpacity`
    font-size: 14px;
    color: ${primary};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${grey};
    margin-vertical: 10px;
`;

