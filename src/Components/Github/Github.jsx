import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/Rutuja1923")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="min-h-[650px] bg-gray-700 text-white text-3xl flex justify-center items-center">
      <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-xl">
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          <img
            src={data.avatar_url}
            alt="GitHub Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white cursor-pointer"
          />
        </a>
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-xl text-gray-300">@{data.login}</p>

        <div className="mt-6 grid grid-cols-3 gap-8 text-lg text-center">
          <div>
            <p className="font-semibold">{data.followers}</p>
            <p className="text-gray-400">Followers</p>
          </div>
          <div>
            <p className="font-semibold">{data.following}</p>
            <p className="text-gray-400">Following</p>
          </div>
          <div>
            <p className="font-semibold">{data.public_repos}</p>
            <p className="text-gray-400">Repos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
