import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES, CRUD_ACTIONS } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageUser from "./TableManageUser";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionsArr: [],
      rolesrArr: [],
      preViewImgUrl: "",
      isOpen: false,

      userEditId: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
      action: "",
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

    if (prevProps.users !== this.props.users) {
      let arrGender = this.props.genderRedux;
      let arrPosition = this.props.positions;
      let arrRole = this.props.roles;
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        gender: "",
        position: "",
        role: "",
        avatar: "",
        gender: arrGender && arrGender.length > 0 ? arrGender[0].key : "",
        position:
          arrPosition && arrPosition.length > 0 ? arrPosition[0].key : "",
        role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
        action: CRUD_ACTIONS.CREATE,
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
    let isValidate = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValidate = false;
        alert("Missing parameter : " + arrInput[i]);
        break;
      }
    }
    return isValidate;
  };

  handleSaveUser = () => {
    let isValid = this.checkValideInput();
    let { action } = this.state;
    if (action === CRUD_ACTIONS.CREATE) {
      if (isValid === true) {
        this.props.createNewUserRedux({
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: this.state.address,
          gender: this.state.gender,
          roleId: this.state.role,
          phonenumber: this.state.phoneNumber,
          positionId: this.state.position,
        });
      }
    }
    if (action === CRUD_ACTIONS.EDIT) {
      this.props.editUsersStart({
        id: this.state.userEditId,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        gender: this.state.gender,
        roleId: this.state.role,
        phonenumber: this.state.phoneNumber,
        positionId: this.state.position,
        // avatar: this.statetate.avatar,
      });
    }
  };

  handleEditUserFromParent = (user) => {
    this.setState({
      email: user.email,
      password: "HARDCODE",
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      gender: user.gender,
      roleId: user.role,
      phoneNumber: user.phonenumber,
      positionId: user.position,
      avatar: "",
      action: CRUD_ACTIONS.EDIT,
      userEditId: user.id,
    });
  };

  render() {
    let { language } = this.props;
    let genders = this.state.genderArr;
    let positions = this.state.positionsArr;
    let roles = this.state.rolesrArr;
    let isLoadingGender = this.props.isLoadingGender;
    let isAction = this.state.action;
    let {
      email,
      password,
      firstName,
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
        <div className="title">
          <FormattedMessage id="manage-user.title" />
        </div>
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
                  disabled={isAction === CRUD_ACTIONS.EDIT ? true : false}
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
                  disabled={isAction === CRUD_ACTIONS.EDIT ? true : false}
                />
              </div>
              <div className="col-3 mt-3">
                <label className="mb-2">
                  <FormattedMessage id="manage-user.firtsname" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "firstName")
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
                  value={gender}
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
                  value={position}
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
                  value={role}
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

              <div className="col-12 my-3">
                <button
                  className={
                    isAction === CRUD_ACTIONS.EDIT
                      ? "btn btn-warning px-3 mt-4"
                      : "btn btn-primary px-3 mt-4"
                  }
                  onClick={() => this.handleSaveUser()}
                >
                  {isAction === CRUD_ACTIONS.EDIT ? (
                    <FormattedMessage id="manage-user.edit" />
                  ) : (
                    <FormattedMessage id="manage-user.save" />
                  )}
                </button>
              </div>
              <div className="col-12 pb-5">
                <TableManageUser
                  handleEditUserFromParent={this.handleEditUserFromParent}
                />
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
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositonsStart: () => dispatch(actions.fetchPositionsStart()),
    getRolesStart: () => dispatch(actions.fetchRolesStart()),
    createNewUserRedux: (data) => dispatch(actions.createNewUserRedux(data)),
    editUsersStart: (data) => dispatch(actions.editUsersStart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
