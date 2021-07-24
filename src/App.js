import React, { useState, useEffect } from "react";
import "./components/User.css";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setLoading(false);
      setUsers(res.data.data);

      setTotalPages(res.data.total_pages);
    };
    fetchUser();
  }, [page]);

  // handle click event
  const handleClick = (num) => {
    setPage(num);
  };
  return (
    <div className="App">
      <h1 className="">Pagination</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
          <Pagination totalpages={totalPages} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default App;
