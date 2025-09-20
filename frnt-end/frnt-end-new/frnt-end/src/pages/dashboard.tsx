import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <nav>
        <ul>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default UserDashboard;