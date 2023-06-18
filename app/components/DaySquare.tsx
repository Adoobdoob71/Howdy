import { FC, RefObject } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { darker_colors, sizes, styles, theme } from "../utils/styles";
import { DateData } from "react-native-calendars";
import { IHandles } from "react-native-modalize/lib/options";

interface Props {
  rating?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onPress: () => void;
  date?: DateData | undefined;
  newReportRef: RefObject<IHandles>;
}

export const DaySquare: FC<Props> = ({
  rating,
  onPress,
  date,
  newReportRef,
}) => {
  const openNewReport = () => newReportRef.current?.open();
  return (
    <View style={{ borderRadius: sizes.SIZE_4, overflow: "hidden" }}>
      <TouchableNativeFeedback
        onPress={() => {
          openNewReport();
          onPress();
        }}
      >
        <View
          style={[
            stylesheet.main,
            styles.center,
            {
              //@ts-ignore
              backgroundColor: theme.colors[`rating_color_${rating}`]
                ? //@ts-ignore
                  theme.colors[`rating_color_${rating}`]
                : theme.colors.card,
            },
          ]}
        >
          <Text
            style={[
              stylesheet.date,
              //@ts-ignore
              { color: darker_colors[`rating_color_${rating}`] },
            ]}
          >
            {date?.day}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  main: {
    height: sizes.SIZE_32,
    width: sizes.SIZE_32,
    borderRadius: sizes.SIZE_4,
  },
  date: {
    fontSize: sizes.SIZE_12,
    fontWeight: "bold",
  },
});
