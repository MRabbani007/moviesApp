import axios from "axios";
// Imported Data
import { ACTIONS, SERVER, SERVER_URL } from "./utils";

export const fetchUser = async (action) => {
  try {
    let URL = "";
    let DATA = {};
    switch (action.type) {
      case ACTIONS.SIGN_IN: {
        URL = SERVER_URL + SERVER.SIGN_IN;
        DATA = { userName: action.userName, password: action.password };
        break;
      }
      case ACTIONS.SIGN_UP: {
        URL = SERVER_URL + SERVER.SIGN_UP;
        DATA = { userName: action.userName, password: action.password };
        break;
      }
      case ACTIONS.UPDATE_USER: {
        // TODO: add update data
        URL = SERVER_URL + SERVER.SIGN_UP;
        DATA = { userName: action.userName };
        break;
      }
      default: {
      }
    }
    let response = await axios({
      method: "post",
      url: URL,
      data: DATA,
    });
    return response.data;
  } catch (error) {
    return "Error: fetch user";
  }
};
