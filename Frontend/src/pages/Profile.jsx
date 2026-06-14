import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(res.data);
    };

    getProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Profile;
