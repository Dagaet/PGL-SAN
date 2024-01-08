import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { getActivity } from "../services/boredApiService";
import appColors from "../assets/Styles/appColors";

const ActivitieScreen = () => {
  let [activities, setActivities] = useState<string[]>([]);

  const fetchActivities = () => {
    const fetchData = async () => {
      const results = await getActivity();
      let activitiesNew = [...activities];
      activitiesNew.push(results);
      setActivities(activitiesNew);
    };
    fetchData();
  };

  const onDelete = (item: string) => {
    console.log(item);
    let newActivities: string[] = activities.filter(
      (activity) => item != activity
    );
    console.log(newActivities);
    setActivities(newActivities);
  };

  return (
    <View style={styles.screenContainer}>
      <Pressable
        onPress={fetchActivities}
        style={styles.submitButton}
        accessibilityLabel="Find activities"
      >
        <Text style={styles.buttonText}> Find activities! </Text>
      </Pressable>
      <FlatList
        style={styles.factsContainer}
        data={activities}
        renderItem={(fact) => (
          <View style={styles.activities}>
            <Text style={styles.fact}>{fact.item}</Text>
            <TouchableOpacity
              style={styles.delete}
              onPress={() => onDelete(fact.item)}
            >
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ActivitieScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  submitButton: {
    backgroundColor: appColors.primary,
    color: appColors.white,
    width: "50%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: appColors.white,
    textTransform: "uppercase",
  },
  factsContainer: {
    display: "flex",
    marginVertical: 10,
  },
  fact: {
    width: "80%",
    backgroundColor: "lightgray",
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
  },
  activities: {
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
    backgroundColor: appColors.primary,
    borderRadius: 50,
    width: 20,
    alignItems: "center",
  },
  text: {
    fontWeight: "900",
  },
});
