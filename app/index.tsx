import { StyleSheet, Text, View, StatusBar } from "react-native";
import { sizes, styles } from './utils/styles';
import { Modalize } from "react-native-modalize";

export default function Page() {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar barStyle="dark-content" translucent animated/>
      <Modalize alwaysOpen={300}>
        <Text style={[styles.text, { fontSize: sizes.SIZE_24 }]}>Hello there</Text>
      </Modalize>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
