import * as ImagePicker from "expo-image-picker";

const pickImageFunction = async (setDocument: any, fromCamera = false) => {
  let result;
  if (fromCamera) {
    result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  } else {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  }

  if (!result.canceled) {
    setDocument({
      uri: result.assets[0].uri,
      type: result.assets[0].mimeType,
      name: result.assets[0].uri,
    });
  }
};

export default pickImageFunction;
