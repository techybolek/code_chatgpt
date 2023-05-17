import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJoke();

    const interval = setInterval(fetchJoke, 30000); // Fetch a new joke every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => fetchJoke()

  return (
    <div className="home" onClick={handleRefresh}>
      <div className="container">
        <h2>Welcome to My Portfolio</h2>
        <p>
          This website was developed by toromanow in about two hours after following the event by codementor <a href="https://www.codementor.io/events/coding-with-chatgpt-creating-a-website-from-scratch-quickly-gsqtzh0grl/video">here</a>.
          The presenter demonstrated how to develop an application using react without writng a single line of code, exclusively by prompting Chat GPT.
        </p>
        <div className="chuck-norris-joke">
          <h3>Chuck Norris Joke of the Moment</h3>
          <p>{joke}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
