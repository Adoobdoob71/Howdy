import { FC } from "react";
import {
  Pressable,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { sizes, theme } from "../../utils/styles";
import { DayProps } from "react-native-calendars/src/calendar/day";

interface Props extends DayProps {
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onPress: () => void;
  date?: string | undefined;
}

export const DaySquare: FC<Props> = ({ rating, onPress }) => {
  return (
    <View style={{ borderRadius: sizes.SIZE_4, overflow: "hidden" }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View
          style={[
            stylesheet.main,
            {
              backgroundColor: theme.colors[`rating_color_${rating}`]
                ? theme.colors[`rating_color_${rating}`]
                : theme.colors.card,
            },
          ]}
        ></View>
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
});
