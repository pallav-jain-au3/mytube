import { fetchSearchMatches } from "../api/youtube";

function videoSearchReducer(matches = [], action) {
  if (action.type === "SEARCH_VIDEO") {
    fetchSearchMatches(action.input);
  }
  if (action.type == "LOAD_MATCHES") {
    matches = action.data;
  }

  if (action.type == "CLEAR_MATCHES"){
      matches = []
  }

  return matches;
}

export default videoSearchReducer;
