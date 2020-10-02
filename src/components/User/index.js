import React from "react";
import "./style.scss";

class User extends React.Component {
  state = {};
  getUserCharacter = (_userName) => {
    return _userName.charAt(0);
  };
  render() {
    const { userName, size, fontSize, isAddUser } = this.props;
    return (
      <div
        className="user-wrapper d-flex justify-content-center align-items-center mr-1"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: isAddUser ? "#ccc" : "green",
        }}
      >
        <span className="text-uppercase" style={{ fontSize: `${fontSize}px` }}>
          {isAddUser ? (
            <i className="fa fa-user-plus" aria-hidden="true"></i>
          ) : (
            this.getUserCharacter(userName)
          )}
        </span>
      </div>
    );
  }
}

export default User;
