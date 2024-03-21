import { ACTIONS } from "../data/actions";

export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.BOOKMARKS_GET: {
      return payload;
    }
    case ACTIONS.BOOKMARKS_ADD: {
    }
    case ACTIONS.BOOKMARKS_DELETE: {
    }
    default:
      return state;
  }
};
