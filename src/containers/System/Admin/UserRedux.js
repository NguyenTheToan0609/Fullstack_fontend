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

      email: "",
      password: "",
      firtsName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
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
      let arrGender = this.props.genderRedux;
      this.setState({
        genderArr: arrGender,
        gender: arrGender && arrGender.length > 0 ? arrGender[0].key : "",
      });
    }
    if (prevProps.positions !== this.props.positions) {
      let arrPosition = this.props.positions;
      this.setState({
        positionsArr: arrPosition,
        position:
          arrPosition && arrPosition.length > 0 ? arrPosition[0].key : "",
      });
    }
    if (prevProps.roles !== this.props.roles) {
      let arrRole = this.props.roles;
      this.setState({
        rolesrArr: arrRole,
        role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
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
        avatar: files,
      });
    }
  };

  hanldeOnClickPreViewImg = () => {
    if (!this.state.preViewImgUrl) return;
    this.setState({
      isOpen: true,
    });
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firtsName",
      "lastName",
      "phoneNumber",
      "address",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter : " + arrInput[i]);
        break;
      }
      return true;
    }
  };

  handleSaveUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === false) return;
    else {
      this.props.createNewUserRedux({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firtsName,
        lastName: this.state.lastName,
        address: this.state.address,
        gender: this.state.gender,
        roleId: this.state.role,
        phonenumber: this.state.phoneNumber,
        positionId: this.state.position,
      });
    }
  };

  render() {
    let { language } = this.props;
    let genders = this.state.genderArr;
    let positions = this.state.positionsArr;
    let roles = this.state.rolesrArr;
    let isLoadingGender = this.props.isLoadingGender;

    let {
      email,
      password,
      firtsName,
      lastName,
      phoneNumber,
      address,
      gender,
      position,
      role,
      avatar,
    } = this.state;

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
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => this.handleOnchangeInput(event, "email")}
                />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.password" />
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "password")
                  }
                />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.firtsname" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={firtsName}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "firtsName")
                  }
                />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.lastname" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "lastName")
                  }
                />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.phone-number" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "phoneNumber")
                  }
                />
              </div>
              <div className="col-9 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "address")
                  }
                />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select
                  className="form-control"
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "gender")
                  }
                >
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <select
                  className="form-control"
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "position")
                  }
                >
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <select
                  className="form-control"
                  onChange={(event) => this.handleOnchangeInput(event, "role")}
                >
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <button
                  className="btn btn-primary px-3 mt-4"
                  onClick={() => this.handleSaveUser()}
                >
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
    createNewUserRedux: (data) => dispatch(actions.createNewUserRedux(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
