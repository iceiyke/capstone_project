import { useContext, useState } from "react";
import "./reserveTable.css";
import { ReservationContext } from "../../context/ReservationContext";

const ReserveTable = () => {
  const { setReservation } = useContext(ReservationContext);
  const [formData, setFormData] = useState({
    date: "",
    occasion: "",
    time: "",
    people: "",
    table: "",
    comments: "",
  });

  const isDisabled = formData.comments.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment for additional requests you may have"
    : "Optional requests";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservation(formData);
  };
  return (
    <div className="content">
      <div className="image">{/* <img src={Pic} fill alt="" /> */}</div>
      <div className="reserve">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Reserve Table</h2>
            {/* {Occasion} */}
            <div className="field">
              <label>Occasion: {formData.occasion}</label>
              <select
                id="occasion"
                htmlFor="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="anniversary">Anniversary</option>
                <option value="dedication">Baby Dedication</option>
                <option value="birthday">Birthday</option>
                <option value="graduation">Graduation</option>
              </select>
            </div>
            {/* {Date} */}
            <div className="field">
              <label>Date: {formData.date}</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            {/* {Time} */}
            <div className="field">
              <label>Time: {formData.time}</label>

              <select
                id="time"
                name="time"
                htmlFor="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="7.30">7.30</option>
                <option value="8.30">8.30</option>
                <option value="9.30">9.30</option>
                <option value="10.30">10.30</option>
                <option value="11.30">11.30</option>
                <option value="12.30">12.30</option>
                <option value="13.30">13.30</option>
                <option value="14.30">14.30</option>
                <option value="15.30">15.30</option>
                <option value="16.30">16.30</option>
                <option value="17.30">17.30</option>
                <option value="18.30">18.30</option>
                <option value="19.30">19.30</option>
                <option value="20.30">20.30</option>
                <option value="21.30">21.30</option>
              </select>
            </div>
            <div className="field">
              <label>Number of People: {formData.people}</label>

              <input
                type="text"
                name="people"
                value={formData.people}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Table Number: {formData.table}</label>

              <select
                id="table"
                name="table"
                htmlFor="table"
                value={formData.table}
                onChange={handleChange}
              >
                <option value="table-1">Table 1</option>
                <option value="table-2">Table 2</option>
                <option value="table-3">Table 3</option>
                <option value="table-4">Table 4</option>
                <option value="table-5">Table 5</option>
                <option value="table-6">Table 6</option>
                <option value="table-7">Table 7</option>
                <option value="table-8">Table 8</option>
                <option value="table-9">Table 9</option>
                <option value="table-10">Table 10</option>
              </select>
            </div>
            <div className="field">
              <label>Comments:</label>
              <textarea
                rows={5}
                placeholder={textAreaPlaceholder}
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
            <button disabled={isDisabled}>Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default ReserveTable;
