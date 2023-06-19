import { FC, ProviderProps, createContext } from "react";
import { Configuration } from "realm";
import { createRealmContext } from "@realm/react";
import { Report } from "../database/models";

const realmConfig: Configuration = {
  schema: [Report],
};

export const realmContext = createRealmContext(realmConfig);

export default createContext<{
  RealmProvider: any;
  useRealm: () => Realm;
  useObject: <T>(
    type: string | (new (...args: any) => T),
    primaryKey: Realm.PrimaryKey
  ) => (T & Realm.Object<T, never>) | null;
  useQuery: <T>(
    type: string | ((new (...args: any) => T) & Realm.ObjectClass<any>)
  ) => Realm.Results<T & Realm.Object<unknown, never>>;
}>({
  RealmProvider: realmContext.RealmProvider,
  useObject: realmContext.useObject,
  useQuery: realmContext.useQuery,
  useRealm: realmContext.useRealm,
});
