import { languages } from "../../utils/constant";
import actionTypes from "./actionTypes";

export const appStartUpComplete = () => ({
  type: actionTypes.APP_START_UP_COMPLETE,
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
  type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
  contentOfConfirmModal: contentOfConfirmModal,
});

export const ChangeLanguages = (language) => ({
  type: actionTypes.CHANGE_LANGUAGES,
  language: language,
});


