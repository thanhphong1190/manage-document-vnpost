import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./style.scss";
import CreateEdit from "../Modal/CreateEdit";

class DropDown extends React.Component {
  state = {
    isShowAddUpdateModal: false,
    title: "Tạo folder mới"
  };
  render() {
    const { title } = this.props;
    return (
      <>
        <UncontrolledDropdown>
          <DropdownToggle caret>{title}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() =>
                this.setState({
                  isShowAddUpdateModal: true,
                  mode: "create",
                  title: "Tạo folder mới"
                })
              }
            >
              <i className="fa fa-plus-circle mr-2" aria-hidden="true"></i>Tạo
              thư mục mới
            </DropdownItem>
            <DropdownItem onClick={() =>
                this.setState({
                  isShowAddUpdateModal: true,
                  mode: "share",
                  title: "Chia sẻ"
                })
              }>
              <i className="fa fa-share-square mr-2" aria-hidden="true"></i>Chia
              sẻ
            </DropdownItem>
            <DropdownItem onClick={() =>
                this.setState({
                  isShowAddUpdateModal: true,
                  mode: "edit",
                  title: "Đổi tên folder"
                })
              }>
              <i className="fa fa-pencil-square mr-2" aria-hidden="true"></i>Đổi
              tên
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-cloud-upload mr-2" aria-hidden="true"></i>Tải tệp lên
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-cloud-download mr-2" aria-hidden="true"></i>Tải xuống
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <i className="fa fa-trash mr-2" aria-hidden="true"></i>Xóa
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <CreateEdit
          buttonType="primary"
          title= {this.state.title}
          toggle={() =>
            this.setState({
              isShowAddUpdateModal: !this.state.isShowAddUpdateModal,
            })
          }
          modal={this.state.isShowAddUpdateModal}
          mode={this.state.mode}
        />
      </>
    );
  }
}

export default DropDown;
