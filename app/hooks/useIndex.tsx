import { useEffect, useRef, useState } from "react";
import { DateData } from "react-native-calendars";
import { Modalize } from "react-native-modalize";
import { DataSource } from "typeorm";
import { Report } from "../database/models/Report";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const useIndex = () => {
  const [chosenDate, setChosenDate] = useState<(string & DateData) | undefined>(
    undefined
  );
  const [conn, setConn] = useState<DataSource | null>(null);
  const [reports, setReports] = useState<Report[]>([]);

  const newReportRef = useRef<Modalize>(null);

  useEffect(() => {
    try {
      const dataSource = new DataSource({
        database: "testing3",
        driver: require("expo-sqlite"),
        entities: [Report],
        synchronize: true,
        type: "expo",
      });

      dataSource.initialize().then((value) => {
        setConn(value);
      });
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Uh oh...",
        text2: "Something went wrong 😥",
      });
    }
  }, []);

  useEffect(() => {
    if (conn) {
      readReports();
    }
  }, [conn]);

  const readReports = async () => {
    try {
      const reportsData = await conn?.manager.find(Report);
      setReports(reportsData ?? []);
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Uh oh...",
        text2: "Something went wrong 😥",
      });
    }
  };

  return {
    newReportRef,
    chosenDate,
    setChosenDate,
    conn,
    reports,
    readReports,
  };
};

export { useIndex };
