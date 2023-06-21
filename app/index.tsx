import "reflect-metadata";
import "react-native-get-random-values";
import { StyleSheet, View, StatusBar } from "react-native";
import { sizes, styles, theme } from "./utils/styles";
import { Modalize } from "react-native-modalize";
import {
  CalendarProvider,
  DateData,
  ExpandableCalendar,
} from "react-native-calendars";
import { STATUSBAR_HEIGHT } from "./utils/constants";
import { DaySquare } from "./components/DaySquare";
import { useIndex } from "./hooks/useIndex";
import { NewReport } from "./fragments/NewReport";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { BaseToast } from "react-native-toast-message";
import DbContext from "./context/dbContext";
import Reports from "./context/reports";
import { DayProps } from "react-native-calendars/src/calendar/day";

export default function Page() {
  const {
    newReportRef,
    chosenDate,
    setChosenDate,
    conn,
    reports,
    readReports,
  } = useIndex();

  const findItem = (
    dayProps: DayProps & {
      date?: DateData;
    }
  ) =>
    reports.find((item) => {
      return (
        item.when.getDate() === dayProps.date.day &&
        item.when.getMonth() === dayProps.date.month &&
        item.when.getFullYear() === dayProps.date.year
      );
    });

  return (
    <DbContext.Provider value={{ connector: conn }}>
      <Reports.Provider value={{ reports, refreshReports: readReports }}>
        <View style={styles.mainWrapper}>
          <StatusBar barStyle="dark-content" translucent animated />
          <View style={stylesheet.statusBar}></View>
          <CalendarProvider date="2023-06-19" showTodayButton>
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
                  //@ts-ignore
                  rating={findItem(dayProps)?.rating}
                  note={findItem(dayProps)?.note}
                  onPress={() => {
                    if (findItem(dayProps) !== undefined) {
                      setChosenDate(dayProps.date);
                      //@ts-ignore
                      dayProps.onPress(dayProps.date);
                    }
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
      </Reports.Provider>
      <Toast
        config={{
          success: (props) => (
            <BaseToast
              {...props}
              style={{
                borderLeftColor: theme.colors.success,
                borderLeftWidth: sizes.SIZE_8,
                borderRadius: sizes.SIZE_8,
                backgroundColor: "transparent",
                elevation: sizes.SIZE_4,
              }}
              text1Style={{
                color: theme.colors.text,
                fontSize: sizes.SIZE_14,
              }}
              text2Style={{
                color: theme.colors.text,
                fontSize: sizes.SIZE_12,
              }}
              contentContainerStyle={{
                backgroundColor: theme.colors.background,
                borderTopRightRadius: sizes.SIZE_8,
                borderBottomRightRadius: sizes.SIZE_8,
              }}
            />
          ),
          error: (props) => (
            <BaseToast
              {...props}
              style={{
                borderLeftColor: theme.colors.danger,
                borderLeftWidth: sizes.SIZE_8,
                borderRadius: sizes.SIZE_8,
                backgroundColor: "transparent",
                elevation: sizes.SIZE_4,
              }}
              text1Style={{
                color: theme.colors.text,
                fontSize: sizes.SIZE_14,
              }}
              text2Style={{
                color: theme.colors.text,
                fontSize: sizes.SIZE_12,
              }}
              contentContainerStyle={{
                backgroundColor: theme.colors.background,
                borderTopRightRadius: sizes.SIZE_8,
                borderBottomRightRadius: sizes.SIZE_8,
              }}
            />
          ),
        }}
      />
    </DbContext.Provider>
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
  header: {
    backgroundColor: theme.colors.card,
    paddingVertical: sizes.SIZE_16,
    paddingHorizontal: sizes.SIZE_12,
  },
  howdyTitle: {
    fontSize: sizes.SIZE_18,
    fontWeight: "bold",
    color: theme.colors.text,
  },
});
