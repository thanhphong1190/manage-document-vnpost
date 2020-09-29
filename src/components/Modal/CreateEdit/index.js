import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { CONFIRM, CANCEL, OK } from "../../../app-messages";

class CreateEdit extends Component {
  static propTypes = {
    title: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    buttonType: PropTypes.string,
    mode: PropTypes.string.isRequired,
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    onConfirmPress: PropTypes.func.isRequired,
  };
  render() {
    const {
      title,
      confirmText,
      cancelText,
      buttonType,
      onConfirmPress,
      modal,
      toggle,
      mode,
    } = this.props;
    console.log(mode);
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title || CONFIRM}</ModalHeader>
        <ModalBody>
          {(mode === "create" || mode === "edit") && (
            <FormGroup>
              <Label for="exampleFolder">Tên thư mục</Label>
              <Input
                type="text"
                name="folderName"
                id="exampleFolder"
                placeholder="Gõ tên thư mục"
              />
            </FormGroup>
          )}
          {mode === "share" && (
            <>
              <FormGroup>
                <Label for="exampleSelect">Chỉ xem</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Nhân viên</option>
                  <option>Phòng a</option>
                  <option>Phòng b</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Có thể xem / chỉnh sửa</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Nhân viên</option>
                  <option>Phòng a</option>
                  <option>Phòng b</option>
                </Input>
              </FormGroup>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            {cancelText || CANCEL}
          </Button>{" "}
          <Button
            color={buttonType || "danger"}
            onClick={() => {
              toggle();
              onConfirmPress();
            }}
          >
            {confirmText || OK}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

CreateEdit.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  onConfirmPress: PropTypes.func,
  mode: PropTypes.string,
};

CreateEdit.defaultProps = {
  modal: false,
  toggle: () => {},
  onConfirmPress: () => {},
  mode: "create",
};

export default CreateEdit;
