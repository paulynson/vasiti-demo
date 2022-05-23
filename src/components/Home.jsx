import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';


function Home() {
    const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc`
      );
      setRepos(res.data.items);
      console.log(res.data.items)
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const fetchReposUsers = async (currentPage) => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${currentPage}`
    );
    const myData = await res.data.items;
    setRepos(myData);
    return myData;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const UsersFromServer = await fetchReposUsers(currentPage);
    setRepos(UsersFromServer);
  };
  return (
    <div className="container px-4 my-5 items-center">
    <div className="text-left">
      <h2 className="font-bold uppercase leading-10 my-12 text-3xl text-blue-800">
        GitHub Repositories Users
      </h2>
    </div>
          <div className="my-6">{loading && (
    <div className="lds-spinner text-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    
    )}</div>

    <>
      {repos?.map((repo) => (
        <div
          key={repo.id}
          className="flex gap-4 lg:my-4 my-6 lg:w-full lg:h-auto lg:flex-row flex-col w-[300px] p-4 box-content  border md:justify-center md:items-center justify-center lg:justify-start items-center"
        >
          <img
            src={repo.owner.avatar_url}
            alt={repo.name}
            className="lg:h-auto border lg:w-28 w-[300px] h-[300px]"
          />
          <div>
            <h2 className="text-2xl font-bold"> {repo.full_name}</h2>
            <small className='leading-7 max-w-md'>{repo.description}</small>
            <div className="flex justify-content-start items-center gap-4 my-3">
              <p className="border p-2">Stars: {repo.stargazers_count}</p>
              <p className="border p-2">Issues: {repo.open_issues}</p>
              <small>Submitted {repo.pushed_at} by {repo.name}</small>
            </div>
          </div>
        </div>
      ))}
    </>

          <Pagination handlePageClick={handlePageClick} />
  
  </div>
  )
}

export default Home