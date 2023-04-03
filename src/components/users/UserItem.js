import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="card compact side shadow-md bg-base-100">
      <div className="card-body flex-row items-center space-x-4">
        <figure className="avatar">
          <div className="w-14 h-14 rounded-full shadow">
            <img src={user.avatar_url} alt="github-user" />
          </div>
        </figure>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/users/${user.login}`}
          >
            visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
