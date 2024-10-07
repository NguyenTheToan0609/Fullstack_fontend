import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }
  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "hashpassword",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  handleOnchangeInput = (event, id) => {
    let coptState = { ...this.state };
    coptState[id] = event.target.value;
    this.setState({
      ...coptState,
    });
  };

  toggle = () => {
    this.props.toggleModalEditUser();
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
  };

  handleAddNewUser = () => {
    let isValidate = this.checkValideInput();
    if (isValidate === true) {
      this.props.EditUSer(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Edit User</ModalHeader>
        <ModalBody>
          <div className="model-user">
            <div className="input-modal-user">
              <label>Email</label>
              <input
                type="email"
                disabled
                onChange={(event) => this.handleOnchangeInput(event, "email")}
                value={this.state.email}
              />
            </div>
            <div className="input-modal-user">
              <label>Password</label>
              <input
                type="Password"
                disabled
                onChange={(event) =>
                  this.handleOnchangeInput(event, "password")
                }
                value={this.state.password}
              />
            </div>
            <div className="input-modal-user">
              <label>First Name</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "firstName")
                }
                value={this.state.firstName}
              />
            </div>
            <div className="input-modal-user">
              <label>Last Name</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "lastName")
                }
                value={this.state.lastName}
              />
            </div>
            <div className="input-modal-user max-width-input ">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => this.handleOnchangeInput(event, "address")}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleAddNewUser()}
          >
            Save Changes
          </Button>
          <Button color="danger" className="px-3" onClick={() => this.toggle()}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
