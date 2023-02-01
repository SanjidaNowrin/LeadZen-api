import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import UserDetails from "./UserDetails";

const Users = () => {
  const [users, setUsers] = useState([]);
  // pagination
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const lastUserIndex = currentPage * perPage;
  const firstUserIndex = lastUserIndex - perPage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex);
  console.log(currentUser);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="mt-5">
      {currentUser.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
      {/* pagination start */}

      <Pagination
        totalUsers={users.length}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Users;
