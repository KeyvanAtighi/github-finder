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
    user: {},
    repos: [],
    loading: false,
  };

  // hooks
  const [state, dispach] = useReducer(GithubReducer, initialState);

  // search users from github api
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    // dispaching fetched data
    dispach({
      type: "GET_USERS",
      payload: { items },
    });
  };

  // fetch single user
  const fetchUser = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token${GITHUB_TOKEN}` },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispach({
        type: "GET_USER",
        payload: { data },
      });
    }
  };

  const fetchRepos = async (login) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispach({
      type: "GET_REPOS",
      payload: { data },
    });
  };

  // set loading
  const setLoading = () => {
    dispach({
      type: "SET_LOADING",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        dispach,
        searchUsers,
        fetchUser,
        fetchRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
