const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem("token");

    alert("Logged Out");

    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Welcome To Dashboard</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
