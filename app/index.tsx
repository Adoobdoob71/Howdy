import { StyleSheet, Text, View, StatusBar, ToastAndroid } from "react-native";
import { sizes, styles } from "./utils/styles";
import { Modalize } from "react-native-modalize";
import {
  AgendaList,
  CalendarList,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";
import { STATUSBAR_HEIGHT } from "./utils/constants";
import { DaySquare } from "./components/DaySquare";
import { useIndex } from "./hooks/useIndex";
import { NewReport } from "./fragments/NewReport";

export default function Page() {
  const { newReportRef, chosenDate, setChosenDate } = useIndex();

  return (
    <View style={styles.mainWrapper}>
      <StatusBar barStyle="dark-content" translucent animated />
      <CalendarProvider date="2023-06-17" showTodayButton>
        <View style={stylesheet.statusBar}></View>

        <ExpandableCalendar
          firstDay={0}
          horizontal={false}
          animateScroll
          disableWeekScroll
          allowShadow={false}
          dayComponent={(dayProps) => (
            <DaySquare
              {...dayProps}
              newReportRef={newReportRef}
              onPress={() => {
                setChosenDate(dayProps.date);
                //@ts-ignore
                dayProps.onPress(dayProps.date);
              }}
            />
          )}
          style={{ borderBottomWidth: 0.2, borderColor: "#757575" }}
          closeOnDayPress={true}
        />
        <View style={stylesheet.container}></View>
      </CalendarProvider>
      <Modalize ref={newReportRef} withHandle={false} adjustToContentHeight>
        <NewReport date={chosenDate} />
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
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: "#fff",
  },
});
