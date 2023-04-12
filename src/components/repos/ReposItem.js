import { FaBook, FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";

function reposItem({ repo }) {
  return (
    <div className="stat hover:bg-base-200">
      <a
        href={`https://github.com/${repo.owner.login}/${repo.name}`}
        className="stat-value mb-4 text-xl font-semibold"
      >
        <FaBook className="inline mr-2" />
        {repo.name}
      </a>
      <p className="mb-2">{repo.description}</p>
      <div>
        <div className="badge badge-outline badge-success mr-2 hover:bg-success hover:text-success-content ">
          <FaEye className="mr-2" />
          {repo.watchers_count}
        </div>
        <div className="badge badge-outline badge-warning mr-2 hover:bg-warning hover:text-warning-content">
          <FaStar className="mr-2" />
          {repo.stargazers_count}
        </div>
        <div className="badge badge-outline badge-error mr-2 hover:bg-error hover:text-error-content">
          <FaInfo className="mr-2" />
          {repo.open_issues}
        </div>
        <div className="badge badge-outline badge-info mr-2 hover:bg-info hover:text-info-content">
          <FaUtensils className="mr-2" />
          {repo.forks}
        </div>
      </div>
    </div>
  );
}

export default reposItem;
