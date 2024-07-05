import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './UserList.css';

const UserList = ({ users, onSelectUser, fetchMoreData, hasMore }) => (
  <div className="user-list">
    <h2 className="mb-4">User</h2>
    <InfiniteScroll
      dataLength={users.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more users</p>}
    >
      {users.length > 0 ? users.map(user => (
        <div key={user.id} className="user-item mb-3 p-2 border rounded d-flex align-items-center" onClick={() => onSelectUser(user)}>
          <img src={user.avatar} alt={`${user.profile.firstName} ${user.profile.lastName}`} className="rounded-circle me-3" width="50" height="50" />
          <div className="user-info">
            <span className="user-name fw-bold">{`${user.profile.firstName} ${user.profile.lastName}`}</span>
            <span className="user-title text-muted">{user.jobTitle}</span>
            <span className="user-location text-muted">{user.profile.username}</span>
            <span className="user-other-info text-muted">Other info...</span>
          </div>
        </div>
      )) : <p>No data to show</p>}
    </InfiniteScroll>
  </div>
);

export default UserList;
