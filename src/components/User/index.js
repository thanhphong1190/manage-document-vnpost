import React from "react";
import "./style.scss";

class User extends React.Component {
  state = {};

  getUserCharacter = (_userName) => {
    const lastSpaceIndex = _userName.lastIndexOf(" ");
    if (lastSpaceIndex) {
      return _userName.charAt(lastSpaceIndex + 1);
    }
    return _userName.charAt(0);
  };

  getRandomColor = () => {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16)
    return `#${colorCode}`
  };

  render() {
    const { userName, size, fontSize, isAddUser } = this.props;
    return (
      <div
        className="user-wrapper d-flex justify-content-center align-items-center mr-1"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: isAddUser ? "#ccc" : this.getRandomColor(),
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
