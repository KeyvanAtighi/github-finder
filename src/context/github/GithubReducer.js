const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return {
        ...state,
        users: action.payload.data,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default GithubReducer;
