import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
import { RecordFile } from "../types/DataTypes";

export const playRecordFile = async (recordFile: RecordFile): Promise<void> => {
  const playbackObject = new Audio.Sound();
  await playbackObject.loadAsync({ uri: recordFile.uri });
  await playbackObject.playAsync();
};

export function getDurationFormatted(millis: number) {
  const minutes = millis / 1000 / 60;
  const minutesDisplay = Math.floor(minutes);
  const seconds = Math.round((minutes - minutesDisplay) * 60);
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutesDisplay}:${secondsDisplay}`;
}
