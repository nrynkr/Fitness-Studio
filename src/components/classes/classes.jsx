import React from "react";
import "./classes.css";
import yoga from './1.jpg'
import gym from './2.jpg'
import zumba from './3.jpg'
import "./css/material-design-iconic-font.min.css"
import GoogleButton from "react-google-button";
const Classes = () => {
    return (
       <div classname="class-container">
        <section className="class-area fix bg-gray pb-100 pt-95">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xs-12">
          <div className="section-title text-center">
            <h2>our classes</h2>
            <p>
              These are all the classes that we are providing with each coach and timing details{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row-classes">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="single-class">
            <div className="single-img">
              <a href="class.html">
                <img src={yoga} alt="yoga" />
              </a>
              <div className="gallery-icon">
                <a className="image-popup" href={yoga}>
                  <i className="zmdi zmdi-zoom-in" />
                </a>
              </div>
            </div>
            <div className="single-content">
              <h3>
                <a href="class.html">YOGA</a>
              </h3>
              <ul>
                <li>
                  <i className="zmdi zmdi-face" />
                  Sathi Bhuiyan
                </li>
                <li>
                  <i className="zmdi zmdi-alarm" />
                  10.00Am-05:00Pm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="single-class">
            <div className="single-img">
              <a href="class.html">
                <img src={gym} alt="class" />
              </a>
              <div className="gallery-icon">
                <a className="image-popup" href={gym}>
                  <i className="zmdi zmdi-zoom-in" />
                </a>
              </div>
            </div>
            <div className="single-content">
              <h3>
                <a href="class.html">GYM</a>
              </h3>
              <ul>
                <li>
                  <i className="zmdi zmdi-face" />
                  Sathi Bhuiyan
                </li>
                <li>
                  <i className="zmdi zmdi-alarm" />
                  10.00Am-05:00Pm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 hidden-sm col-xs-12">
          <div className="single-class">
            <div className="single-img">
              <a href="class.html">
                <img src={zumba} alt="class" />
              </a>
              <div className="gallery-icon">
                <a className="image-popup" href={zumba}>
                  <i className="zmdi zmdi-zoom-in" />
                </a>
              </div>
            </div>
            <div className="single-content">
              <h3>
                <a href="class.html">ZUMBA</a>
              </h3>
              <ul>
                <li>
                  <i className="zmdi zmdi-face" />
                  Sathi Bhuiyan
                </li>
                <li>
                  <i className="zmdi zmdi-alarm" />
                  10.00Am-05:00Pm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="single-class">
            <div className="single-img">
              <a href="class.html">
                <img src={gym} alt="class" />
              </a>
              <div className="gallery-icon">
                <a className="image-popup" href={gym}>
                  <i className="zmdi zmdi-zoom-in" />
                </a>
              </div>
            </div>
            <div className="single-content">
              <h3>
                <a href="class.html">MEDITATION</a>
              </h3>
              <ul>
                <li>
                  <i className="zmdi zmdi-face" />
                  Sathi Bhuiyan
                </li>
                <li>
                  <i className="zmdi zmdi-alarm" />
                  10.00Am-05:00Pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <button className="view-all-classes-button">
          <a className="banner-btn mt-55" href="#" data-text="view all classes">
            <span>view all classes</span>
          </a>
        </button>
      </div>
    </div>
  </section>
  {/* Class Area End */}
  {/* Schedule Area Strat */}
  <section className="schedule-area pt-85 pb-90 text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xs-12">
          <div className="section-title">
            <h2>Calendar Sync</h2>
            <p>
              Calendar for a week that displays each class along with its timings
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="scehedule-table table-responsive text-center">
            <table className="schedule-table-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>saturday</th>
                  <th>sunday</th>
                  <th>monday</th>
                  <th>tuesday</th>
                  <th>wednesday</th>
                  <th>thursday</th>
                  <th>friday</th>
                </tr>
              </thead>
              <tbody className="pt-30">
                <tr>
                  <td className="time">
                    <p>8:00 AM</p>
                  </td>
                  <td className="purple">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td />
                  <td className="purple">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td className="purple">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td className="time">
                    <p>12:00 AM</p>
                  </td>
                  <td />
                  <td />
                  <td className="olive">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td className="olive">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td className="time">
                    <p>3:00 PM</p>
                  </td>
                  <td />
                  <td className="blue">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td />
                  <td className="blue">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td className="blue">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                </tr>
                <tr>
                  <td className="time">
                    <p>6:00 PM</p>
                  </td>
                  <td className="pink">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td />
                  <td className="pink">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                  <td className="pink">
                    <h4>yoga for climbers</h4>
                    <p>Sathi Bhuiyan</p>
                    <p>8.00 Am-10.00Am</p>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Schedule Area End */}
  {/* Pricing Area Start */}
  <div className="pricing-area pt-95 pb-120 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xs-12">
          <div className="section-title text-center">
            <h2>pricing table</h2>
            <p>
              All the Pricing categories of silver, gold and platinum
            </p>
          </div>
        </div>
      </div>
      <div className="row-pricing">
        <div className="col-md-4 col-sm-6 col-xs-12" id="silverpackage">
          <div className="single-table text-center">
            <div className="table-head">
              <h2>silver package</h2>
              <h1>
              ₹700<span>/month</span>
              </h1>
            </div>
            <div className="table-body">
              <ul>
                <li>Free T-Shirt &amp; swags</li>
                <li>Free of all message treatments</li>
                <li><s>Out Door activites</s></li>
                <li><s>Access Club Facilites</s></li>
                
              </ul>
              <a href="#" id="get-started">get started</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="single-table text-center">
            <div className="table-head">
              <h2>gold package</h2>
              <h1>
              ₹900<span>/month</span>
              </h1>
            </div>
            <div className="table-body">
              <ul>
                <li>Free T-Shirt &amp; swags</li>
                <li>Free of all message treatments</li>
                <li>Out Door activites</li>
                <li><s>Access Club Facilites</s></li>
              </ul>
              <a href="#" id="get-started">get started</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 hidden-sm col-xs-12">
          <div className="single-table text-center">
            <div className="table-head">
              <h2>platinum package</h2>
              <h1>
              ₹1000<span>/month</span>
              </h1>
            </div>
            <div className="table-body">
              <ul>
                <li>Free T-Shirt &amp; swags</li>
                <li>Free of all message treatments</li>
                
                <li>Out Door activites</li>
                <li>Access Clup Facilites</li>
              </ul>
              <a href="#" id="get-started">get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pricing Area End */}
  
       </div>
    );
};


export default Classes;
