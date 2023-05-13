import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
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
      <button className="cta-button">Contact Me</button>
    </div>
  );
}

export default Home;
