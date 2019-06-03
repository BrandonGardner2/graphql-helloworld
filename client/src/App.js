import React, { useState, useEffect } from "react";
import "./App.css";

async function loadGreeting() {
  try {
    const response = await fetch("http://localhost:9000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ query: "{ greeting }" })
    });
    const body = await response.json();
    return body.data.greeting;
  } catch (error) {
    return "Error fetching GraphQL greeting.";
  }
}

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    loadGreeting().then(res => {
      setGreeting(res);
    });
  }, [greeting, setGreeting]);

  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
