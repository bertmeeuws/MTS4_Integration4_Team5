import React, { useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

export default function ProfilePictureForm() {
  const [state, setState] = useState(null);
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const [gender, setGender] = useState(null);
  const videoConstraints = {
    facingMode: "user",
  };

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setState(imageSrc);
  }, [webcamRef]);

  return (
    <form>
      <input
        type="file"
        className="custom-file-input"
        id="input"
        accept="image/*"
        onChange={(event) =>
          setState(URL.createObjectURL(event.target.files[0]))
        }
        value=""
      />

      {state && (
        <button onClick={(event) => setState(null)}>Remove Image</button>
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
        <button onClick={capture}>Capture photo</button>
      </>
      <button onClick={(e) => setRoute(0)}>Previous</button>
    </form>
  );
}
