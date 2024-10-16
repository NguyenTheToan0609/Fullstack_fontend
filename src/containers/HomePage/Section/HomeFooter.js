import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return (
      <div className="section-footer">
        <div className="footer-content">
          <div className="copy-right"> &#169;2024 NguyenTheToan</div>
          <div className="logo-footer">
            <a target="_blank" href="https://www.youtube.com/@ToanNguyen-bj3ie">
              <i className="fab fa-youtube icon-youtube"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/toan.the.16121">
              <i className="fab fa-facebook-square icon-facebook"></i>
            </a>

            <a target="_blank" href="https://www.instagram.com/toanthe6/">
              <i className="fab fa-instagram icon-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
