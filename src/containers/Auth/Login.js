import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isShowHide: false,
    };
  }

  handleOnchangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleOnClick = () => {
    alert("click me");
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container ">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group input-login">
              <label>Username:</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnchangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group  input-login">
              <label>Password:</label>
              <div className="show-hide-password">
                <input
                  type={this.state.isShowHide ? "text" : "password"}
                  className="form-control  mt-1"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnchangePassword(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    class={
                      this.state.isShowHide ? "far fa-eye" : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => this.handleOnClick()}
              >
                Login
              </button>
            </div>
            <div className="col-12 mt-3 text-end">
              <span className="forgot-password"> Forgot your password?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="different-login">Or sign int with:</span>
            </div>
            <div className="col-12 social-login">
              <i class="fab fa-google-plus-g google"></i>
              <i class="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
