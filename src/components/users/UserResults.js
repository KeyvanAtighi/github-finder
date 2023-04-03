import { useContext, useEffect, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
function UserResults() {
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }
}

export default UserResults;
