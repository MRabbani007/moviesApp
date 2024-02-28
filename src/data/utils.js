// export const SERVER_URL = "http://localhost:8000";
export const SERVER_URL = "https://onlinestoreserver-hc3z.onrender.com";

export const ACTIONS = {
  ADD_BOOKMARK: "ADD_BOOKMARK",
  REMOVE_BOOKMARK: "REMOVE_BOOKMARK",
  GET_BOOKMARKS: "GET_BOOKMARKS",
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
  UPDATE_USER: "UPDATE_USER",
};

export const SERVER = {
  BOOKMARKS: "/bookmarks/",
  SIGN_IN: "/signin/",
  SIGN_UP: "/signup/",
};

export const saveUser = (userName) => {
  localStorage.setItem("iviUser", JSON.stringify(userName));
};

export const loadUser = () => {
  let data = localStorage.getItem("iviUser");
  if (!!data) {
    if (data.includes(`"`)) {
      return JSON.parse(data);
    } else {
      return data;
    }
  } else {
    return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem("iviUser");
};
