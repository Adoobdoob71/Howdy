import { useRef, useState } from "react";
import { DateData } from "react-native-calendars";
import { Modalize } from "react-native-modalize";

const useIndex = () => {
  const [chosenDate, setChosenDate] = useState<(string & DateData) | undefined>(
    undefined
  );

  const newReportRef = useRef<Modalize>(null);

  return {
    newReportRef,
    chosenDate,
    setChosenDate,
  };
};

export { useIndex };
