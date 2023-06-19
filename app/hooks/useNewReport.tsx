import { useContext, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import RealmContext from "../context/RealmContext";
import { DateData } from "react-native-calendars";

export const useNewReport = (date: (string & DateData) | undefined) => {
  const [activeMood, setActiveMood] = useState(4);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const { useRealm } = useContext(RealmContext);
  const realm = useRealm();

  const saveNewReport = () => {
    setLoading(true);
    realm.write(() => {
      //@ts-ignore
      const d = new Date(date?.dateString);
      realm.create("Report", { rating: activeMood, note: note, date: d });
    });
    setLoading(false);
    Toast.show({
      text1: "Amazing!",
      text2: "New report added!",
      type: "success",
    });
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
