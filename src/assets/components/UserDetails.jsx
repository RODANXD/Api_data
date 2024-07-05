import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => (
  <div className="user-details">
    {user ? (
      <>
        <img src={user.avatar} alt={`${user.profile.firstName} ${user.profile.lastName}`} className="rounded-circle" width="150" height="150" />
        <h2>{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
        <p><strong>Email:</strong> {user.profile.email}</p>
        <p><strong>Job Title:</strong> {user.jobTitle}</p>
        <p><strong>Bio:</strong> {user.Bio}</p>
      </>
    ) : (
      <p>Select a user to see details</p>
    )}
  </div>
);

export default UserDetails;
