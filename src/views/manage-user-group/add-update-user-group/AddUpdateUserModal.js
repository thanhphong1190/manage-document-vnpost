import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import { FIELD_REQUIRED } from "../../../app-messages";
import Input from "../../../components/Form/Input";
import http from "../../../helpers/http";
import { toastr } from "react-redux-toastr";
import Select from "react-select";
import { RoleData, UserListData } from "../../../static/mockData"

const formSchema = Yup.object().shape({
  name: Yup.string().required(FIELD_REQUIRED),
  username: Yup.string().required(FIELD_REQUIRED),
  email: Yup.string().required(FIELD_REQUIRED),
  phone: Yup.string(),
  province_id: Yup.string().required(FIELD_REQUIRED),
  department_id: Yup.string().required(FIELD_REQUIRED),
});

class AddUpdateUserGroupModal extends Component {
  render() {
    const { toggle, modal, user, mode } = this.props;
    if (!user) {
      return <span></span>;
    }
    return (
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {mode === "add" ? "Tạo group" : "Cập nhật user group"}
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              province_id: "",
              department_id: "",
              ...user,
            }}
            validationSchema={formSchema}
            onSubmit={this.onSubmit}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form>
                <Input
                  field="name"
                  label="Tên nhóm user(*)"
                  errors={errors}
                  touched={touched}
                />
                <FormGroup>
                  <Label>Chọn phân quyền nhóm</Label>
                  <Select
                    options={RoleData}
                    isSearchable={true}
                    isMulti= {true}
                    placeholder="Phân quyền nhóm user"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Danh sách thành viên nhóm</Label>
                  <Select
                    options={UserListData}
                    isSearchable={true}
                    isMulti= {true}
                    placeholder="Thành viên nhóm"
                  />
                </FormGroup>
                <div className="d-flex justify-content-center">
                  <Button color="secondary" className="mr-2" onClick={toggle}>
                    Huỷ
                  </Button>
                  <Button color="success" type="submit">
                    {mode === "add" ? "Tạo" : "Cập nhật"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    );
  }

  onSubmit = async (values) => {
    const { toggle, doActionAfterSubmit } = this.props;
    try {
      if (values.id) {
        await http.put(`users/${values.id}`, values);
        toastr.success("Thông báo", "Cập nhật nhân viên thành công.");
      } else {
        await http.post("users", values);
        toastr.success("Thông báo", "Tạo nhân viên thành công.");
      }

      toggle();
      doActionAfterSubmit();
    } catch (err) {
      const errorMessage = _.get(err, "response.data.error");
      toastr.error("Thông báo", errorMessage);
    }
  };
}

AddUpdateUserGroupModal.propTypes = {
  toggle: PropTypes.func,
  doActionAfterSubmit: PropTypes.func,
  modal: PropTypes.bool,
  user: PropTypes.object,
};

AddUpdateUserGroupModal.defaultProps = {
  toggle: () => {},
  doActionAfterSubmit: () => {},
  modal: false,
  user: {},
};

export default AddUpdateUserGroupModal;
