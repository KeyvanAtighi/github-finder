import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import ReposItem from "./ReposItem";

function ReposList() {
  const { repos } = useContext(GithubContext);
  return (
    <div className="card card-compact col-span-full bg-neutral shadow-xl">
      <div className="card-body">
        <h3 className="card-title font-bold text-white">Latest Repositories</h3>
        <div className="stats stats-vertical w-full">
          {repos.map((repo) => (
            <ReposItem repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReposList;
