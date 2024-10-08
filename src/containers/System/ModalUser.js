import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }
  componentDidMount() {}

  handleOnchangeInput = (event, id) => {
    let coptState = { ...this.state };
    coptState[id] = event.target.value;
    this.setState({
      ...coptState,
    });
  };

  toggle = () => {
    this.props.toggleModalUser();
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
      return true;
    }
  };

  handleAddNewUser = () => {
    let isValidate = this.checkValideInput();
    if (isValidate === true) {
      this.props.createNewuser(this.state);
    }
  };

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODEL_DATA", () => {
      this.handleResetAddNewUser();
    });
  }

  handleResetAddNewUser = () => {
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Add New User</ModalHeader>
        <ModalBody>
          <div className="model-user">
            <div className="input-modal-user">
              <label>Email</label>
              <input
                type="email"
                onChange={(event) => this.handleOnchangeInput(event, "email")}
                value={this.state.email}
              />
            </div>
            <div className="input-modal-user">
              <label>Password</label>
              <input
                type="Password"
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
            Add new
          </Button>
          <Button
            color="warning"
            className="px-3"
            onClick={() => this.handleResetAddNewUser()}
          >
            Reset
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
