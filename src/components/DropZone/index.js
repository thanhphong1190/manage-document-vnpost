import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./style.scss";
import FileUploadModal from "../Modal/FileUpload";

export const DropZone = () => {
  const [isShowFileUploadModal, setShowFileUploadModal] = useState(false);
  const [fileList, setFileList] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFileList(acceptedFiles);
    setShowFileUploadModal(true);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps()}
        className="drop-zone-wrapper d-flex justify-content-center"
        style={{ border: isDragActive ? "3px dotted #34cceb" : null }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="d-flex flex-column justify-content-center align-items-center drop-text-active">
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            <p>Thả file để tải lên</p>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center drop-text">
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            <p>Kéo và thả file vào đây, hoặc click để chọn file</p>
          </div>
        )}
      </div>
      <FileUploadModal
        title="Upload file"
        modal={isShowFileUploadModal}
        toggle={() => setShowFileUploadModal(!isShowFileUploadModal)}
        fileList={fileList}
      />
    </>
  );
};
