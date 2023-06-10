import { StyleSheet, Text, View, StatusBar } from "react-native";
import { sizes, styles } from "./utils/styles";
import { Modalize } from "react-native-modalize";
import {
  AgendaList,
  CalendarList,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";
import { STATUSBAR_HEIGHT } from "./utils/constants";
import { DaySquare } from "./components/DaySquare/DaySquare";

export default function Page() {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar barStyle="dark-content" translucent animated />
      <CalendarProvider date="2023-06-10" showTodayButton>
        <View style={stylesheet.statusBar}></View>

        <ExpandableCalendar
          firstDay={0}
          horizontal={false}
          animateScroll
          disableWeekScroll
          allowShadow={false}
          dayComponent={(dayProps) => (
            <DaySquare
              rating={Math.round(Math.random() * 7)}
              {...dayProps}
              onPress={() => dayProps.onPress(dayProps.date)}
            />
          )}
          style={{ borderBottomWidth: 0.2, borderColor: "#757575" }}
          closeOnDayPress={true}
        />
        <View style={stylesheet.container}></View>
      </CalendarProvider>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: "#fff",
  },
});
