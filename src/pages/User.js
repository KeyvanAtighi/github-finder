import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";

function User() {
  // hooks
  const { user } = useContext(GithubContext);
  {
    if (user !== null) {
      return <div>{user.login}</div>;
    } else {
      return <h1>no user</h1>;
    }
  }
}

export default User;
