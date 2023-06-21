import { createContext } from "react";
import { Report } from "../database/models/Report";

export default createContext<{
  reports: Report[];
  refreshReports: () => Promise<void>;
}>({
  reports: [],
  refreshReports: async () => {},
});
