import React from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardText,
} from "reactstrap";
import "./style.scss";
// import _ from "lodash";
// import http from "../../helpers/http";

class Home extends React.Component {
  state = {
    movies: [],
    loading: false,
    loaded: false,
  };
  render() {
    return (
      <Container className="mt-2 px-4 py-2" fluid={true}>
        <Row>
          <Col md="12">
            <div className="content-wrapper d-flex w-100">
              <div className="w-50 content-item d-flex flex-column">
                <div className="header-wrapper w-100 p-2 d-flex justify-content-between align-items-center">
                  <div className="header-left d-flex">
                    <i
                      className="fa fa-chevron-left mr-2"
                      aria-hidden="true"
                    ></i>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div className="header-right d-flex">
                    <div className="action-button">
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </div>
                    <div className="action-button mr-1">
                      <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                    </div>
                    <div className="action-button mr-1">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="action-button mr-1">
                      <i
                        className="fa fa-cloud-download"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="action-button mr-1">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <div className="folder-item">
                    <i className="fa fa-folder mr-2" aria-hidden="true"></i>
                    <span>Folder name</span>
                  </div>
                  <div className="folder-item">
                    <i className="fa fa-file-o mr-2" aria-hidden="true"></i>
                    <span>File name</span>
                  </div>
                </div>
              </div>
              <div className="w-50 content-item">
                <div className="header-wrapper w-100 p-2 d-flex justify-content-between align-items-center">
                  <div className="header-left d-flex">
                    <span>Tên folder</span>
                  </div>
                  <div className="header-right d-flex">
                    <div className="action-button mr-1">
                      <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                    </div>
                    <div className="action-button mr-1">
                      <i
                        className="fa fa-cloud-download"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="action-button mr-1">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  componentDidMount = async () => {};
}

export default Home;
