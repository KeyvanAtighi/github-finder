import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
function UserResults() {
  // hooks
  const { users, loading } = useContext(GithubContext);

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
