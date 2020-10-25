import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import { CONFIRM, CANCEL, OK } from "../../../app-messages";
import Folder from "../../Folder";
import Select from "react-select";
import { RoleData, UserListData } from "../../../static/mockData";
import "./style.scss";

class FileUploadModal extends Component {
  static propTypes = {
    title: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    buttonType: PropTypes.string,
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    onConfirmPress: PropTypes.func.isRequired,
    fileList: PropTypes.array,
  };

  state = {
    userRoleList: [],
  };

  addNewUserRole = () => {
    const userRoleList = this.state.userRoleList.concat({
      user: [],
      role: [],
    });
    this.setState({
      userRoleList,
    });
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
      fileList,
    } = this.props;
    const { userRoleList } = this.state;
    console.log("fileList", fileList);
    return (
      <Modal isOpen={modal} toggle={toggle} size="lg" backdrop="static">
        <ModalHeader toggle={toggle}>{title || CONFIRM}</ModalHeader>
        <ModalBody>
          <Row>
            <div className="w-100 d-flex flex-column mb-4">
              <Col md={3}>
                <h6>Tên file: </h6>
              </Col>
              {fileList &&
                fileList.length > 0 &&
                fileList.map((file) => {
                  return (
                    <Col md={12}>
                      <span>{file.name}</span>
                    </Col>
                  );
                })}
            </div>
          </Row>
          <Row>
            <div className="w-100 d-flex flex-column mb-4">
              <Col md={3}>
                <h6>Chọn thư mục để lưu: </h6>
              </Col>
              <Col md={12}>
                <div className="w-100 d-flex flex-wrap file-folder-save">
                  <Folder folderName="File name 1" />
                  <Folder folderName="File name 1" />
                </div>
              </Col>
            </div>
            <div className="w-100 d-flex mb-2">
              <Col md={4}>
                <h6>Phân quyền user trên file: </h6>
              </Col>
            </div>
            {userRoleList &&
              userRoleList.length > 0 &&
              userRoleList.map((userRole) => {
                return (
                  <div className="w-100 d-flex">
                    <Col md={5}>
                      <FormGroup>
                        <Select
                          options={UserListData}
                          isSearchable={true}
                          isMulti={true}
                          placeholder="Chọn user/nhóm"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <FormGroup>
                        <Select
                          options={RoleData}
                          isSearchable={true}
                          isMulti={true}
                          placeholder="Chọn quyền trên file"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Button color="danger" title="Xóa">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                      </FormGroup>
                    </Col>
                  </div>
                );
              })}

            <div className="w-100">
              <Col md={12} className="d-flex justify-content-center">
                <Button color="primary" title="Thêm phân quyền" onClick={() => this.addNewUserRole()}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </Button>
              </Col>
            </div>
          </Row>
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

FileUploadModal.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  onConfirmPress: PropTypes.func,
  fileList: PropTypes.array,
};

FileUploadModal.defaultProps = {
  modal: false,
  toggle: () => {},
  onConfirmPress: () => {},
  fileList: [],
};

export default FileUploadModal;
