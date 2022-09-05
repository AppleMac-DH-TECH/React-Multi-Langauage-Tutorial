// get text according to id & current language
import { useContext } from "react";
import { LanguageContext } from "./component/containers/Language";
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[tid] || tid;
};