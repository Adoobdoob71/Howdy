import { useState } from "react";

export const useNewReport = () => {
  const [activeMood, setActiveMood] = useState(4);
  const [note, setNote] = useState("");

  return {
    activeMood,
    setActiveMood,
    note,
    setNote,
  };
};
