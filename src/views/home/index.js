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
                  <div
                    className="create-folder-button d-flex justify-content-center align-items-center ml-2"
                    title="Tạo thư mục mới"
                    onClick={() =>
                      this.setState({
                        isShowAddUpdateModal: true,
                        mode: "create",
                        title: "Tạo folder mới",
                      })
                    }
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="folder-container">
                  <Row>
                    <Col md="3">
                      <div className="item-folder-wrapper">
                        <div className="item-title w-100 d-flex align-items-center p-2">
                          <i
                            className="fa fa-folder mr-2"
                            aria-hidden="true"
                          ></i>
                          <p>Folder name</p>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="item-folder-wrapper">
                        <div className="item-title w-100 d-flex align-items-center p-2">
                          <i
                            className="fa fa-folder mr-2"
                            aria-hidden="true"
                          ></i>
                          <p>Folder 2</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* file */}
              <div className="w-100">
                <h6 className="pb-2">Tệp</h6>
                <div className="folder-container">
                  <Row>
                    <Col md="3">
                      <div className="item-file-wrapper">
                        <div className="item-title w-100 d-flex align-items-center p-2">
                          <i className="fa fa-file mr-2" aria-hidden="true"></i>
                          <span>Bảng đánh giá.txt</span>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="item-file-wrapper">
                        <div className="item-title w-100 d-flex align-items-center p-2">
                          <i className="fa fa-file mr-2" aria-hidden="true"></i>
                          <span>Văn bản xác nhận.pdf</span>
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
          title= {this.state.title}
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
