import { atom } from "recoil";

export const allAppsState = atom({
  key: 'allAppsState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});