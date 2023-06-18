import { FC, PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { sizes, styles, theme } from "../utils/styles";
import { StyleProperty } from "../utils/types";

interface Props extends PropsWithChildren {
  onPress: () => void;
  style?: StyleProperty;
  text: string;
  disabled?: boolean;
}

export const Button: FC<Props> = ({ onPress, style, text, disabled }) => {
  return (
    <View
      style={[
        style,
        {
          borderRadius: sizes.SIZE_4,
          overflow: "hidden",
        },
      ]}
    >
      <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
        <View
          style={[
            stylesheet.main,
            styles.center,
            {
              backgroundColor: disabled
                ? theme.colors.border
                : theme.colors.primary,
            },
          ]}
        >
          <Text style={stylesheet.text}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.primary,
    borderRadius: sizes.SIZE_4,
    paddingVertical: sizes.SIZE_10,
  },
  text: {
    color: "white",
    fontSize: sizes.SIZE_16,
    fontWeight: "bold",
  },
});
