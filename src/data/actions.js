export const ACTIONS = {
  BOOKMARKS_GET: "BOOKMARKS_GET",
  BOOKMARKS_ADD: "BOOKMARKS_ADD",
  BOOKMARKS_DELETE: "BOOKMARKS_DELETE",
  BOOKMARKS_GETALL: "BOOKMARKS_GETALL",

  USER_SIGNUP: "USER_SIGNUP",
  USER_SIGNIN: "USER_SIGNIN",
  USER_REFRESH: "USER_REFRESH",
  USER_LOGOUT: "USER_LOGOUT",
  USER_UPDATE: "USER_UPDATE",
  USER_SETTINGS_GET: "USER_SETTINGS_GET",
  USER_PWD: "USER_PWD",
};

export const SERVER = {
  BOOKMARKS_GET: "/bookmarks/getUser",
  BOOKMARKS_ADD: "/bookmarks/add",
  BOOKMARKS_DELETE: "/bookmarks/delete",
  BOOKMARKS_GETALL: "/bookmarks/getAll",

  USER_SIGNUP: "/user/register",
  USER_SIGNIN: "/user/auth",
  USER_REFRESH: "/user/refresh",
  USER_LOGOUT: "/user/logout",
  USER_UPDATE: "/user/settings",
  USER_SETTINGS_GET: "/user/settings",
  USER_PWD: "/user/pwd",
};
