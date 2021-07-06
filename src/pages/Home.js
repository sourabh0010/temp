import React from 'react'
// import '/css/font-awesome.min.css';


const Home = ()=>{
      return (
        <>
        {/*[if IE 7 ]> <html class="ie ie7"> <![endif]*/}
        {/*[if IE 8 ]> <html class="ie ie8"> <![endif]*/}
        {/*[if IE 9 ]> <html class="ie ie9"> <![endif]*/}
        {/*[if (gt IE 9)|!(IE)]><!*/} {/*<![endif]*/}
        <meta charSet="utf-8" />
       
        {/* Preloader */}
        <div id="preloader">
          <div className="tb-cell">
            <div id="page-loading">
              <div />
              <p>Loading</p>
            </div>
          </div>
        </div>
        {/* Wrap */}
        <div id="wrap">
          {/* Header */}
          <header id="header" className="header">
          </header>
          {/* End Header */}
          {/*Banner*/}
          <section className="banner">
            {/*Background*/}
            <div className="bg-parallax bg-1" />
            {/*End Background*/}
            <div className="container">
              <div className="logo-banner text-center">
                <a href title>
                  <img src="images/logo-banner.png" alt />
                </a>
              </div>
              {/* Banner Content */}
              <div className="banner-cn">
                {/* Tabs Cat Form */}
                <ul className="tabs-cat text-center row">
                  <li className="cate-item col-xs-2">
                    <a data-toggle="tab" href="#form-flight" title>
                      <span>flight</span>
                      <img src="images/icon-flight.png" alt />
                    </a>
                  </li>
                  <li className="cate-item active col-xs-2">
                    <a data-toggle="tab" href="#form-hotel" title>
                      <span>Hotel</span>
                      <img src="images/icon-hotel.png" alt />
                    </a>
                  </li>
                  <li className="cate-item col-xs-2">
                    <a data-toggle="tab" href="#form-car" title>
                      <span>Car</span>
                      <img src="images/icon-car.png" alt />
                    </a>
                  </li>
                  <li className="cate-item col-xs-2">
                    <a data-toggle="tab" href="#form-package" title>
                      <span>package deals</span>
                      <img src="images/icon-tour.png" alt />
                    </a>
                  </li>
                  <li className="cate-item col-xs-2">
                    <a data-toggle="tab" href="#form-cruise" title>
                      <span>cruise</span>
                      <img src="images/icon-cruise.png" alt />
                    </a>
                  </li>
                  <li className="cate-item col-xs-2">
                    <a data-toggle="tab" href="#form-tour" title>
                      <span>TOUR</span>
                      <img src="images/icon-vacation.png" alt />
                    </a>
                  </li>
                </ul>
                {/* End Tabs Cat */}
                {/* Tabs Content */}
                <div className="tab-content">
                  {/* Search Hotel */}
                  <div
                    className="form-cn form-hotel tab-pane active in"
                    id="form-hotel"
                  >
                    <h2>Where would you like to go?</h2>
                    <div className="form-search clearfix">
                      <div className="form-field field-destination">
                        <label htmlFor="destination">
                          <span>Destination:</span> Country, City, Airport, Area,
                          Landmark
                        </label>
                        <input type="text" id="destination" className="field-input" />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input"
                          placeholder="Check in"
                          id="check-in"
                        />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input"
                          placeholder="Check out"
                          id="check-out"
                        />
                      </div>
                      <div className="form-field field-select">
                        <div className="select">
                          <span>Guest</span>
                          <select>
                            <option>Guest</option>
                            <option>1 Guest</option>
                            <option>2 Guest</option>
                            <option>3 Guest</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="awe-btn awe-btn-lager awe-search"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Search Hotel */}
                  {/* Search Car */}
                  <div className="form-cn form-car tab-pane" id="form-car">
                    <h2>Where would you like to go?</h2>
                    <div className="form-search clearfix">
                      <div className="form-field field-picking">
                        <label htmlFor="picking">
                          <span>Picking up:</span> City, airport...
                        </label>
                        <input type="text" id="picking" className="field-input" />
                      </div>
                      <div className="form-field field-droping">
                        <input
                          type="text"
                          className="field-input"
                          placeholder="Droping off"
                        />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input calendar-input"
                          placeholder="Pink up date"
                        />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input calendar-input"
                          placeholder="Drop off date"
                        />
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="awe-btn awe-btn-lager awe-search"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Search Car */}
                  {/* Search Cruise*/}
                  <div className="form-cn form-cruise tab-pane" id="form-cruise">
                    <h2>Where would you like to go?</h2>
                    <ul className="form-radio">
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-2"
                            id="radio-5"
                            className="radio"
                          />
                          <label htmlFor="radio-5">Popular Cruises</label>
                        </div>
                      </li>
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-2"
                            id="radio-6"
                            className="radio"
                          />
                          <label htmlFor="radio-6">Luxury Cruises</label>
                        </div>
                      </li>
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-2"
                            id="radio-7"
                            className="radio"
                          />
                          <label htmlFor="radio-7">River Cruises</label>
                        </div>
                      </li>
                    </ul>
                    <div className="form-search clearfix">
                      <div className="form-field field-destination">
                        <label htmlFor="destination2">
                          <span>Destination:</span> Asia...
                        </label>
                        <input
                          type="text"
                          id="destination2"
                          className="field-input"
                        />
                      </div>
                      <div className="form-field field-select field-lenght">
                        <div className="select">
                          <span>Length of Cruise</span>
                          <select>
                            <option>Length of Cruise</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-month">
                        <div className="select">
                          <span>Month</span>
                          <select>
                            <option>Month</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-port">
                        <div className="select">
                          <span>Cruise Departure Port</span>
                          <select>
                            <option>Cruise Departure Port</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-line">
                        <div className="select">
                          <span>Cruise Line</span>
                          <select>
                            <option>Cruise Line</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="awe-btn awe-btn-medium awe-search"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Search Cruise */}
                  {/* Search Flight*/}
                  <div className="form-cn form-flight tab-pane" id="form-flight">
                    <h2>Where would you like to go?</h2>
                    <div className="form-search clearfix">
                      <div className="form-field field-from">
                        <label htmlFor="flight-from">
                          <span>Flight from:</span> Airport
                        </label>
                        <input
                          type="text"
                          name="flightfrom"
                          id="flight-from"
                          className="field-input"
                        />
                      </div>
                      <div className="form-field field-to">
                        <label htmlFor="flight-to">
                          <span>To :</span> Country, Airpor
                        </label>
                        <input type="text" id="flight-to" className="field-input" />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input calendar-input"
                          placeholder="Departing"
                        />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input calendar-input"
                          placeholder="Returning"
                        />
                      </div>
                      <div className="form-field field-select field-adult">
                        <div className="select">
                          <span>Adults</span>
                          <select>
                            <option>Adults</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-children">
                        <div className="select">
                          <span>Children</span>
                          <select>
                            <option>Children</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="awe-btn awe-btn-medium awe-search"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Search Flight */}
                  {/* Search Package */}
                  <div className="form-cn form-package tab-pane" id="form-package">
                    <h2>Where would you like to go?</h2>
                    <ul className="form-radio">
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-1"
                            id="radio-1"
                            className="radio"
                          />
                          <label htmlFor="radio-1">Flight + Hotel</label>
                        </div>
                      </li>
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-1"
                            id="radio-2"
                            className="radio"
                          />
                          <label htmlFor="radio-2">Flight + Hotel +Car</label>
                        </div>
                      </li>
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-1"
                            id="radio-3"
                            className="radio"
                          />
                          <label htmlFor="radio-3">Hotel +Car</label>
                        </div>
                      </li>
                      <li>
                        <div className="radio-checkbox">
                          <input
                            type="radio"
                            name="radio-1"
                            id="radio-4"
                            className="radio"
                          />
                          <label htmlFor="radio-4">Flight +Car</label>
                        </div>
                      </li>
                    </ul>
                    <div className="form-search clearfix">
                      <div className="form-field field-from">
                        <label htmlFor="filghtfrom">
                          <span>Flight From:</span> Airport...
                        </label>
                        <input type="text" id="filghtfrom" className="field-input" />
                      </div>
                      <div className="form-field field-to">
                        <label htmlFor="flightto">
                          <span>To:</span> Country, Airport
                        </label>
                        <input type="text" id="flightto" className="field-input" />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input calendar-input"
                          placeholder="Departing"
                        />
                      </div>
                      <div className="form-field field-date">
                        <input
                          type="text"
                          className="field-input calendar-input"
                          placeholder="Returning"
                        />
                      </div>
                      <div className="form-field field-select field-adults">
                        <div className="select">
                          <span>Adults</span>
                          <select>
                            <option>Adults</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-children">
                        <div className="select">
                          <span>Children</span>
                          <select>
                            <option>Children</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="awe-btn awe-btn-medium awe-search"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Search Package */}
                  {/* Search Tour*/}
                  <div className="form-cn form-tour tab-pane" id="form-tour">
                    <h2>Where would you like to go?</h2>
                    <div className="form-search clearfix">
                      <div className="form-field field-select field-region">
                        <div className="select">
                          <span>
                            Region: <small>Wourldwide, africa..</small>
                          </span>
                          <select>
                            <option>Africa</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-country">
                        <div className="select">
                          <span>Country</span>
                          <select>
                            <option>Country</option>
                            <option>Viet Nam</option>
                            <option>Thai Lan</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field field-select field-style">
                        <div className="select">
                          <span>Tour Style</span>
                          <select>
                            <option>Style One</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="awe-btn awe-btn-medium awe-search"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Search Tour */}
                </div>
                {/* End Tabs Content */}
              </div>
              {/* End Banner Content */}
            </div>
          </section>
          {/*End Banner*/}
          {/* Sales */}
          <section className="sales">
            {/* Title */}
            <div className="title-wrap">
              <div className="container">
                <div className="travel-title float-left">
                  <h2>
                    Hot Sale Today:{" "}
                    <span>Paris, Amsterdam, Saint Petersburg &amp; more</span>
                  </h2>
                </div>
                <a
                  href="#"
                  title
                  className="awe-btn awe-btn-5 awe-btn-lager arrow-right text-uppercase float-right"
                >
                  ALL SALES
                </a>
              </div>
            </div>
            {/* End Title */}
            {/* Hot Sales Content */}
            <div className="container">
              <div className="sales-cn">
                <div className="row">
                  {/* HostSales Item */}
                  <div className="col-xs-6 col-md-3">
                    <div className="sales-item">
                      <figure className="home-sales-img">
                        <a href title>
                          <img src="images/deal/img-1.jpg" alt />
                        </a>
                        <figcaption>
                          Save <span>30</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
                          <div className="home-sales-name">
                            <a href="#" title>
                              Copley Square Hotel
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href title>
                              Boston
                            </a>
                            ,
                            <a href title>
                              Massachusetts
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="price-box">
                          <span className="price old-price">
                            From <del>$269</del>
                          </span>
                          <span className="price special-price">
                            $175<small>/night</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End HostSales Item */}
                  {/* HostSales Item */}
                  <div className="col-xs-6 col-md-3">
                    <div className="sales-item">
                      <figure className="home-sales-img">
                        <a href title>
                          <img src="images/deal/img-2.jpg" alt />
                        </a>
                        <figcaption>
                          Save <span>30</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
                          <div className="home-sales-name">
                            <a href="#" title>
                              Grand Hotel Bagni Nuovi
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href title>
                              Boston
                            </a>
                            ,
                            <a href title>
                              Italy
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="price-box">
                          <span className="price old-price">
                            From <del>$632</del>
                          </span>
                          <span className="price special-price">
                            $345<small>/night</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End HostSales Item */}
                  {/* HostSales Item */}
                  <div className="col-md-6">
                    <div className="sales-item ">
                      <figure className="home-sales-img">
                        <a href title>
                          <img src="images/deal/img-3.jpg" alt />
                        </a>
                        <figcaption>
                          Save <span>30</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
                          <div className="home-sales-name">
                            <a href="#" title>
                              The Standard, East Village
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href title>
                              New York
                            </a>
                            ,
                            <a href title>
                              New York
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="price-box">
                          <span className="price old-price">
                            From <del>$582</del>
                          </span>
                          <span className="price special-price">
                            $258<small>/night</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End HostSales Item */}
                  {/* HostSales Item */}
                  <div className="col-md-6">
                    <div className="sales-item">
                      <figure className="home-sales-img">
                        <a href title>
                          <img src="images/deal/img-4.jpg" alt />
                        </a>
                        <figcaption>
                          Save <span>30</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
                          <div className="home-sales-name">
                            <a href="#" title>
                              Ganges River Cruise
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href title>
                              London
                            </a>
                            ,
                            <a href title>
                              United Kingdom
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="price-box">
                          <span className="price old-price">
                            From <del>$457</del>
                          </span>
                          <span className="price special-price">
                            $258<small>/night</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End HostSales Item */}
                  {/* HostSales Item */}
                  <div className="col-xs-6 col-md-3">
                    <div className="sales-item">
                      <figure className="home-sales-img">
                        <a href title>
                          <img src="images/deal/img-5.jpg" alt />
                        </a>
                        <figcaption>
                          Save <span>30</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
                          <div className="home-sales-name">
                            <a href="#" title>
                              Town Hall Hotel
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href title>
                              Boston
                            </a>
                            ,
                            <a href title>
                              Massachusetts
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="price-box">
                          <span className="price old-price">
                            From <del>$269</del>
                          </span>
                          <span className="price special-price">
                            $175<small>/night</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End HostSales Item */}
                  {/* HostSales Item */}
                  <div className="col-xs-6 col-md-3">
                    <div className="sales-item">
                      <figure className="home-sales-img">
                        <a href title>
                          <img src="images/deal/img-6.jpg" alt />
                        </a>
                        <figcaption>
                          Save <span>30</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
                          <div className="home-sales-name">
                            <a href="#" title>
                              A Hidden NYC Mystery Hotel
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href title>
                              Boston
                            </a>
                            ,
                            <a href title>
                              Italy
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="price-box">
                          <span className="price old-price">
                            From <del>$354</del>
                          </span>
                          <span className="price special-price">
                            $255<small>/night</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End HostSales Item */}
                </div>
              </div>
            </div>
            {/* End Hot Sales Content */}
          </section>
          {/* End Sales */}
          {/* Travel Destinations */}
          <section className="destinations">
            {/* Title */}
            <div className="title-wrap">
              <div className="container">
                <div className="travel-title float-left">
                  <h2>Top Travel Destinations</h2>
                </div>
                <a
                  href="#"
                  title
                  className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                >
                  view all
                </a>
              </div>
            </div>
            {/* End Title */}
            {/* Destinations Content */}
            <div className="destinations-cn">
              {/* Background */}
              <div className="bg-parallax bg-2" />
              {/* End Background */}
              <div className="container">
                <div className="row">
                  {/* Destinations Filter */}
                  <div className="col-md-4 col-lg-3">
                    <div className="intro-filter">
                      <div className="intro">
                        <p>
                          <small>Discover</small>
                          <br />
                          <span>2364</span> destinations
                        </p>
                        <p>
                          <small>With</small>
                          <br />
                          <span>152,364</span> properties
                        </p>
                      </div>
                      <ul className="filter">
                        <li className="active">
                          <a data-toggle="tab" href="#destinations-1">
                            <i className="fa fa-map-marker" /> Recommendation for you
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#destinations-2">
                            <i className="fa fa-map-marker" /> Australia &amp; Oceania
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#destinations-3">
                            <i className="fa fa-map-marker" /> Asia
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#destinations-4">
                            <i className="fa fa-map-marker" /> Europe
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#destinations-5">
                            <i className="fa fa-map-marker" /> USA &amp; Canada
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#destinations-6">
                            <i className="fa fa-map-marker" /> The rest of the world
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Destinations Filter */}
                  {/* Destinations Grid */}
                  <div className="col-md-8 col-lg-9">
                    <div className="tab-content destinations-grid">
                      {/* Tab One */}
                      <div
                        id="destinations-1"
                        className="clearfix tab-pane fade active in "
                      >
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item ">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  London - UK
                                </a>
                              </div>
                              <span className="properties-nb">
                                <ins>1289</ins> properties
                              </span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-1.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Paris - France
                                </a>
                              </div>
                              <span className="properties-nb">239 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-2.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Rome - Italy
                                </a>
                              </div>
                              <span className="properties-nb">478 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-3.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Barcelona - Spain
                                </a>
                              </div>
                              <span className="properties-nb">452 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-4.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Madrid - Spain
                                </a>
                              </div>
                              <span className="properties-nb">794 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-5.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Vienna - Austria
                                </a>
                              </div>
                              <span className="properties-nb">1289 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-6.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                      </div>
                      {/* End Tab One */}
                      {/* Tab Two */}
                      <div id="destinations-2" className="clearfix tab-pane fade">
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item ">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  London - UK
                                </a>
                              </div>
                              <span className="properties-nb">
                                <ins>1289</ins> properties
                              </span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-1.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Paris - France
                                </a>
                              </div>
                              <span className="properties-nb">239 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-2.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Rome - Italy
                                </a>
                              </div>
                              <span className="properties-nb">478 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-3.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Barcelona - Spain
                                </a>
                              </div>
                              <span className="properties-nb">452 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-4.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Madrid - Spain
                                </a>
                              </div>
                              <span className="properties-nb">794 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-5.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                        {/* Destinations Item */}
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                          <div className="destinations-item">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href title>
                                  Vienna - Austria
                                </a>
                              </div>
                              <span className="properties-nb">1289 properties</span>
                            </div>
                            <figure className="destinations-img">
                              <a href title>
                                <img src="images/destinations/img-6.jpg" alt />
                              </a>
                            </figure>
                          </div>
                        </div>
                        {/* End Destinations Item */}
                      </div>
                      {/* End Tab Two */}
                    </div>
                  </div>
                  {/* ENd Destinations Grid */}
                </div>
              </div>
            </div>
            {/* End Destinations Content */}
          </section>
          {/* End Travel Destinations */}
          {/* Travel Magazine */}
          <section className="magazine">
            {/* Title */}
            <div className="title-wrap">
              <div className="container">
                <div className="travel-title float-left">
                  <h2>Travel Magazine</h2>
                </div>
                <a
                  href="#"
                  title
                  className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                >
                  view all
                </a>
              </div>
            </div>
            {/* End Title */}
            {/* Magazine Content */}
            <div className="container">
              <div className="magazine-cn">
                <div className="row">
                  {/* Magazine Descript */}
                  <div className="col-lg-6">
                    <div className="magazine-ds">
                      <div id="owl-magazine-ds">
                        {/* Magazine Descript Item */}
                        <div className="magazine-item">
                          <div className="magazine-header">
                            <h2>Five festivals to look forward to this year</h2>
                            <ul>
                              <li>
                                by{" "}
                                <a href title>
                                  Admin
                                </a>
                              </li>
                              <li>03.5.2014</li>
                            </ul>
                            <hr className="hr" />
                          </div>
                          <div className="magazine-body">
                            <p>
                              Suspendisse ullamcorper lacus et commodo laoreet. Sed
                              sodales aliquet felis, quis volutpat massa imperdiet in.
                              Praesent rutrum malesuada risus, ullamcorper pretium
                              tortor. Mauris lacinia nisl id massa consectetur, eu
                              tempus mauris lacinia. Fusce commodo porttitor sapien
                              quis condimentum.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae. Suspendisse eu libero odio.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae.
                            </p>
                          </div>
                          <div className="magazine-footer clearfix">
                            <div className="post-share magazine-share float-left">
                              <a href title>
                                <i className="fa fa-facebook" />
                              </a>
                              <a href title>
                                <i className="fa fa-twitter" />
                              </a>
                              <a href title>
                                <i className="fa fa-google-plus" />
                              </a>
                            </div>
                            <a
                              href
                              title
                              className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                            >
                              view more
                            </a>
                          </div>
                        </div>
                        {/* End Magazine Descript Item */}
                        {/* Magazine Descript Item */}
                        <div className="magazine-item">
                          <div className="magazine-header">
                            <h2>Five festivals to look forward to this year</h2>
                            <ul>
                              <li>
                                by{" "}
                                <a href title>
                                  Admin
                                </a>
                              </li>
                              <li>03.5.2014</li>
                            </ul>
                            <hr className="hr" />
                          </div>
                          <div className="magazine-body">
                            <p>
                              Suspendisse ullamcorper lacus et commodo laoreet. Sed
                              sodales aliquet felis, quis volutpat massa imperdiet in.
                              Praesent rutrum malesuada risus, ullamcorper pretium
                              tortor. Mauris lacinia nisl id massa consectetur, eu
                              tempus mauris lacinia. Fusce commodo porttitor sapien
                              quis condimentum.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae. Suspendisse eu libero odio.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae.
                            </p>
                          </div>
                          <div className="magazine-footer clearfix">
                            <div className="post-share magazine-share float-left">
                              <a href title>
                                <i className="fa fa-facebook" />
                              </a>
                              <a href title>
                                <i className="fa fa-twitter" />
                              </a>
                              <a href title>
                                <i className="fa fa-google-plus" />
                              </a>
                            </div>
                            <a
                              href
                              title
                              className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                            >
                              view more
                            </a>
                          </div>
                        </div>
                        {/* End Magazine Descript Item */}
                        {/* Magazine Descript Item */}
                        <div className="magazine-item">
                          <div className="magazine-header">
                            <h2>Five festivals to look forward to this year</h2>
                            <ul>
                              <li>
                                by{" "}
                                <a href title>
                                  Admin
                                </a>
                              </li>
                              <li>03.5.2014</li>
                            </ul>
                            <hr className="hr" />
                          </div>
                          <div className="magazine-body">
                            <p>
                              Suspendisse ullamcorper lacus et commodo laoreet. Sed
                              sodales aliquet felis, quis volutpat massa imperdiet in.
                              Praesent rutrum malesuada risus, ullamcorper pretium
                              tortor. Mauris lacinia nisl id massa consectetur, eu
                              tempus mauris lacinia. Fusce commodo porttitor sapien
                              quis condimentum.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae. Suspendisse eu libero odio.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae.
                            </p>
                          </div>
                          <div className="magazine-footer clearfix">
                            <div className="post-share magazine-share float-left">
                              <a href title>
                                <i className="fa fa-facebook" />
                              </a>
                              <a href title>
                                <i className="fa fa-twitter" />
                              </a>
                              <a href title>
                                <i className="fa fa-google-plus" />
                              </a>
                            </div>
                            <a
                              href
                              title
                              className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                            >
                              view more
                            </a>
                          </div>
                        </div>
                        {/* End Magazine Descript Item */}
                        {/* Magazine Descript Item */}
                        <div className="magazine-item">
                          <div className="magazine-header">
                            <h2>Five festivals to look forward to this year</h2>
                            <ul>
                              <li>
                                by{" "}
                                <a href title>
                                  Admin
                                </a>
                              </li>
                              <li>03.5.2014</li>
                            </ul>
                            <hr className="hr" />
                          </div>
                          <div className="magazine-body">
                            <p>
                              Suspendisse ullamcorper lacus et commodo laoreet. Sed
                              sodales aliquet felis, quis volutpat massa imperdiet in.
                              Praesent rutrum malesuada risus, ullamcorper pretium
                              tortor. Mauris lacinia nisl id massa consectetur, eu
                              tempus mauris lacinia. Fusce commodo porttitor sapien
                              quis condimentum.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae. Suspendisse eu libero odio.
                            </p>
                            <p>
                              Curabitur sollicitudin magna sed sem blandit sodales.
                              Integer in eros sit amet tellus vulputate laoreet ut in
                              purus. Nullam quis lacus nisl. <br />
                              Sed venenatis commodo leo, ac pulvinar ipsum mattis
                              vitae.
                            </p>
                          </div>
                          <div className="magazine-footer clearfix">
                            <div className="post-share magazine-share float-left">
                              <a href title>
                                <i className="fa fa-facebook" />
                              </a>
                              <a href title>
                                <i className="fa fa-twitter" />
                              </a>
                              <a href title>
                                <i className="fa fa-google-plus" />
                              </a>
                            </div>
                            <a
                              href
                              title
                              className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                            >
                              view more
                            </a>
                          </div>
                        </div>
                        {/* End Magazine Descript Item */}
                      </div>
                    </div>
                  </div>
                  {/* End Magazine Descript */}
                  {/* Magazine Thumnail */}
                  <div className="col-lg-6">
                    <div className="magazine-thum" id="magazine-thum">
                      {/*Thumnail Item*/}
                      <div className="thumnail-item active clearfix">
                        <figure className="float-left">
                          <img src="images/magazine/img-1.jpg" alt />
                        </figure>
                        <div className="thumnail-text">
                          <h4>Thailand by Train with Eastern and Oriental Express</h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                      {/*End Thumnail Item*/}
                      {/*Thumnail Item*/}
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="images/magazine/img-2.jpg" alt />
                        </figure>
                        <div className="thumnail-text">
                          <h4>Thailand by Train with Eastern and Oriental Express</h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                      {/*End Thumnail Item*/}
                      {/*Thumnail Item*/}
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="images/magazine/img-3.jpg" alt />
                        </figure>
                        <div className="thumnail-text">
                          <h4>Thailand by Train with Eastern and Oriental Express</h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                      {/*End Thumnail Item*/}
                      {/*Thumnail Item*/}
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="images/magazine/img-4.jpg" alt />
                        </figure>
                        <div className="thumnail-text">
                          <h4>Thailand by Train with Eastern and Oriental Express</h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                      {/*End Thumnail Item*/}
                    </div>
                  </div>
                  {/* End Magazine Thumnail */}
                </div>
              </div>
            </div>
            {/* End Magazine Content */}
          </section>
          {/* End Travel Magazine */}
          {/* Confidence and Subscribe  */}
          <section className="confidence-subscribe">
            {/* Background */}
            <div className="bg-parallax bg-3" />
            {/* End Background */}
            <div className="container">
              <div className="row cs-sb-cn">
                {/* Confidence */}
                <div className="col-md-6">
                  <div className="confidence">
                    <h3>Book with confidence</h3>
                    <ul>
                      <li>
                        <span className="label-nb">01</span>
                        <h5>No booking charges</h5>
                        <p>
                          We don't charge you an extra fee for booking a hotel room
                          with us
                        </p>
                      </li>
                      <li>
                        <span className="label-nb">02</span>
                        <h5>No cancellation fees</h5>
                        <p>
                          We don't charge you a cancellation or modification fee in
                          case plans change
                        </p>
                      </li>
                      <li>
                        <span className="label-nb">03</span>
                        <h5>Instant confirmation</h5>
                        <p>
                          Instant booking confirmation whether booking online or via
                          the telephone
                        </p>
                      </li>
                      <li>
                        <span className="label-nb">04</span>
                        <h5>Flexible booking</h5>
                        <p>
                          You can book up to a whole year in advance until the moment
                          of your stay
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Confidence */}
                {/* Subscribe */}
                <div className="col-md-6">
                  <div className="subscribe">
                    <h3>Subscribe to our newsletter</h3>
                    <p>
                      Enter your email address and we’ll send you our regular
                      promotional emails, packed with special offers, great deals, and
                      huge discounts
                    </p>
                    {/* Subscribe Form */}
                    <div className="subscribe-form">
                      <form action="#" method="get">
                        <input
                          type="text"
                          name
                          defaultValue
                          placeholder="Your email"
                          className="subscribe-input"
                        />
                        <button
                          type="submit"
                          className="awe-btn awe-btn-5 arrow-right text-uppercase awe-btn-lager"
                        >
                          subcrible
                        </button>
                      </form>
                    </div>
                    {/* End Subscribe Form */}
                    {/* Follow us */}
                    <div className="follow-us">
                      <h4>Follow us</h4>
                      <div className="follow-group">
                        <a href title>
                          <i className="fa fa-facebook" />
                        </a>
                        <a href title>
                          <i className="fa fa-twitter" />
                        </a>
                        <a href title>
                          <i className="fa fa-pinterest" />
                        </a>
                        <a href title>
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href title>
                          <i className="fa fa-instagram" />
                        </a>
                        <a href title>
                          <i className="fa fa-google-plus" />
                        </a>
                        <a href title>
                          <i className="fa fa-digg" />
                        </a>
                      </div>
                    </div>
                    {/* Follow us */}
                  </div>
                </div>
                {/* End Subscribe */}
              </div>
            </div>
          </section>
          {/* End Confidence and Subscribe  */}
          {/* Footer */}
          <footer>
            <div className="container">
              <div className="row">
                {/* Logo */}
                <div className="col-md-4">
                  <div className="logo-foter">
                    <a href="index.html" title>
                      <img src="images/logo-footer.png" alt />
                    </a>
                  </div>
                </div>
                {/* End Logo */}
                {/* Navigation Footer */}
                <div className="col-xs-6 col-sm-3 col-md-2">
                  <div className="ul-ft">
                    <ul>
                      <li>
                        <a href="about.html" title>
                          About
                        </a>
                      </li>
                      <li>
                        <a href="blog.html" title>
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="fqa.html" title>
                          FQA
                        </a>
                      </li>
                      <li>
                        <a href="careers.html" title>
                          Carrers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Navigation Footer */}
                {/* Navigation Footer */}
                <div className="col-xs-6 col-sm-3 col-md-2">
                  <div className="ul-ft">
                    <ul>
                      <li>
                        <a href="contact.html" title>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" title>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" title>
                          Term of Service
                        </a>
                      </li>
                      <li>
                        <a href="#" title>
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Navigation Footer */}
                {/* Footer Currency, Language */}
                <div className="col-sm-6 col-md-4">
                  {/* Language */}
                  <div className="currency-lang-bottom dropdown-cn float-left">
                    <div className="dropdown-head">
                      <span className="angle-down">
                        <i className="fa fa-angle-down" />
                      </span>
                    </div>
                    <div className="dropdown-body">
                      <ul>
                        <li className="current">
                          <a href="#" title>
                            English
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            Bahasa Melayu
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            Català
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            Dansk
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            Deutsch
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            Francais
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            Italiano
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Language */}
                  {/* Currency */}
                  <div className="currency-lang-bottom dropdown-cn float-left">
                    <div className="dropdown-head">
                      <span className="angle-down">
                        <i className="fa fa-angle-down" />
                      </span>
                    </div>
                    <div className="dropdown-body">
                      <ul>
                        <li className="current">
                          <a href="#" title>
                            US
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            ARS
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            ADU
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            CAD
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            CHF
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            CNY
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            CZK
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Currency */}
                  {/*CopyRight*/}
                  <p className="copyright">
                    © 2009 – 2014 Bookyourtrip™ All rights reserved.
                  </p>
                  {/*CopyRight*/}
                </div>
                {/* End Footer Currency, Language */}
              </div>
            </div>
          </footer>
          {/* End Footer */}
        </div>
        {/* Library JS */}
        {/* End Library JS */}
        {/* Main Js */}
        {/* End Main Js */}
      </>
            );
    }

  export default Home