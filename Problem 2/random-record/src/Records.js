import { useState } from "react";
import "./Records.css";

function Records() {
  const [records, setRecords] = useState([]);

  const handleAddRecord = () => {
    fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}`)
      .then((res) => res.json())
      .then((record) => {
        record = {
          ...record,
          id: record.name + Math.random(),
        };
        setRecords((prevRecords) => [record, ...prevRecords]);
      });
  };

  const handleDeleteRecord = (id) => {
    setRecords((prevRecords) =>
      prevRecords.filter((record) => record.id !== id)
    );
  };

  return (
    <div className="container">
      <div className="records-wrapper">
        <button className="button" onClick={handleAddRecord}>
          Add Record
        </button>
        <div className="records-table">
          <div className="row">
            <p>Name</p>
          </div>
          <div className="records">
            {records.map((record, i) => (
              <div key={i} className="record">
                <p>{record.name}</p>
                <button
                  className="button"
                  onClick={() => handleDeleteRecord(record.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
