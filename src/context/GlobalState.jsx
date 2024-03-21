import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// Imported Data
import { appReducer } from "./AppReducer";
import AuthContext from "./AuthProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ACTIONS, SERVER } from "../data/actions";
import { useNavigate } from "react-router-dom";

// Initial state
// App will display only 1 list with its tasks
const initialState = {};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();

  // Store data
  const [state, dispatch] = useReducer(appReducer, initialState);

  const [loading, setLoading] = useState(true);

  const handleBookmarksGet = async () => {
    try {
      setLoading(true);
      let response = await axiosPrivate.post(SERVER.BOOKMARKS_GET, {
        roles: auth?.roles,
        action: {
          type: ACTIONS.BOOKMARKS_GET,
          payload: { userName: auth?.user },
        },
      });
      if (response?.data && Array.isArray(response.data)) {
        dispatch({ type: ACTIONS.BOOKMARKS_GET, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmarkAdd = async (bookmark) => {
    dispatch({ type: ACTIONS.BOOKMARKS_ADD, payload: bookmark });
    let response = await axiosPrivate.post(SERVER.BOOKMARKS_ADD, {
      roles: auth?.roles,
      action: {
        type: ACTIONS.BOOKMARKS_ADD,
        payload: { userName: auth?.user, bookmark },
      },
    });
  };

  const handleBookmarkDelete = async (bookmarkID) => {
    dispatch({ type: ACTIONS.BOOKMARKS_DELETE, payload: bookmarkID });
    let response = await axiosPrivate.post(SERVER.BOOKMARKS_ADD, {
      roles: auth?.roles,
      action: {
        type: ACTIONS.BOOKMARKS_ADD,
        payload: { userName: auth?.user, bookmarkID },
      },
    });
  };

  const handleToggleBookmark = async (bookmark) => {};

  useEffect(() => {
    if (auth?.user) {
      handleBookmarksGet();
    }
  }, [auth?.user]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        bookmarks: state,
        handleBookmarkAdd,
        handleBookmarkDelete,
        handleBookmarksGet,
        handleToggleBookmark,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
