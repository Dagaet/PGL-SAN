import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";
import appColors from "../assets/Styles/appColors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../services/storage-service";
import {
  getDurationFormatted,
  playRecordFile,
} from "../services/audioRecorderService";
import { RecordFile } from "../types/DataTypes";

const AudioRecorderScreen = () => {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordings, setRecordings] = useState<RecordFile[]>([]);
  const [permissionResponse, requestPermisson] = Audio.usePermissions();

  React.useEffect(() => {
    const dataSounds = async () => {
      const getData = await AsyncStorage.getItem("recordings");
      if (getData != null) {
        setRecordings(JSON.parse(getData));
      } else {
        setRecordings([]);
      }
    };
    dataSounds();
  }, []);

  async function startRecording(): Promise<void> {
    try {
      if (permissionResponse != null) {
        if (permissionResponse.status !== "granted") {
          await requestPermisson();
        }
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      }
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    if (recording !== undefined) {
      await recording.stopAndUnloadAsync();

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });

      const uriRecord = recording.getURI();

      const timeRecord: number = (await recording.getStatusAsync())
        .durationMillis;

      let recordedFile: RecordFile = {
        time: getDurationFormatted(timeRecord),
        uri: uriRecord ?? "",
      };

      let recordingsNew = [...recordings];
      recordingsNew.push(recordedFile);

      storeData("recordings", JSON.stringify(recordingsNew));
      setRecordings(recordingsNew);
    }
  }

  const onDelete = (item: RecordFile) => {
    let newRecordings: RecordFile[] = recordings.filter(
      (recording) => item != recording
    );
    storeData("recordings", JSON.stringify(newRecordings));
    setRecordings(newRecordings);
  };

  const deleteAll = () => {
    let newRecordings: RecordFile[] = [];
    storeData("recordings", JSON.stringify(newRecordings));
    setRecordings(newRecordings);
  };

  return (
    <View>
      <View style={styles.recordingButtonContainer}>
        <TouchableOpacity
          style={styles.recordingButtonTouchable}
          onPress={recording ? stopRecording : startRecording}
        >
          {recording ? (
            <>
              <FontAwesome name="stop" size={24} color="black" />
              <Text style={styles.recordingButton}>Stop recording</Text>
            </>
          ) : (
            <>
              <Fontisto name="record" size={24} color="red" />
              <Text style={styles.recordingButton}>Start recording</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.factsContainer}
        data={recordings}
        renderItem={(record) => (
          <View style={styles.records}>
            <Text style={styles.record}>
              Record {record.index + 1} : {record.item.time}
            </Text>
            <View style={styles.touchableButtons}>
              <TouchableOpacity
                style={styles.playTouchable}
                onPress={() => playRecordFile(record.item)}
              >
                <Text style={styles.play}>
                  <AntDesign name="play" size={34} color="black" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteTouchable}
                onPress={() => onDelete(record.item)}
              >
                <Text style={styles.delete}>
                  <FontAwesome5 name="trash" size={22} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AudioRecorderScreen;

const styles = StyleSheet.create({
  factsContainer: {
    display: "flex",
    marginVertical: 20,
  },
  record: {
    width: "50%",
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    fontSize: 17,
  },
  recordingButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  recordingButton: {},
  recordingButtonTouchable: {
    backgroundColor: appColors.secondary,
    width: 140,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: appColors.headerColor,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  records: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    backgroundColor: "lightgray",
    margin: 5,
    paddingVertical: 2,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  delete: {
    borderRadius: 50,
    width: 40,
    height: 50,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  deleteTouchable: {
    // backgroundColor: appColors.primary,
    borderRadius: 50,
    marginVertical: 10,
    // marginLeft: 10,
  },
  playTouchable: {
    // backgroundColor: appColors.primary,
    borderRadius: 70,
    marginVertical: 10,
    textAlign: "center",
  },
  play: {
    width: 40,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
  touchableButtons: {
    flexDirection: "row",
    // backgroundColor: "lightblue",
    justifyContent: "flex-end",
  },
  text: {
    fontWeight: "900",
  },
});
