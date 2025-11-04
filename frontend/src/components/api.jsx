import { useState } from "react";

export default function Api() {
  const [data, setData] = useState(null);
  const [selectedApi, setSelectedApi] = useState("");

  const apis = {
    "GitHub User": "https://api.github.com/users/octocat",
    "Random Joke": "https://official-joke-api.appspot.com/random_joke",
    "Bitcoin Price": "https://api.coindesk.com/v1/bpi/currentprice.json",
    "Dog Image": "https://dog.ceo/api/breeds/image/random",
    "Advice Slip": "https://api.adviceslip.com/advice",
  };

  const handleFetch = (url) => {
    setData({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setData({ error: "Failed to load API data" }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontSize: "20px" }}>
      <h2 style={{ marginBottom: "30px" }}>API Data Explorer</h2>

      <select
        value={selectedApi}
        onChange={(e) => setSelectedApi(e.target.value)}
        style={{
          padding: "10px 14px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <option value="">Select an API</option>
        {Object.keys(apis).map((key) => (
          <option key={key} value={apis[key]}>
            {key}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "25px" }}>
        <button
          onClick={() => handleFetch(selectedApi)}
          disabled={!selectedApi}
          style={{
            padding: "10px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: selectedApi ? "pointer" : "not-allowed",
            backgroundColor: selectedApi ? "#007bff" : "#999",
            color: "white",
            border: "none",
            transition: "background-color 0.2s ease",
          }}
        >
          Fetch Data
        </button>
      </div>

      {data && (
        <pre
          style={{
            textAlign: "left",
            display: "inline-block",
            marginTop: "35px",
            background: "#1e1e1e",
            color: "#8dedc0ff",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "80%",
            overflowX: "auto",
            fontFamily: "monospace",
            fontSize: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
