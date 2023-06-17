import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { sizes, styles, theme } from "../utils/styles";
import { useNewReport } from "../hooks/useNewReport";
import { Button } from "../components/Button";

export const NewReport = () => {
  const { activeMood, setActiveMood, note, setNote } = useNewReport();

  return (
    <View style={stylesheet.main}>
      <Text style={stylesheet.title}>How was your day?</Text>
      <View style={[styles.rowCenter, stylesheet.moodBar]}>
        {[...Array(8).keys()].slice(1).map((rating) => (
          <View
            key={rating}
            style={[
              {
                borderWidth: sizes.SIZE_2,
                borderColor: "transparent",
                borderRadius: sizes.SIZE_6,
                overflow: "hidden",
              },
              activeMood === rating && stylesheet.active,
            ]}
          >
            <TouchableNativeFeedback onPress={() => setActiveMood(rating)}>
              <View
                style={[
                  stylesheet.moodButton,
                  styles.center,
                  {
                    //@ts-ignore
                    backgroundColor: theme.colors[`rating_color_${rating}`]
                      ? //@ts-ignore
                        theme.colors[`rating_color_${rating}`]
                      : theme.colors.card,
                  },
                ]}
              ></View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
      <View style={stylesheet.note}>
        <TextInput
          value={note}
          onChangeText={(value) => setNote(value)}
          placeholder="What's on your mind?"
          placeholderTextColor={theme.colors.border}
          multiline={true}
          maxLength={120}
          style={{
            color: theme.colors.text,
            fontSize: sizes.SIZE_14,
          }}
          numberOfLines={10}
          textAlignVertical="top"
          cursorColor={theme.colors.primary}
          selectionColor={theme.colors.primary}
        />
        <Text style={stylesheet.noteLimit}>{note.length}/120</Text>
      </View>
      <Button
        onPress={() => {}}
        style={{
          width: "92.5%",
          alignSelf: "center",
          marginVertical: sizes.SIZE_16,
        }}
        text="Done"
      />
    </View>
  );
};

const stylesheet = StyleSheet.create({
  main: {
    padding: sizes.SIZE_12,
  },
  title: {
    fontSize: sizes.SIZE_20,
    marginTop: sizes.SIZE_5,
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
});
