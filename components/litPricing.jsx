import React, { useState, useEffect } from "react";
import {
  NotificationIcon,
  OptionsIcon,
  UserIcon,
  GreenCheck,
  BlueCheck,
  PurpleCheck,
  Logo,
} from "./imageComponents/Images";

export default function LitPricing() {
  const [topClass, setTopClass] = useState("");

  useEffect(() => {
    const event = () => {
      let activeClass = "past-main";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      setTopClass(activeClass);
    };

    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);
  return (
    <div className="pricingPlan">
      <nav
        className={`navbar navbar-expand-md effect-main ${topClass} navbar-light bg-white fixed-top`}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <Logo style={{ marginTop: "-18px" }} width="25px" />{" "}
            <span className="litlogoText">Lit</span>
          </a>
          <form className="form-inline">
            <a href="#">
              <NotificationIcon width="25px" />
            </a>
            <span className="statusSpan">
              &nbsp;&nbsp; Status: Online &nbsp;
              <div className="statusSign"></div>
              <a href="#">
                <UserIcon className="ml-4 mr-0" width="35px" />
              </a>
            </span>
            <a href="#">
              <OptionsIcon width="7px" />
            </a>
          </form>
        </div>
      </nav>
      <div className="mainContent vh-100">
        <div className="row vh-100 m-0">
          <div className="col-md-1 responsiveNoDisplay col-sm-12"></div>
          <div className="col-md-4 NoHeight col-sm-12">
            <div className="container centeredContent">
              <h1 className="heading">Our pricing plan for everyone</h1>
              <h4 className="headingDescription ">
                Packages are for individual only
              </h4>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 vh-100 bgImage"></div>
        </div>
        <div>
          <section className="bg-light pricingWrapper position-absolute w-100">
            <div className="container mb-5 pb-4 pricingContainer">
              <div className="row">
                <div className="col-md-3 pr-0">
                  <div className="container pl-5 planGrid">
                    <h1 className="planFeatures mb-4">Plan features</h1>
                  </div>
                </div>

                <div className="col-md-3 bronzeGrid text-center pt-4 ">
                  <h1 className="bronzeName">BRONZE</h1>
                  <div className="planInfo">
                    <h1 className="planPrice">&#8358; 500</h1>
                    <p className="planDuration">Per month</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light btn-md py-0 btn-block activatePrimaryButton"
                  >
                    Activate
                  </button>

                  <i
                    data-toggle="collapse"
                    data-target="#bronzePlan"
                    aria-expanded="false"
                    aria-controls="bronzePlan"
                    className="fa fa-angle-down expandBronze mt-5 mb-0"
                    aria-hidden="true"
                  ></i>

                  <table
                    id="bronzePlan"
                    className="collapse mt-5 table table-striped"
                  >
                    <tbody>
                      <tr>
                        <th className="featuresColumn pl-5 mr-3" scope="row">
                          Loan
                        </th>
                        <td className="bronzeColumn ">
                          <span className="bronzeTextOption">
                            50k - 150k Naira
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Investment
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Smart Travel Savings
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Security
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Bank Statement
                        </th>
                        <td className="bronzeColumn ">
                          <span className="bronzeTextOption">
                            200k - 400k Naira
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Visa
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Ticket
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Escort
                        </th>
                        <td className="bronzeColumn"></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Eight Free Country Destination
                        </th>
                        <td className="bronzeColumn ">
                          <span className="bronzeTextOption">Just 1</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Tour Package
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Hotel Reservation
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          24/7 Customer Success Expert
                        </th>
                        <td className="bronzeColumn"></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Travel shows
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Event
                        </th>
                        <td className="bronzeColumn"></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Games
                        </th>
                        <td className="bronzeColumn"></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Gold Investor
                        </th>
                        <td className="bronzeColumn"></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Start Up
                        </th>
                        <td className="bronzeColumn"></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Give a Meal
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Cargo
                        </th>
                        <td className="bronzeColumn">
                          <GreenCheck width="35px" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-3 silverCard text-center pt-4">
                  <h1 className="silverName">SILVER</h1>
                  <div className="silverPlanInfo ">
                    <h1 className="planPrice textWhite">&#8358; 2,000</h1>
                    <p className="planDuration textWhite">Per month</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light btn-md py-0 btn-block activateLightButton"
                  >
                    Activate
                  </button>
                  <i
                    data-toggle="collapse"
                    data-target="#silverPlan"
                    aria-expanded="false"
                    aria-controls="silverPlan"
                    className="fa fa-angle-down expandSilver mt-5 mb-4 mb-0"
                    aria-hidden="true"
                  ></i>
                  <table
                    id="silverPlan"
                    className="collapse mt-5 table table-striped"
                  >
                    <tbody>
                      <tr>
                        <th className="featuresColumn pl-5 mr-3" scope="row">
                          Loan
                        </th>

                        <td>
                          <span className="silverTextOption">
                            50k - 2M Naira
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Investment
                        </th>

                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Smart Travel Savings
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Security
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Bank Statement
                        </th>
                        <td>
                          <span className="silverTextOption">
                            200k - 1M Naira
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Visa
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Ticket
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Escort
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Eight Free Country Destination
                        </th>
                        <td>
                          <span className="silverTextOption">Just 3</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Tour Package
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Hotel Reservation
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          24/7 Customer Success Expert
                        </th>
                        <td></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Travel shows
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Event
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Games
                        </th>
                        <td></td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Gold Investor
                        </th>
                        <td>
                          <span className="silverTextOption">
                            Silver Investor
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Start Up
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Give a Meal
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Cargo
                        </th>
                        <td>
                          <BlueCheck width="35px" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-3 goldGrid pr-4 text-center pt-4">
                  <h1 className="goldName">GOLD</h1>
                  <div className="planInfo">
                    <h1 className="planPrice">&#8358; 2,500</h1>
                    <p className="planDuration">Per month</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light btn-md py-0 btn-block activatePrimaryButton"
                  >
                    Activate
                  </button>
                  <i
                    data-toggle="collapse"
                    data-target="#goldPlan"
                    aria-expanded="false"
                    aria-controls="goldPlan"
                    className="fa fa-angle-down expandGold mt-4 mb-0"
                    aria-hidden="true"
                  ></i>
                  <table
                    id="goldPlan"
                    className="collapse mt-5 table table-striped"
                  >
                    <tbody>
                      <tr>
                        <th className="featuresColumn pl-5 mr-3" scope="row">
                          Loan
                        </th>

                        <td className="goldColumn ">
                          <span className="goldTextOption">50k - 4M Naira</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Investment
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Smart Travel Savings
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Security
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Bank Statement
                        </th>

                        <td className="goldColumn ">
                          <span className="goldTextOption">200k -1M Naira</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Visa
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Ticket
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Escort
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Eight Free Country Destination
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Tour Package
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Hotel Reservation
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          24/7 Customer Success Expert
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Travel shows
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Event
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Games
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Gold Investor
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Start Up
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Give a Meal
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                      <tr>
                        <th className="featuresColumn pl-5" scope="row">
                          Cargo
                        </th>

                        <td className="goldColumn">
                          <PurpleCheck width="35px" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <table className="responsiveNoDisplay mt-5 table table-striped">
                <tbody>
                  <tr>
                    <th className="featuresColumn pl-5 mr-3" scope="row">
                      Loan
                    </th>
                    <td className="bronzeColumn ">
                      <span className="bronzeTextOption">50k - 150k Naira</span>
                    </td>
                    <td>
                      <span className="silverTextOption">50k - 2M Naira</span>
                    </td>
                    <td className="goldColumn ">
                      <span className="goldTextOption">50k - 4M Naira</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Investment
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Smart Travel Savings
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Security
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Bank Statement
                    </th>
                    <td className="bronzeColumn ">
                      <span className="bronzeTextOption">
                        200k - 400k Naira
                      </span>
                    </td>
                    <td>
                      <span className="silverTextOption">200k - 1M Naira</span>
                    </td>
                    <td className="goldColumn ">
                      <span className="goldTextOption">200k -1M Naira</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Visa
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Ticket
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Escort
                    </th>
                    <td className="bronzeColumn"></td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Eight Free Country Destination
                    </th>
                    <td className="bronzeColumn ">
                      <span className="bronzeTextOption">Just 1</span>
                    </td>
                    <td>
                      <span className="silverTextOption">Just 3</span>
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Tour Package
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Hotel Reservation
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      24/7 Customer Success Expert
                    </th>
                    <td className="bronzeColumn"></td>
                    <td></td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Travel shows
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Event
                    </th>
                    <td className="bronzeColumn"></td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Games
                    </th>
                    <td className="bronzeColumn"></td>
                    <td></td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Gold Investor
                    </th>
                    <td className="bronzeColumn"></td>
                    <td>
                      <span className="silverTextOption">Silver Investor</span>
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Start Up
                    </th>
                    <td className="bronzeColumn"></td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Give a Meal
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                  <tr>
                    <th className="featuresColumn pl-5" scope="row">
                      Cargo
                    </th>
                    <td className="bronzeColumn">
                      <GreenCheck width="35px" />
                    </td>
                    <td>
                      <BlueCheck width="35px" />
                    </td>
                    <td className="goldColumn">
                      <PurpleCheck width="35px" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footer text-white bg-dark py-5">
              <div className="container footerContainer">
                <div className="row">
                  <div className="col-md-2 col-sm-12 mobileTextCenter">
                    <Logo style={{ marginTop: "-27px" }} width="30px" />
                    &nbsp; &nbsp;
                    <span className="litText">Lit</span>
                  </div>
                  <div className="col-md-7 col-sm-12 footerWrapper  mobileTextCenter p-0">
                    <div className="footerOptions">
                      <span className="optionMargin">
                        <a className="text-white" href="#">
                          Terms & Condition
                        </a>
                      </span>
                      <div className="line position-absolute"></div>
                      <span className="optionMargin">
                        <a className="text-white" href="#">
                          Career
                        </a>
                      </span>
                      <div className="line position-absolute"></div>
                      <span className="optionMargin">
                        <a className="text-white" href="#">
                          Privacy Policy
                        </a>
                      </span>
                      <div className="line position-absolute"></div>
                      <span className="optionMargin">
                        <a className="text-white" href="#">
                          Leapsail Copyright 2020
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12 mobileTextCenter">
                    <div className="socialOptions">
                      <span className="socialOptionMargin">
                        <a className="text-white" href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </span>
                      <span className="socialOptionMargin">
                        <a className="text-white" href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </span>
                      <span className="socialOptionMargin">
                        <a className="text-white" href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </span>
                      <span className="socialOptionMargin">
                        <a className="text-white" href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />
      <br />

      <style jsx>{`
        #silverPlan {
          background-color: #daebf5;
          border-radius: 20px;
        }
        .expandBronze {
          color: #ff6700;
          font-size: 36px;
          font-weight: 800;
        }
        @media (min-width: 768px) {
          .expandBronze {
            display: none !important;
          }
        }
        .expandSilver {
          color: white;
          font-size: 36px;
          font-weight: 800;
        }
        @media (min-width: 768px) {
          .expandSilver {
            display: none !important;
          }
        }
        .expandGold {
          color: #7a00d1;
          font-size: 36px;
          font-weight: 800;
        }
        @media (min-width: 768px) {
          .expandGold {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .goldGrid {
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .bronzeGrid {
            margin-bottom: 60px;
          }
        }
        @media (max-width: 767px) {
          .responsiveNoDisplay {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .NoHeight {
            height: 100px;
          }
        }

        @media (max-width: 767px) {
          .footerWrapper {
            position: absolute;
            bottom: 0;
          }
        }
        @media (max-width: 767px) {
          .mobileTextCenter {
            text-align: center !important;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .footerContainer {
            margin: 0 !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 767px) {
          .footerContainer {
            margin: 0 !important;
            max-width: 100% !important;
          }
        }
        .optionMargin {
          margin: 0 25px;
        }
        @media (max-width: 1200px) {
          .optionMargin {
            margin: 0 10px !important;
          }
        }
        @media (max-width: 991px) {
          .optionMargin {
            margin: 0 7px !important;
          }
        }
        @media (max-width: 767px) {
          .optionMargin {
            margin: 0 20px !important;
          }
        }
        @media (max-width: 575px) {
          .optionMargin {
            margin: 0 5px !important;
            font-size: 11px;
          }
        }
        .socialOptionMargin {
          margin: 0 20px;
        }
        @media (max-width: 1200px) {
          .socialOptionMargin {
            margin: 0 10px !important;
          }
        }
        @media (max-width: 991px) {
          .socialOptionMargin {
            margin: 0 7px !important;
          }
        }
        @media (max-width: 767px) {
          .socialOptionMargin {
            margin: 0 20px !important;
          }
        }
        @media (max-width: 575px) {
          .socialOptionMargin {
            margin: 0 15px !important;
            font-size: 28px;
          }
        }
        .litlogoText {
          font-weight: 800;
          font-size: 32px;
        }
        .line {
          width: 1px;
          display: inline-block;
          height: 24px;
          background-color: white;
        }
        @media (max-width: 767px) {
          .line {
            margin-top: 3px;

            height: 18px !important;
          }
        }
        .socialOptions {
          font-size: 28px !important;
          vertical-align: middle;
          display: table-cell;
          height: 75px;
        }
        @media (max-width: 768px) {
          .socialOptions {
            display: block !important;
            height: 60px !important;
            margin-top: 20px;
          }
        }
        .footerOptions {
          font-size: 16px !important;
          vertical-align: middle;
          display: table-cell;
          height: 75px;
        }
        @media (max-width: 991px) {
          .footerOptions {
            font-size: 14px !important;
          }
        }
        @media (max-width: 767px) {
          .footerOptions {
            font-size: 13px !important;
            display: block !important;
            height: 40px !important;
          }
        }
        .litText {
          font-weight: 800;
          font-size: 44px;
        }
        @media (max-width: 991px) {
          .litText {
            font-size: 38px;
          }
        }
        .footer {
          background-color: #242424;
          margin-top: 80px;
        }
        @media (max-width: 575px) {
          .footer {
            margin-left: -20px;
            margin-right: -20px;
          }
        }
        .bronzeTextOption {
          color: #00d154;
        }
        .silverTextOption {
          color: #0090e8;
        }
        .goldTextOption {
          color: #7a00d1;
        }
        .table-striped tbody tr:nth-of-type(odd) {
          background-color: #fbfbfb !important;
        }
        th {
        }
        tr {
          border-radius: 20px;
        }
        td {
          text-align: center;
        }
        th,
        td {
          border-color: transparent !important;
          width: 25%;
          font-weight: 600;
          font-size: 16px;
        }
        .featuresColumn {
          border-radius: 20px 0 0 20px !important;
          color: #656565;
        }
        .goldColumn {
          border-radius: 0 20px 20px 0 !important;
        }
        @media (max-width: 767px) {
          .bronzeColumn {
            border-radius: 0 20px 20px 0 !important;
          }
        }
        @media (max-width: 767px) {
          td {
            border-radius: 0 20px 20px 0 !important;
          }
        }

        .textWhite {
          color: white !important;
        }
        .silverCard {
          background-color: #0090e8;
          border-radius: 20px;
          margin-top: -30px;
          margin-bottom: -30px;
        }
        @media (max-width: 767px) {
          .silverCard {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
        .silverName {
          color: white;
          font-weight: 800;
          font-size: 38px;
        }
        @media (max-width: 991px) {
          .silverName {
            font-size: 30px;
          }
        }
        .goldName {
          color: #7a00d1;
          font-weight: 800;
          font-size: 38px;
        }
        @media (max-width: 991px) {
          .goldName {
            font-size: 30px;
          }
        }
        .bronzeName {
          color: #00d154;
          font-weight: 800;
          font-size: 38px;
        }
        @media (max-width: 991px) {
          .bronzeName {
            font-size: 30px;
          }
        }
        .silverPlanInfo {
          margin: 75px 0;
        }
        .planInfo {
          margin: 60px 0;
        }
        .planPrice {
          font-weight: 700;
          font-size: 48px;
          color: #656565;
        }
        @media (max-width: 991px) {
          .planPrice {
            font-size: 38px;
          }
        }
        .planDuration {
          color: #d2d2d2;
        }
        .activatePrimaryButton {
          border-radius: 25px;
          height: 45px;
          background-color: #ff6700;
          border-color: transparent;
          box-shadow: 0px 3px 10px #00000029;
          color: white !important;
        }
        @media (max-width: 767px) {
          .activatePrimaryButton {
            width: 250px !important;
            margin: 0 auto !important;
          }
        }
        .activateLightButton {
          border-radius: 25px;
          height: 45px;
          border-color: transparent;
          background-color: white;
          color: #ff6700 !important;
          box-shadow: 0px 3px 10px #00000029;
        }
        @media (max-width: 767px) {
          .activateLightButton {
            width: 250px !important;
            margin: 0 auto !important;
          }
        }
        .activateLightButton:active {
          background-color: white !important;
        }
        .activatePrimaryButton:active {
          background-color: #ff6700 !important;
        }
        .planName {
          font-weight: 700;
          font-size: 38px;
        }
        .planGrid {
          height: 350px;
        }
        @media (max-width: 767px) {
          .planGrid {
            display: none !important;
          }
        }
        .planFeatures {
          font-weight: 800;
          font-size: 35px;
          color: #656565;
          position: absolute;
          bottom: 0px;
        }
        @media (max-width: 991px) {
          .planFeatures {
            font-weight: 700;
            font-size: 30px;
          }
        }
        .pricingContainer {
          margin-top: -21vh;
          background-color: white;
          box-shadow: 0px 3px 10px #00000029;
          border-radius: 55px;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        @media (max-width: 767px) {
          .pricingContainer {
            padding-left: 15px !important ;
            padding-right: 15px !important;
          }
        }
        @media (max-width: 575px) {
          .pricingWrapper {
            padding: 0 20px !important;
          }
        }
        .bgImage {
          background-image: url("./images/outdoor.png");
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
        }
        @media (max-width: 767px) {
          .bgImage {
            height: 300px !important;
          }
        }
        .headingDescription {
          color: #d2d2d2;
          font-size: 24px;
        }
        @media (max-width: 767px) {
          .headingDescription {
            font-size: 18px;
            font-weight: 400;
          }
        }
        .heading {
          font-size: 45px;
          font-weight: 900;
        }
        @media (max-width: 991px) {
          .heading {
            font-size: 35px;
            font-weight: 800;
          }
        }
        .centeredContent {
          vertical-align: middle;
          height: 85vh;
          display: table-cell;
        }
        @media (max-width: 767px) {
          .centeredContent {
            max-width: 100% !important;
            width: 768px !important;
            text-align: center;
            height: initial;
            padding-top: 120px;
          }
        }
        .statusSign {
          width: 11px;
          height: 11px;
          background-color: #00d154;
          display: inline-block;
          margin-bottom: -1px;
          border-radius: 50%;
        }
        .statusSpan {
          margin-left: 35px;
          margin-right: 35px;
        }
        @media (max-width: 575px) {
          .statusSpan {
            margin-left: 0 !important;
            margin-right: 18px !important;
          }
        }
        .form-inline {
          text-align: right;
          display: block;
          font-size: 14px;
        }
        .navbar-expand-md {
          justify-content: space-between;
          opacity: 1 !important;
          background-color: white !important;
        }
        .navbar.past-main {
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: rgba(255, 255, 255, 0.99) !important;
          -webkit-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
          -moz-box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
          box-shadow: 0 2px 3px 0 rgba(96, 96, 96, 0.1);
        }

        .navbar.effect-main {
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }

        .navbar.past-main .navbar-brand {
          color: black !important;
        }

        .nav-white.past-main .nav-item .nav-link {
          color: #364655;
          font-weight: 500;
        }

        .navbar.past-main .nav-item .nav-link {
          font-weight: 500;
        }

        .nav-white.past-main .navbar-brand {
          color: #364655;
        }

        .nav-white.effect-main {
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}
