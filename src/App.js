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

    <div>
      <header class="header-text">
        <h1>MindInc. Weather App</h1>
        <h2>PreMest React Project</h2>
        <p>Weather Temperature and forecasts in fast and elegant way</p>
        <div class="box-in">
        <p class="box-in-1">200 Forecasts per day</p>
        <p class="box-in-2">1,000 Customers</p>
        </div>
      </header>
    </div>

    <div class="weather-image"> <aside><img src={image} /></aside> </div>

    <div class="middle-banner">  
        <form>
        <input type="text" placeholder="Search city" name="search" />
        <button type="submit">Search</button>
        </form>
    </div>

    <section>
            <div class="footer-banner">

                <div class="about-us">
                  <p>About Us</p>  <br></br><br></br>
                  <p>
                  MindInc. Weather App is PreMEST React Project that provides current <br></br>and 
                  forecasted weather data via web. Headquartered in Accra, Ghana.
                  </p>
                </div>

                <div class="menu">
                  <p>Menu</p>
                <br></br><br></br>
                
                  <ul>
                      <li><a href="#">Home</a></li>
				              <li><a href="#">Log In</a></li>
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
