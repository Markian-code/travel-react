import React from "react";
import "./SearchStyle.css";

import Gold from "../../assets/gold.png";

const Search = () => {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            sed officiis sapiente vel architecto at eveniet explicabo facere
            doloribus adipisci dolore natus exercitationem pariatur praesentium
            consequuntur impedit culpa blanditiis ipsam! beatae omnis velit,
            placeat blanditiis? Voluptas quam et aliquid modi numquam impedit
            deserunt. Assumenda quae mollitia impedit voluptatibus molestias
            officiis reprehenderit, magni illum quo iusto delectus. Provident,
            voluptatibus suscipit, recusandae sapiente consequuntur ipsum nihil
            inventore quibusdam similique explicabo quia facere culpa commodi
            impedit maxime nemo! Ullam ab ipsam modi, quasi consequatur
            quibusdam reprehenderit adipisci voluptas dignissimos!
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ margin: "1rem" }} />
              </div>
              <div>
                <h3>WORLD'S LLEADING </h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT</p>
            <p className="offers">VIEV ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrapper">
              <label>Destination</label>
              <select>
                <option value="1">Grade Antigua</option>
                <option value="1">Grenda</option>
                <option value="1">Emerald Bay</option>
                <option value="1">Bora Bora</option>
                <option value="1">Key West</option>
                <option value="1">Maldives</option>
                <option value="1">Barbados</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Avaliabilities</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
