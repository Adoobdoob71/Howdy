import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  ActivityIndicator,
} from "react-native";
import { sizes, styles, theme } from "../utils/styles";
import { useNewReport } from "../hooks/useNewReport";
import { Button } from "../components/Button";
import { DateData } from "react-native-calendars";
import { FC } from "react";

interface Props {
  date: (string & DateData) | undefined;
}

export const NewReport: FC<Props> = ({ date }) => {
  return (
    <View style={stylesheet.main}>
      <View
        style={[
          styles.rowCenter,
          { justifyContent: "space-between", marginTop: sizes.SIZE_8 },
        ]}
      >
        <Button
          text="Share"
          onPress={() => {}}
          style={{ backgroundColor: "transparent" }}
        />
        <Button
          text="Close"
          onPress={() => {}}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  main: {
    padding: sizes.SIZE_12,
  },
  title: {
    fontSize: sizes.SIZE_20,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  moodBar: {
    marginVertical: sizes.SIZE_12,
    marginHorizontal: sizes.SIZE_14,
    justifyContent: "space-between",
  },
  moodButton: {
    height: sizes.SIZE_32,
    width: sizes.SIZE_32,
    borderRadius: sizes.SIZE_4,
  },
  active: {
    borderColor: theme.colors.primary,
  },
  note: {
    width: "92.5%",
    alignSelf: "center",
    borderWidth: sizes.SIZE_1,
    borderColor: theme.colors.border,
    borderRadius: sizes.SIZE_4,
    marginTop: sizes.SIZE_12,
    backgroundColor: theme.colors.background,
    paddingHorizontal: sizes.SIZE_12,
    paddingVertical: sizes.SIZE_8,
  },
  noteLimit: {
    color: theme.colors.border,
    fontSize: sizes.SIZE_10,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  date: {
    fontSize: sizes.SIZE_12,
    color: theme.colors.border,
  },
  loadingOverlay: {
    position: "absolute",
    backgroundColor: `${theme.colors.card}AA`,
    borderRadius: sizes.SIZE_12,
    height: "100%",
    width: "107%",
  },
});
