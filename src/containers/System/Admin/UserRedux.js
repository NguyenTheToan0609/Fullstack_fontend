import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { getAllCode } from "../../../services/userService";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrGender: [],
    };
  }
  async componentDidMount() {
    try {
      let res = await getAllCode("gender");
      if (res && res.errCode === 0) {
        this.setState({
          arrGender: res.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let { language } = this.props;
    let genderArr = this.state.arrGender;
    console.log("check gender ", genderArr);
    return (
      <div className="user-redux-container">
        <div className="title">Manage User Redux</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-4 ">
                <FormattedMessage id="manage-user.add" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  <FormattedMessage id="manage-user.email" />
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.password" />
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.firtsname" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.lastname" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.phone-number" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-9 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select className="form-control">
                  {genderArr &&
                    genderArr.length > 0 &&
                    genderArr.map((item, index) => {
                      return (
                        <option selected key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.position" />
                </label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.role" />
                </label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.image" />
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="">
                <button className="btn btn-primary px-3 mt-4">
                  {" "}
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
