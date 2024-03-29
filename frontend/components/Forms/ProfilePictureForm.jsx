import React, { useState,useEffect } from "react";
import Webcam from "react-webcam";
import { API_URL } from "../../constants/index";
import axios from "axios";

export default function ProfilePictureForm({ setRoute }) {
  const [state, setState] = useState(null);
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const [gender, setGender] = useState(null);
  const [blob, setBlob] = useState(null);
  const videoConstraints = {
    facingMode: "user",
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, []);

  const handleDevices = (mediaDevices) => {
    setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
      [setDevices];
  };

  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setState(imageSrc);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if (!blob) {
      alert("Upload een foto");
    } else {
      console.log(blob);
      let formData = new FormData(e.target);
      formData.append("ref", "image");
      formData.append("field", "image");
      formData.append("files", blob);

      try {
        const postImageResponse = await axios.post(`${API_URL}/images`);
        // creating an image content-type seems a good solution
        const newImageId = postImageResponse.data.id;
        formData.append("refId", newImageId);
        const uploadHeaders = { "Content-Type": "multippart/form-data" };
        axios.post(`${API_URL}/upload`, formData, {
          headers: uploadHeaders,
        });
        setRoute(2);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <form onSubmit={uploadImage}>
        <input
          type="file"
          className="custom-file-input"
          id="input"
          accept="image/*"
          onChange={(event) => {
            setState(URL.createObjectURL(event.target.files[0]));
            setBlob(event.target.files[0]);
          }}
          value=""
        />
        <input type="submit" value="Upload picture" />
      </form>
      <form>
        {state && (
          <button
            onClick={(event) => {
              setState(null);
              setBlob(null);
            }}
          >
            Remove Image
          </button>
        )}
        <img id="output" style={{ width: "50%" }} src={state} />
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          width={600}
          ref={webcamRef}
          videoConstraints={{ deviceId: deviceId }}
        />

        <>
          <select
            name="devices"
            id="devices"
            onChange={(e) => setDeviceId(e.currentTarget.value)}
          >
            {devices.map((device, key) => (
              <option value={device.deviceId}>{device.label}</option>
            ))}
          </select>
          <button onClick={(e) => capture}>Capture photo</button>
        </>
        <button onClick={(e) => setRoute(0)}>Previous</button>
      </form>
    </>
  );
}
