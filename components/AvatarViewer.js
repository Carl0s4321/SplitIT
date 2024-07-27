import react, { useState } from "react";
import { InnerContainer } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const AvatarViewer = ({avatar, setAvatar}) => {
  const handlePickAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3]
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return(
      <InnerContainer>
        <TouchableOpacity onPress={handlePickAvatar}>
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={{ width: 175, height: 175, borderRadius: 87.5 }}
            />
          ) : (
            <Ionicons name="add-circle" size={175} color="grey" />
          )}
        </TouchableOpacity>
      </InnerContainer>
  );
}

export default AvatarViewer;