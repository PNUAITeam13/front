import * as Yup from "yup";
import {phoneRegExp} from "../general";

export const getSignInSchema = (t:any) =>
  Yup.object().shape({
    login: Yup.string().matches(phoneRegExp, t("signUp.error.phone_number")).required(t("error.required")),
    password: Yup.string()
      .required(t("error.required"))
      .min(6, t("signUp.error.minLength"))
      .max(20, t("signUp.error.maxLength")),
  });
