import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = props => {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text>The categories screen</Text>
      <Button
        title="Go To Meals"
        onPress={() => {
          navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;