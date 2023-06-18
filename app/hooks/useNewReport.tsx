import { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const useNewReport = () => {
  const [activeMood, setActiveMood] = useState(4);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const insertNewReport = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Toast.show({
        text1: "Amazing!",
        text2: "New report added!",
        type: "success",
      });
    }, 2000);
  };

  return {
    activeMood,
    setActiveMood,
    note,
    setNote,
    loading,
    setLoading,
    insertNewReport,
  };
};
