import { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
function User() {
  // hooks
  const { user, fetchUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    fetchUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
