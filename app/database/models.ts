import { Object, BSON } from "realm";

export class Report extends Object<Report> {
  _id!: BSON.ObjectId;
  rating!: number;
  note?: string;
  date!: Date;

  static schema = {
    name: "Report",
    properties: {
      _id: "objectId",
      rating: "int",
      note: { type: "string", optional: true, default: "" },
      date: "date",
    },
    primaryKey: "_id",
  };
}
