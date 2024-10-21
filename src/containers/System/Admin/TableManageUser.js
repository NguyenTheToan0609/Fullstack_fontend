import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      userRedux: [],
    };
  }

  async componentDidMount() {
    this.props.fetchAllUsersStart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //render => didUpDate
    // hiện tại (this) và quá khứ (prev)
    // [] [3]

    //[3] [3]
    if (prevProps.users !== this.props.users) {
      let arrUsers = this.props.users;
      this.setState({
        userRedux: arrUsers,
      });
    }
  }

  handleDeleteUser = (userId) => {
    this.props.deleteUsersRedx(userId.id);
  };

  handleEditUser = (user) => {
    this.props.handleEditUserFromParent(user);
  };

  render() {
    let listUser = this.state.userRedux;
    return (
      <table id="TableManageUser">
        <tr>
          <th>email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <tr>
                <td>{item.email}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address}</td>
                <td>
                  <button
                    onClick={() => this.handleEditUser(item)}
                    className="btn-edit"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    onClick={() => this.handleDeleteUser(item)}
                    className="btn-delete"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsersStart: () => dispatch(actions.fetchAllUsersStart()),
    deleteUsersRedx: (id) => dispatch(actions.deleteUsersStart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
