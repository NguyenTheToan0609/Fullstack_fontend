import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      arrUsers: [],
      isShowModal: false,
    };
  }

  async componentDidMount() {
    let res = await getAllUser("ALL");
    console.log("res", res);
    if (res && res.errCode === 0) {
      this.setState({
        arrUsers: res.users,
      });
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isShowModal: true,
    });
  };

  toggleModalUser = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };
  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isShowModal}
          toggleModalUser={this.toggleModalUser}
        />
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
                  <tr>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="btn-edit">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i class="fas fa-trash-alt"></i>
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
