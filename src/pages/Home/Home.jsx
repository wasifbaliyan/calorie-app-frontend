import axios from "axios";
import React, { useState } from "react";
import "./Home.css";
const apiUrl = "https://glacial-brushlands-70999.herokuapp.com/api/tdee";

export default function Home() {
  const [calorieData, setCalorieData] = useState(null);
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");

  const [fat, setFat] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(apiUrl, {
      weight,
      fat,
      level,
      name,
    });
    setCalorieData(response.data);
  };

  return (
    <div>
      <div className="container">
        <h2 className="form__title">Get Your TDEE and BMS</h2>
        <section className="form__container">
          <form onSubmit={handleSubmit} className="tdee__form">
            <div className="label">
              <label htmlFor="weight">Name</label>
            </div>
            <div className="form__field">
              <input
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                id="weight"
                className="input"
              />
            </div>
            <div className="label">
              <label htmlFor="weight">Body Weight(Kg)</label>
            </div>
            <div className="form__field">
              <input
                onChange={(e) => setWeight(e.target.value)}
                required
                type="number"
                id="weight"
                className="input"
              />
            </div>
            <div className="label">
              <label htmlFor="fat">Body Fat(%)</label>
            </div>
            <div className="form__field">
              <input
                onChange={(e) => setFat(e.target.value)}
                required
                type="number"
                id="fat"
                className="input"
              />
            </div>
            <div className="label">
              <label htmlFor="level">Activity Levels</label>
            </div>
            <div className="form__field">
              <select
                onChange={(e) => setLevel(e.target.value)}
                required
                id="level"
                className="input"
              >
                <option value="">Not Selected</option>

                <option value="1.2">Sedentary activity level(1.2)</option>
                <option value="1.375">Lightly active(1.375)</option>
                <option value="1.55">Moderately active(1.55)</option>
                <option value="1.725">Very active(1.725)</option>
                <option value="1.9">Extra active(1.9)</option>
              </select>
            </div>
            <div>
              <button className="button">Calculate</button>
            </div>
          </form>
        </section>
      </div>
      {calorieData && (
        <section className="result__container">
          <div className="result">
            <h2 className="title">Your TDEE was found to be: </h2>
            <p className="output">{calorieData.tdee.toFixed(1)}kcal /day</p>
          </div>
          <div className="result">
            <h2 className="title">Your BMR was found to be: </h2>
            <p className="output">{calorieData.bmr.toFixed(1)}kcal /day</p>
          </div>
          <div className="result">
            <h2 className="title">To loose 2kg in 1 month take: </h2>
            <p className="output">
              {calorieData.loose2PerDay.toFixed(1)}kcal /day
            </p>
          </div>
          <div className="result">
            <h2 className="title">To loose 4kg in 1 month take: </h2>
            <p className="output">
              {calorieData.loose4PerDay.toFixed(1)}kcal /day
            </p>
          </div>
          <div className="result">
            <h2 className="title">To gain 2kg in 1 month take: </h2>
            <p className="output">
              {calorieData.gain2PerDay.toFixed(1)}kcal /day
            </p>
          </div>
          <div className="result">
            <h2 className="title">To gain 4kg in 1 month take: </h2>
            <p className="output">
              {calorieData.gain4PerDay.toFixed(1)}kcal /day
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
