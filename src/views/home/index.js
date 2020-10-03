import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";
import "./style.scss";
import DropDown from "../../components/Dropdown";
import CreateEdit from "../../components/Modal/CreateEdit";
// import _ from "lodash";
// import http from "../../helpers/http";
import folderIconUrl from "../../static/imgs/blue_folder.png";
import addFolderIconUrl from "../../static/imgs/add_folder.png";
import User from "../../components/User";

class Home extends React.Component {
  state = {
    selectedItem: null,
    isShowAddUpdateModal: false,
    title: "Tạo folder mới",
  };
  render() {
    return (
      <Container className="mt-2 px-4 py-2" fluid={true}>
        <Row>
          <Col md="12">
            <div className="header-wrapper w-100 d-flex justify-content-between">
              <div className="breadcum py-2">
                <div className="breadcum-item d-flex align-items-center">
                  <h6>Dữ liệu của bạn</h6>
                  <div className="d-flex align-items-center ml-2">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    <DropDown title="Folder 1" />
                  </div>
                </div>
              </div>
              <div>
                <InputGroup>
                  <Input placeholder="Tìm kiếm thư mục, tệp" />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="content-wrapper d-flex flex-column w-100 pt-4">
              <div className="w-100 mb-5">
                <div className="d-flex align-items-center pb-3">
                  <h6 className="mb-0">Thư mục</h6>
                </div>
                <div className="folder-container w-100 d-flex flex-wrap">
                  <div
                    className="item-folder-wrapper d-flex flex-column align-items-center justify-content-center"
                    onClick={() =>
                      this.setState({
                        isShowAddUpdateModal: true,
                        mode: "create",
                        title: "Tạo folder mới",
                      })
                    }
                  >
                    <div className="item-title w-100 text-center">
                      <img src={addFolderIconUrl} alt="post vn" />
                    </div>
                  </div>
                  <div className="item-folder-wrapper p-2">
                    <div className="item-title py-2 w-100 d-flex flex-column align-items-center">
                      <img src={folderIconUrl} alt="post vn" />
                      <p className="mb-0 text-center">Folder name 1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* file */}
              <div className="w-100">
                <h6 className="pb-2">Tệp</h6>
                <div className="folder-container w-100">
                  <Row>
                    <Col md={12} lg={6}>
                      <div className="item-file-wrapper p-2 pr-4 d-flex justify-content-between m-1 w-100">
                        <div className="item-title w-100 d-flex align-items-center">
                          <i className="fa fa-file mr-2" aria-hidden="true"></i>
                          <p className="mb-0 text-center">Bảng đánh giá.txt</p>
                        </div>
                        <div className="item-right d-flex align-items-center">
                          <div className="d-flex mr-4">
                            <User userName="Nam" size={40} fontSize={20} />
                            <User userName="Phong" size={40} fontSize={20} />
                            <User size={40} fontSize={20} isAddUser={true}/>
                          </div>
                          <div className="item-action d-flex">
                            <i className="fa fa-cloud-download mr-2" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="item-file-wrapper p-2 pr-4 d-flex justify-content-between m-1 w-100">
                        <div className="item-title w-100 d-flex align-items-center">
                          <i className="fa fa-file mr-2" aria-hidden="true"></i>
                          <p className="mb-0 text-center">Bảng đánh giá.txt</p>
                        </div>
                        <div className="item-right d-flex align-items-center">
                          <div className="d-flex mr-4">
                            <User userName="Nam" size={40} fontSize={20} />
                            <User userName="Phong" size={40} fontSize={20} />
                            <User size={40} fontSize={20} isAddUser={true}/>
                          </div>
                          <div className="item-action d-flex">
                            <i className="fa fa-cloud-download mr-2" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <CreateEdit
          buttonType="primary"
          title={this.state.title}
          toggle={() =>
            this.setState({
              isShowAddUpdateModal: !this.state.isShowAddUpdateModal,
            })
          }
          modal={this.state.isShowAddUpdateModal}
          mode={this.state.mode}
        />
      </Container>
    );
  }
  componentDidMount = async () => {};
}

export default Home;
