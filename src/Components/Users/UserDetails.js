import React, { useState } from "react";

const UserDetails = ({ user }) => {
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);
  const { id, name, username, address } = user;
  //   button handler
  const DetailsHandle = (id) => {
    setOpen(!open);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };
  console.log(details);
  return (
    <div className="container mb-4 users-body">
      <div className="flex-wrap p-4 d-flex d-row align-items-center">
        <div className="col-md-2">
          <h3 className="me-auto">{name}</h3>
        </div>
        <div className="col-md-3">
          <h3 className="text-uppercase fw-bolder">Username</h3>
          <h3>{username}</h3>
        </div>
        <div className="col-md-3">
          <h3 className="text-uppercase fw-bolder">City</h3>
          <h3>{address?.city}</h3>
        </div>
        <div className="col-md-3">
          <h3 className="text-uppercase fw-bolder">Street</h3>
          <h3>{address?.street}</h3>
        </div>
        <div className="col-md-1">
          <button
            className="ms-auto border-0 p-2 text-white btn"
            onClick={() => DetailsHandle(id)}
          >
            <h4>{open ? "Hide Details" : "View Details"}</h4>
          </button>
        </div>
      </div>
      {/* view details section */}
      {open && (
        <div className="row details shadow mt-0 p-2 m-2 bg-body">
          <div className="col-md-4">
            <h3 className="text-uppercase fw-bolder">Name</h3>
            <h3>{details.name}</h3>
            <h3 className="text-uppercase fw-bolder">Username</h3>
            <h3>{details.username}</h3>
            <h3 className="text-uppercase fw-bolder">Email</h3>
            <h3>{details.email}</h3>
          </div>
          <div className="col-md-8">
            <h3 className="text-uppercase fw-bolder">Website</h3>
            <h3>{details.website}</h3>
            <h3 className="text-uppercase fw-bolder">City</h3>
            <h3>{details.address?.city}</h3>
            <h3 className="text-uppercase fw-bolder">Company Name</h3>
            <h3>{details.company?.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
