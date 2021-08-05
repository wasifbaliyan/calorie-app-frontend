import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CalorieData.css";

export default function CalorieData() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user_data")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="calorieData">
      <h2 className="calorie__title">User'sData</h2>
      <div className="table__container">
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>TDEE</th>
              <th>BMR</th>
              <th>Loose 2Kg</th>
              <th>Loose 4Kg</th>
              <th>Gain 2Kg</th>
              <th>Gain 4Kg</th>
              <th>Added</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.tdee.toFixed(1)}</td>
                <td>{user.bmr.toFixed(1)}</td>
                <td>{user.loose2PerDay.toFixed(1)}</td>
                <td>{user.loose4PerDay.toFixed(1)}</td>
                <td>{user.gain2PerDay.toFixed(1)}</td>
                <td>{user.gain4PerDay.toFixed(1)}</td>
                <td>
                  {new Date(user.date).getDate()}/
                  {new Date(user.date).getMonth()}/
                  {new Date(user.date).getFullYear()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
