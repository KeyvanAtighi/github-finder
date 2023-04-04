import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
function SearchUser() {
  // hooks
  const { users, dispach, searchUsers } = useContext(GithubContext);
  const [text, setText] = useState("");
  // hanlde input changes
  const handleChange = (e) => {
    setText(e.target.value);
  };
  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="mx-auto">
        <div className="label">
          <span className="label-text">Search for users on Github</span>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            value={text}
            className="input input-bordered w-96 focus:border-accent"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {users.length > 0 && (
            <div>
              <button
                onClick={() => {
                  dispach({ type: "CLEAR_USERS" });
                }}
                className="btn btn-ghost ml-2"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default SearchUser;
