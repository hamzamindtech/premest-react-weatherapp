import React from 'react';
import image from './aside_image.png';
import './App.css';

function App() {
  return (
    <body>

      <nav>
      <img src="logo.png" alt="MI Weather App" />
      <input type="text" placeholder="Search City"></input>
			<ul>
				<li><a href="#">Log In</a></li>
				<li><a href="#">Home</a></li>
			</ul>
		</nav>

    <section>
      <header class="header-text">
        <h1>MindInc. Weather App</h1>
        <h2>PreMest React Project</h2>
        <p>Weather Temperature and forecasts in fast and elegant way</p>
        <div>
        <p>200 Forecasts per day</p>
        <p>1,000 Customers</p>
        </div>
      </header>

      <aside><img src={image} /></aside>

    </section>


    <section>
            <div class="footer-banner">

                <div class="about-us">
                  <p>About Us<br></br><br></br>
                  MindInc. Weather App is PreMEST React Project that provides current <br></br>and 
                  forecasted weather data via web. Headquartered in Accra, Ghana.
                  </p>
                </div>

                <div class="menu">
                  <p>Menu</p>
                <br></br><br></br>
                
                  <ul>
                      <li><a href="#">Home</a></li>
				              <li><a href="#">Login</a></li>
                  </ul>
                </div>
            <footer>
		        <p>&copy; 2020 MindInc. Weather App. All rights reserved.</p>
		        </footer>
            </div>
        </section>

    </body>
  );
}

export default App;
