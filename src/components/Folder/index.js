import React from "react";
import "./style.scss";
import folderIconUrl from "../../static/imgs/blue_folder.png";

class Folder extends React.Component {
  state = {};

  render() {
    const { folderName } = this.props;
    return (
      <div className="item-folder-wrapper p-2">
        <div className="item-title py-2 w-100 d-flex flex-column align-items-center">
          <img src={folderIconUrl} alt="post vn" />
          <p className="mb-0 text-center">{folderName}</p>
        </div>
      </div>
    );
  }
}

export default Folder;
