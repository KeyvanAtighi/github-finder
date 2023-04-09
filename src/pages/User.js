import { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaCode, FaUserCheck, FaUserFriends, FaStore } from "react-icons/fa";
function User() {
  // hooks
  const { user, fetchUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    fetchUser(params.login);
  }, []);

  // company
  // :
  // null
  // created_at
  // :
  // "2020-10-23T14:03:42Z"
  // email
  // :
  // null
  // events_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/events{/privacy}"
  // followers
  // :
  // 0
  // followers_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/followers"

  // following_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/following{/other_user}"
  // gists_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/gists{/gist_id}"
  // gravatar_id
  // :
  // ""
  // html_url
  // :
  // "https://github.com/KeyvanAtighi"
  // id
  // :
  // 73350018

  // node_id
  // :
  // "MDQ6VXNlcjczMzUwMDE4"
  // organizations_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/orgs"

  // received_events_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/received_events"
  // repos_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/repos"
  // site_admin
  // :
  // false
  // starred_url
  // :
  //"https://api.github.com/users/KeyvanAtighi/starred{/owner}{/repo}"
  // subscriptions_url
  // :
  // "https://api.github.com/users/KeyvanAtighi/subscriptions"
  // updated_at
  // :
  // "2023-03-04T03:36:00Z"
  // url
  // :
  // "https://api.github.com/users/KeyvanAtighi"
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:grid-rows-3">
          {/* info card */}
          <div className="card card-side col-span-3 bg-neutral shadow-xl">
            {/* child figure card */}
            <div className="card image-full">
              <figure className="w-60">
                <img src={user.avatar_url} alt="avatar" />
              </figure>
              <div className="card-body justify-end mb-0">
                <h2 className="card-title text-gray-100">{user.name}</h2>
                <h6 className="text-sm text-gray-100">{user.login}</h6>
              </div>
            </div>
            {/* child info card body */}
            <div className="card-body w-full">
              <div className="card-title">
                {user.name}
                <span className="badge badge-sm badge-outline badge-accent hover:bg-accent-focus hover:text-accent-content">
                  {user.type}
                </span>
                {user.hireable && (
                  <span className="badge badge-sm badge-primary hover:bg-primary-focus">
                    hireable
                  </span>
                )}
              </div>
              <p>{user.bio}</p>
              <div className="card-actions mb-6">
                <a
                  href={`https://www.github.com/${user.login}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-primary"
                >
                  visit github profile
                </a>
              </div>
              <div className="stats">
                {user.location && (
                  <div className="stat">
                    <div className="stat-title text-sm">Location</div>
                    <div className="stat-value text-sm">{user.location}</div>
                  </div>
                )}
                {user.blog && (
                  <div className="stat">
                    <div className="stat-title text-sm">Website</div>
                    <div className="stat-value text-sm">
                      <a
                        href={`https://${user.blog}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {user.blog}
                      </a>
                    </div>
                  </div>
                )}
                {user.twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-sm">Twitter</div>
                    <div className="stat-value text-sm">
                      <a
                        href={`https://www.twitter.com/${user.twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {user.twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* coutable info card */}
          <div className="card row-span-2 bg-neutral">
            <div className="stats stats-vertical bg-neutral w-4/5 m-auto">
              <div className="stat mb-16">
                <div className="stat-figure">
                  <FaCode className="text-3xl" />
                </div>
                <div className="stat-title">public repos</div>
                <div className="stat-value transition duration-400 hover:text-primary">
                  <a
                    href={`https://github.com/${user.login}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.public_repos}
                  </a>
                </div>
              </div>

              <div className="stat mb-16">
                <div className="stat-figure">
                  <FaUserFriends className="text-3xl" />
                </div>
                <div className="stat-title">followers</div>
                <div className="stat-value transition duration-400 hover:text-primary">
                  <a
                    href={`https://github.com/${user.login}?tab=followers`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.followers}
                  </a>
                </div>
              </div>
              <div className="stat mb-16">
                <div className="stat-figure">
                  <FaUserCheck className="text-3xl" />
                </div>
                <div className="stat-title">following</div>
                <div className="stat-value transition duration-400 hover:text-primary">
                  <a
                    href={`https://github.com/${user.login}?tab=following`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.following}
                  </a>
                </div>
              </div>
              <div className="stat mb-16">
                <div className="stat-figure">
                  <FaStore className="text-3xl" />
                </div>
                <div className="stat-title">public gists</div>
                <div className="stat-value transition duration-400 hover:text-primary">
                  <a
                    href={`https://github.com/${user.login}?tab=gists`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.public_gists}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* repos cad */}
          <div className="card col-span-3 bg-neutral"> </div>
        </div>
      </div>
    </>
  );
}

export default User;
