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
      <h2>Welcome to My Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus ac sem rutrum, vel ullamcorper ipsum
        tincidunt. Vivamus dignissim nunc et cursus fringilla. Vestibulum bibendum orci sed dui facilisis dignissim. In
        porttitor, nunc non suscipit interdum, mauris orci feugiat nunc, ac efficitur orci nisi nec turpis.
      </p>
      <p>
        Nullam sodales ultrices fermentum. Fusce bibendum purus id est consectetur consequat. Nunc consectetur massa sit
        amet diam hendrerit ullamcorper. Donec tincidunt mauris id aliquam congue. Ut ut urna vel ipsum ultrices
        venenatis. Integer rhoncus aliquet lacinia.
      </p>
      <div className="chuck-norris-joke">
        <h3>Chuck Norris Joke of the Moment</h3>
        <p>{joke}</p>
      </div>
      <button className="cta-button">Contact Me</button>
    </div>
  );
}

export default Home;
