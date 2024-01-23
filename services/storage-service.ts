import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (
  nameValue: string,
  recordArray: string | null
) => {
  try {
    if (recordArray != null) {
      await AsyncStorage.setItem(nameValue, recordArray);
    }
  } catch (error) {}
};

export const removeData = async (nameValue: string) => {
  try {
    await AsyncStorage.removeItem(nameValue);
  } catch (e) {}
};
