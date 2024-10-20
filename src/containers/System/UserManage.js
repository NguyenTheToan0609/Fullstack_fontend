import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { emitter } from "../../utils/emitter";
import {
  getAllUser,
  createNewUser,
  deleteUser,
  editUser,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
class UserManage extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      arrUsers: [],
      isShowModal: false,
      isShowModalEdit: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAlluserFromService();
  }

  getAlluserFromService = async () => {
    let res = await getAllUser("ALL");
    if (res && res.errCode === 0) {
      this.setState({
        arrUsers: res.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isShowModal: true,
    });
  };

  createNewuser = async (data) => {
    try {
      let res = await createNewUser(data);
      console.log(res);
      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        await this.getAlluserFromService();
        this.setState({
          isShowModal: false,
        });
        emitter.emit("EVENT_CLEAR_MODEL_DATA");
      }
    } catch (e) {
      console.log(e);
    }
  };

  toggleModalUser = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };

  handleDeleteUser = async (user) => {
    try {
      let res = await deleteUser(user.id);
      if (res && res.errCode === 0) {
        await this.getAlluserFromService();
      } else {
        console.log(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditUser = (user) => {
    console.log(user);
    this.setState({
      isShowModalEdit: !this.state.isShowModalEdit,
      userEdit: user,
    });
    console.log("user", user);
  };

  toggleModalEditUser = () => {
    this.setState({
      isShowModalEdit: false,
    });
  };

  doEdituser = async (data) => {
    try {
      let res = await editUser(data);
      if (res && res.errCode === 0) {
        await this.getAlluserFromService();
        this.setState({
          isShowModalEdit: false,
        });
      } else {
        alert(res.errMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isShowModal}
          toggleModalUser={this.toggleModalUser}
          createNewuser={this.createNewuser}
        />
        {this.state.isShowModalEdit && (
          <ModalEditUser
            isOpen={this.state.isShowModalEdit}
            toggleModalEditUser={this.toggleModalEditUser}
            currentUser={this.state.userEdit}
            EditUSer={this.doEdituser}
          />
        )}
        <div className="title text-center">Manage User</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-2"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus fa-fw"></i>
            Add new user
          </button>
        </div>

        <div className="user-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
            {arrUsers &&
              arrUsers.length > 0 &&
              arrUsers.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="btn-edit">
                        <i
                          className="fas fa-pencil-alt"
                          onClick={() => this.handleEditUser(item)}
                        ></i>
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => this.handleDeleteUser(item)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
