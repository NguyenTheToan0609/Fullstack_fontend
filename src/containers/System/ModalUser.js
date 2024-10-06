import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleModalUser();
  };

  render() {
    console.log("check child props", this.props);
    console.log("check child props isOpen", this.props.isOpen);
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
              <input type="email" />
            </div>
            <div className="input-modal-user">
              <label>Password</label>
              <input type="Password" />
            </div>
            <div className="input-modal-user">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="input-modal-user">
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div className="input-modal-user max-width-input ">
              <label>Address</label>
              <input type="text" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Sava changes
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
