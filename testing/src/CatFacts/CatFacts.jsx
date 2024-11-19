import React, { useEffect, useState } from "react";

const CatFacts = () => {
  const [catFact, setCatFact] = useState("");
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}`);
      if (!response.ok) throw new Error(`Cat fact failed to fetch`);
      const data = await response.json();
      setCatFact(data);
    } catch (error) {
      setError(error.message)
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  if (error) return <p>{error}</p>;
  if (!catFact) return <p>Loading...</p>;

  return (
    <div>
      <h2>Cat Facts!</h2>
      {catFact && (
        <ul>
          <li>{catFact.data}</li>
        </ul>
      )}
    </div>
  );
};

export default CatFacts;
