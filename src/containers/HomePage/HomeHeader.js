import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/images.png";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils/constant";
import { ChangeLanguages } from "../../store/actions";

class HomeHeader extends Component {
  handleOnClickLanguage = (language) => {
    this.props.ChangeLanguageAppRedux(language);
  };

  render() {
    let language = this.props.language;
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
                <i className="fas fa-question"></i>
                <FormattedMessage id="homeheader.Support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.handleOnClickLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.handleOnClickLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
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
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Specialty-xamination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.remote-medical-examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.General-examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-vial"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Mental-health-testing" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.Mental-health" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-medkit"></i>
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageAppRedux: (language) => dispatch(ChangeLanguages(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
