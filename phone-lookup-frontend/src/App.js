import React, { useState } from 'react';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/lookup?number=${encodeURIComponent(phoneNumber)}`
      );
      const data = await response.json();
      setResult({
        number: phoneNumber,
        carrier: data.carrier || "Unknown",
        location: data.country || "Not found",
      });
    } catch (error) {
      alert("Failed to fetch data");
    }
  };

  return (
    <div className="App">
      <h1>Phone Lookup</h1>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleSearch}>Search</button>
      {result && (
        <div className="results">
          <p>Carrier: {result.carrier}</p>
          <p>Location: {result.location}</p>
        </div>
      )}
    </div>
  );
}

export default App;