import axios from "axios";
// Imported Data
import { ACTIONS, SERVER, SERVER_URL } from "./utils";

export const fetchBookmark = async (action) => {
  try {
    let URL = "";
    let DATA = {};
    switch (action.type) {
      case ACTIONS.GET_BOOKMARKS: {
        URL = SERVER_URL + SERVER.BOOKMARKS;
        DATA = { userName: action.userName, action: { type: action.type } };
        break;
      }
      case ACTIONS.ADD_BOOKMARK: {
        URL = SERVER_URL + SERVER.BOOKMARKS;
        DATA = {
          userName: action.userName,
          action: {
            type: action.type,
            movie: action.movie,
          },
        };
        break;
      }
      case ACTIONS.REMOVE_BOOKMARK: {
        URL = SERVER_URL + SERVER.BOOKMARKS;
        DATA = {
          userName: action.userName,
          action: {
            type: action.type,
            movie: action.movie,
          },
        };
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
    return "Error: fetch bookmark";
  }
};
