import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionsArr: [],
      rolesrArr: [],
      preViewImgUrl: "",
      isOpen: false,
    };
  }
  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositonsStart();
    this.props.getRolesStart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //render => didUpDate
    // hiện tại (this) và quá khứ (prev)
    // [] [3]

    //[3] [3]
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.positions !== this.props.positions) {
      this.setState({
        positionsArr: this.props.positions,
      });
    }
    if (prevProps.roles !== this.props.roles) {
      this.setState({
        rolesrArr: this.props.roles,
      });
    }
  }

  handleOnChangeImage = (event) => {
    let data = event.target.files;
    let files = data[0];
    if (files) {
      const objectUrl = URL.createObjectURL(files);
      this.setState({
        preViewImgUrl: objectUrl,
      });
    }
  };

  hanldeOnClickPreViewImg = () => {
    if (!this.state.preViewImgUrl) return;
    this.setState({
      isOpen: true,
    });
  };

  render() {
    let { language } = this.props;
    let genders = this.state.genderArr;
    let positions = this.state.positionsArr;
    let roles = this.state.rolesrArr;
    let isLoadingGender = this.props.isLoadingGender;

    console.log("check gender ", genders);
    return (
      <div className="user-redux-container">
        <div className="title">Manage User Redux</div>
        <div>{isLoadingGender === true ? "loading gender" : ""}</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-4 ">
                <FormattedMessage id="manage-user.add" />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.email" />
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.password" />
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.firtsname" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.lastname" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.phone-number" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-9 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.position" />
                </label>
                <select className="form-control">
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.role" />
                </label>
                <select className="form-control">
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.image" />
                </label>
                <div className="preview-img-container">
                  <input
                    id="previewImg"
                    type="file"
                    hidden
                    onChange={(event) => this.handleOnChangeImage(event)}
                  />
                  <label htmlFor="previewImg" className="upload">
                    <i className="fas fa-upload "></i>
                    Tải Ảnh
                  </label>

                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${this.state.preViewImgUrl})`,
                    }}
                    onClick={() => this.hanldeOnClickPreViewImg()}
                  ></div>
                </div>
              </div>

              <div className="col-12 ">
                <button className="btn btn-primary px-3 mt-4">
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.preViewImgUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
    positions: state.admin.positions,
    roles: state.admin.roles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositonsStart: () => dispatch(actions.fetchPositionsStart()),
    getRolesStart: () => dispatch(actions.fetchRolesStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
