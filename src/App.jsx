import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './assets/components/UserDetails';
import UserList from './assets/components/UserList';
import Loader from './assets/components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`);
      setUsers(prevUsers => [...prevUsers, ...response.data]);
      setLoading(false);
      if (response.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          {loading ? <Loader /> : (
            <UserList users={users} onSelectUser={setSelectedUser} fetchMoreData={() => setPage(prevPage => prevPage + 1)} hasMore={hasMore} />
          )}
          {error && <p>No data to show</p>}
        </div>
        <div className="col-md-8">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
