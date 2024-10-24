// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import AuthService from '../Utils/AuthService';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    } else {
      window.location.href = '/';
    }
  }, []);

  const handleEdit = e => {
    e.preventDefault();
    AuthService.updateUser(user);
    alert('Profile updated!');
  };

  return user ? (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Your Profile</h2>
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={user.name}
              onChange={e => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Save
          </button>
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              navigate('/');
            }}
          >
            LogOut
          </button>
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              navigate('/');
              AuthService.logout();
            }}
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

export default Profile;
