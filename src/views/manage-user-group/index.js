import React from "react";
import { Row, Col, Container, Button, Badge } from "reactstrap";
import MyTable from "../../components/MyTable";
import { noFormatter } from "../../helpers/formatter";
import { PAGE_SIZE } from "../../app-constants";
import ConfirmModal from "../../components/Modal/Confirm";
import { ManageUserGroupData } from "../../static/mockData";
import SearchBar from "../../components/Form/SearchBar";
import AddUpdateUserModal from "./add-update-user-group/AddUpdateUserModal";
import User from "../../components/User";

class ManageUserGroup extends React.Component {
  state = {
    data: ManageUserGroupData,
    search: "",
    page: 1,
    pageSize: PAGE_SIZE,
    isShowConfirmDelete: false,
    selectedId: null,
    selectedItem: null,
    isShowAddUpdateModal: false,
    mode: "add",
  };

  handleTableChange = (
    type,
    { page, sizePerPage, filters, sortField, sortOrder, cellEdit }
  ) => {
    const { pageSize } = this.state;
    if (pageSize === sizePerPage) {
      this.setState({ page }, this.fetchData);
    } else {
      this.setState({ pageSize: sizePerPage, page: 1 }, this.fetchData);
    }
  };

  render() {
    const { page, isShowConfirmDelete } = this.state;
    const columns = [
      {
        dataField: "id",
        text: "STT",
        classes: "text-center",
        headerClasses: "text-center",
        headerStyle: {
          width: "50px",
        },
        formatter: noFormatter,
        formatExtraData: { page },
      },
      {
        dataField: "name",
        text: "Tên nhóm",
        classes: "text-nowrap",
      },
      {
        dataField: "user_group_role",
        text: "Phân quyền của nhóm",
        classes: "text-nowrap",
        formatter: (cell, row) => {
          return (
            <div className="d-flex">
              {cell &&
                cell.length > 0 &&
                cell.map((role) => {
                return <Badge color="info" pill className="mr-1">{role}</Badge>
                })}
            </div>
          );
        },
      },
      {
        dataField: "user_group_list",
        text: "Danh sách user",
        classes: "text-nowrap",
        formatter: (cell, row) => {
          return (
            <div className="d-flex">
              {cell &&
                cell.length > 0 &&
                cell.map((item) => {
                  return <User userName={item.name} size={40} fontSize={20} />;
                })}
            </div>
          );
        },
      },
      {
        text: "Thao tác",
        classes: "text-center text-nowrap",
        headerClasses: "text-center",
        headerStyle: {
          width: "150px",
        },
        dataField: "action",
        formatter: (cell, row) => {
          return (
            <div className="d-flex justify-content-center">
              <Button
                className="ml-1"
                color="primary"
                onClick={() =>
                  this.setState({
                    isShowAddUpdateModal: true,
                    selectedItem: row,
                    mode: "update",
                  })
                }
              >
                <i className="fa fa-pencil"></i>
              </Button>
              <Button
                className="ml-1"
                color={"danger"}
                onClick={() =>
                  this.setState({
                    isShowConfirmDelete: true,
                    selectedId: row.id,
                  })
                }
              >
                <i className="fa fa-trash-o"></i>
              </Button>
            </div>
          );
        },
      },
    ];
    return (
      <Container className="mt-2" fluid={true}>
        <Row>
          <Col md="12">
            <div className="d-flex align-items-center justify-content-between w-100 page-title">
              <h6>
                <strong>Quản lý nhóm user</strong>
              </h6>
              <Button
                color="primary"
                onClick={() =>
                  this.setState({
                    isShowAddUpdateModal: true,
                    selectedItem: {},
                    mode: "add",
                  })
                }
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i> Tạo
                nhóm user
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col md="12" className="pt-3">
            <SearchBar onSearch={this.onSearch} />
            <MyTable
              columns={columns}
              data={this.state.data}
              page={this.state.page}
              sizePerPage={this.state.pageSize}
              totalSize={this.state.totalSize}
              onTableChange={this.handleTableChange}
            />
          </Col>
        </Row>
        <AddUpdateUserModal
          toggle={() =>
            this.setState({
              isShowAddUpdateModal: !this.state.isShowAddUpdateModal,
            })
          }
          modal={this.state.isShowAddUpdateModal}
          user={this.state.selectedItem}
          doActionAfterSubmit={this.fetchData}
          mode={this.state.mode}
        />
        <ConfirmModal
          modal={isShowConfirmDelete}
          toggle={this.onToggleDeleteModal}
          message={"Bạn có chắc muốn xóa ?"}
          onConfirmPress={this.onDelete}
        />
      </Container>
    );
  }

  fetchData = async (
    page = this.state.page,
    pageSize = this.state.pageSize
  ) => {
    console.log("Fetch data");

    // Will enable when integrate
    // const res = await http.get("users", {
    //   ...this.state.params,
    //   pageSize,
    //   pageIndex: page,
    // });
    // const { data } = res.data;
    // this.setState({
    //   data,
    //   totalSize: res.data.totalCount,
    //   page,
    //   pageSize,
    // });
  };

  handlePageChange = (page) => {
    this.setState({ page }, this.fetchData);
  };

  handleSizePerPageChange = (pageSize) => {
    this.setState({ pageSize, page: 1 }, this.fetchData);
  };

  onToggleDeleteModal = () => {
    this.setState({
      isShowConfirmDelete: !this.state.isShowConfirmDelete,
    });
  };

  componentDidMount = async () => {};
}

export default ManageUserGroup;
