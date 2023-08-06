import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { TextInput } from "react-native";
import { SIZES, icons } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const jobTypes = ["Full-time", "Part-time", "Contractor"];

  handleJobTypePress = (item) => {
    setActiveJobType(item);
    if (!router) throw new Error("No Router");
    // TODO: Navigate to search page with selected type of job as query param
    router.push(`/search/${item}`)
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Tahseen</Text>
        <Text style={styles.welcomeMessage}>Find your perfect jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap: SIZES.small}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => handleJobTypePress(item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
