import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

// github token and url
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  // init of global state
  const initialState = {
    users: [],
    loading: true,
  };

  // hooks
  const [state, dispach] = useReducer(GithubReducer, initialState);

  // fetch users
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    // dispaching fetched data
    dispach({
      type: "GET_USERS",
      payload: { data },
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
