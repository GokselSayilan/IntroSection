import React, { useState } from "react";
import "./navbar.css";

let featuresTimeout, companyTimeout;

function Navbar() {
  const [featuresDisplay, setFeaturesDisplay] = useState(false);
  const [companyDisplay, setCompanyDisplay] = useState(false);
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);

  const handleMouseOver = (value) => {
    clearTimeout(featuresTimeout);
    clearTimeout(companyTimeout);

    if (value === "companyOver") {
      setCompanyDisplay(true);
      setFeaturesDisplay(false);
    }

    if (value === "featuresOver") {
      setFeaturesDisplay(true);
      setCompanyDisplay(false);
    }
  };

  const handleMouseOut = (value) => {
    if (value === "companyOut") {
      companyTimeout = setTimeout(() => {
        setCompanyDisplay(false);
      }, 500);
    }

    if (value === "featuresOut") {
      featuresTimeout = setTimeout(() => {
        setFeaturesDisplay(false);
      }, 500);
    }
  };

  return (
    <div className="navbar">
      {mobileMenuDisplay && (
        <div className="mobileMenuBox">
          <div className="mobileMenuBoxWrapper">
            <img
              src="images/icon-close-menu.svg"
              alt="closeMenuIcon"
              className="mobileMenuCloseMenuIcon"
              onClick={() => setMobileMenuDisplay(false)}
            />
            <div className="mobileMenuNavbarLeftItems">
              <div className="mobileMenuNavbarLeftItem">
              <div className="mobileMenuFeaturesDropdownMenu">

                <p
                  className="mobileMenuNavbarLeftItemTitle"
                  onClick={() => setFeaturesDisplay(!featuresDisplay)}
                >
                  Features
                </p>
                {featuresDisplay ? (
                  <img
                    src="images/icon-arrow-up.svg"
                    alt="arrowUpIcon"
                    className="mobileMenuNavbarLeftItemIcon"
                    onClick={() => setFeaturesDisplay(!featuresDisplay)}
                  />
                ) : (
                  <img
                    src="images/icon-arrow-down.svg"
                    alt="arrowDownIcon"
                    className="mobileMenuNavbarLeftItemIcon"
                    onClick={() => setFeaturesDisplay(!featuresDisplay)}
                  />
                )}
                </div>
                {featuresDisplay && (
                  <div className="mobileMenuFeaturesDropdown">
                    <div className="mobileMenuFeaturesDropdownItems">
                      <div className="mobileMenuFeaturesDropdownItem">
                        <img
                          src="images/icon-todo.svg"
                          alt="todoIcon"
                          className="mobileMenuFeaturesDropdownItemsIcon"
                        />
                        <p className="mobileMenuFeaturesDropdownItemsTitle">
                          Todo List
                        </p>
                      </div>
                      <div className="mobileMenuFeaturesDropdownItem">
                        <img
                          src="images/icon-calendar.svg"
                          alt="calendarIcon"
                          className="mobileMenuFeaturesDropdownItemsIcon"
                        />
                        <p className="mobileMenuFeaturesDropdownItemsTitle">
                          Calendar
                        </p>
                      </div>
                      <div className="mobileMenuFeaturesDropdownItem">
                        <img
                          src="images/icon-reminders.svg"
                          alt="remindersIcon"
                          className="mobileMenuFeaturesDropdownItemsIcon"
                        />
                        <p className="mobileMenuFeaturesDropdownItemsTitle">
                          Reminders
                        </p>
                      </div>
                      <div className="mobileMenuFeaturesDropdownItem">
                        <img
                          src="images/icon-planning.svg"
                          alt="planningIcon"
                          className="mobileMenuFeaturesDropdownItemsIcon"
                        />
                        <p className="mobileMenuFeaturesDropdownItemsTitle">
                          Planning
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mobileMenuNavbarLeftItem">
                <div className="mobileMenuCompanyDropdownMenu">
                  <p
                    className="mobileMenuNavbarLeftItemTitle"
                    onClick={() => setCompanyDisplay(!companyDisplay)}
                  >
                    Company
                  </p>
                  {companyDisplay ? (
                    <img
                      src="images/icon-arrow-up.svg"
                      alt="arrowUpIcon"
                      className="mobileMenuNavbarLeftItemIcon"
                      onClick={() => setCompanyDisplay(!companyDisplay)}
                    />
                  ) : (
                    <img
                      src="images/icon-arrow-down.svg"
                      alt="arrowDownIcon"
                      className="mobileMenuNavbarLeftItemIcon"
                      onClick={() => setCompanyDisplay(!companyDisplay)}
                    />
                  )}
                </div>
                {companyDisplay && (
                  <div className="mobileMenuCompanyDropdown">
                    <div className="mobileMenuCompanyDropdownTitles">
                      <p className="mobileMenuCompanyDropdownTitle">History</p>
                      <p className="mobileMenuCompanyDropdownTitle">Our Team</p>
                      <p className="mobileMenuCompanyDropdownTitle">Blog</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mobileMenuNavbarLeftItem">
                <p className="mobileMenuNavbarLeftItemTitle">Careers</p>
              </div>
              <div className="mobileMenuNavbarLeftItem">
                <p className="mobileMenuNavbarLeftItemTitle">About</p>
              </div>
            </div>
            <div className="mobileMenuBoxBottom">
              <p className="mobileMenuNavbarRightLogin">Login</p>
              <p className="mobileMenuNavbarRightRegister">Register</p>
            </div>
          </div>
        </div>
      )}

      <div className="navbarWrapper">
        <div className="navbarLeft">
          <img src="images/logo.svg" alt="navbarLogo" className="navbarLogo" />
          <div className="navbarLeftItems">
            <div
              className="navbarLeftItem"
              onMouseOver={() => handleMouseOver("featuresOver")}
              onMouseOut={() => handleMouseOut("featuresOut")}
            >
              <p className="navbarLeftItemTitle">Features</p>
              {featuresDisplay ? (
                <img
                  src="images/icon-arrow-up.svg"
                  alt="arrowUpIcon"
                  className="navbarLeftItemIcon"
                />
              ) : (
                <img
                  src="images/icon-arrow-down.svg"
                  alt="arrowDownIcon"
                  className="navbarLeftItemIcon"
                />
              )}
              {featuresDisplay && (
                <div className="featuresDropdown">
                  <div className="featuresDropdownItems">
                    <div className="featuresDropdownItem">
                      <img
                        src="images/icon-todo.svg"
                        alt="todoIcon"
                        className="featuresDropdownItemsIcon"
                      />
                      <p className="featuresDropdownItemsTitle">Todo List</p>
                    </div>
                    <div className="featuresDropdownItem">
                      <img
                        src="images/icon-calendar.svg"
                        alt="calendarIcon"
                        className="featuresDropdownItemsIcon"
                      />
                      <p className="featuresDropdownItemsTitle">Calendar</p>
                    </div>
                    <div className="featuresDropdownItem">
                      <img
                        src="images/icon-reminders.svg"
                        alt="remindersIcon"
                        className="featuresDropdownItemsIcon"
                      />
                      <p className="featuresDropdownItemsTitle">Reminders</p>
                    </div>
                    <div className="featuresDropdownItem">
                      <img
                        src="images/icon-planning.svg"
                        alt="planningIcon"
                        className="featuresDropdownItemsIcon"
                      />
                      <p className="featuresDropdownItemsTitle">Planning</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="navbarLeftItem"
              onMouseOver={() => handleMouseOver("companyOver")}
              onMouseOut={() => handleMouseOut("companyOut")}
            >
              <p className="navbarLeftItemTitle">Company</p>
              {companyDisplay ? (
                <img
                  src="images/icon-arrow-up.svg"
                  alt="arrowUpIcon"
                  className="navbarLeftItemIcon"
                />
              ) : (
                <img
                  src="images/icon-arrow-down.svg"
                  alt="arrowDownIcon"
                  className="navbarLeftItemIcon"
                />
              )}
              {companyDisplay && (
                <div className="companyDropdown">
                  <div className="companyDropdownTitles">
                    <p className="companyDropdownTitle">History</p>
                    <p className="companyDropdownTitle">Our Team</p>
                    <p className="companyDropdownTitle">Blog</p>
                  </div>
                </div>
              )}
            </div>
            <div className="navbarLeftItem">
              <p className="navbarLeftItemTitle">Careers</p>
            </div>
            <div className="navbarLeftItem">
              <p className="navbarLeftItemTitle">About</p>
            </div>
          </div>
        </div>
        <div className="navbarRight">
          <p className="navbarRightLogin">Login</p>
          <p className="navbarRightRegister">Register</p>
          <img
            src="images/icon-menu.svg"
            alt="mobileMenuIcon"
            className="navbarRightMobileMenu"
            onClick={() => setMobileMenuDisplay(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
