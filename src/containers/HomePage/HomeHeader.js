import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/images.png";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img className="header-logo" src={logo} />
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.Specialty" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.Find-doctors" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.Healthcare" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.Choose-hospital" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.Doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <b>
                    <FormattedMessage id="homeheader.Choose-doctor" />
                  </b>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.medical-package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.General-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i class="fas fa-question"></i>
                <FormattedMessage id="homeheader.Support" />
              </div>
              <div className="language-vi">VN</div>
              <div className="language-en">EN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1 ">
              {" "}
              <FormattedMessage id="banner.healthycare-platform" />
            </div>
            <div className="title2">
              <FormattedMessage id="banner.comprehensive-health" />
            </div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i class="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Specialty-xamination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-mobile"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.remote-medical-examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.General-examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-vial"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Mental-health-testing" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-heartbeat"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Mental-health" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-medkit"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Dental-examination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
