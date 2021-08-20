import { ResultTitleKey, ResultSubTitleKey } from "../types";

export type LocaleModel = {
  [key in ResultTitleKey | ResultSubTitleKey]: string;
};
