import { useState, useRef } from "react";
import "./DragDropFiles.css";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
  };

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        {/* <i class='bx bxs-cloud-upload'></i> */}
        <i class="bx bxs-file"></i>
        <p>Drag And Drop Files Here ...</p>
        <p>
          <span>OR</span>
        </p>
        <input
          type="file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button
          className="drop-file-btn"
          onClick={() => inputRef.current.click()}
        >
          Browse
        </button>
      </div>
    </>
  );
};

export default DragDropFiles;
