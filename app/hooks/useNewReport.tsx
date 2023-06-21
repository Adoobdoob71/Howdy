import { useContext, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { DateData } from "react-native-calendars";
import dbContext from "../context/dbContext";
import { Report } from "../database/models/Report";
import reports from "../context/reports";

export const useNewReport = (date: (string & DateData) | undefined) => {
  const [activeMood, setActiveMood] = useState(4);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const { connector } = useContext(dbContext);
  const { refreshReports } = useContext(reports);

  const saveNewReport = async () => {
    setLoading(true);
    try {
      const newReport = new Report();
      newReport.rating = activeMood;
      newReport.note = note;
      const d = new Date();
      d.setDate(date.day);
      d.setMonth(date.month);
      d.setFullYear(date.year);
      newReport.when = d;
      const reportRepository = connector?.getRepository(Report);
      await reportRepository?.save(newReport);
      Toast.show({
        text1: "Amazing!",
        text2: "New report added!",
        type: "success",
      });
      refreshReports();
    } catch (error) {
      Toast.show({
        text1: "Uh oh",
        text2: "Something went wrong...",
        type: "error",
      });
    }
    setLoading(false);
  };

  return {
    activeMood,
    setActiveMood,
    note,
    setNote,
    loading,
    setLoading,
    saveNewReport,
  };
};
