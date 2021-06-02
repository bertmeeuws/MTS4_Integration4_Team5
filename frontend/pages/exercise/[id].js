import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Webcam from "react-webcam";

export default function Index({ data }) {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState(null);
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const [gender, setGender] = useState(null);
  const videoConstraints = {
    facingMode: "user",
  };
  const [route, setRoute] = useState(0);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setState(imageSrc);
  }, [webcamRef]);

  const submitPersonalInformationForm = (e) => {
    e.preventDefault();
    setRoute(1);
  };

  const renderNameForm = () => {
    return (
      <form
        className="game__personal-form"
        onSubmit={submitPersonalInformationForm}
      >
        <label htmlFor="username">Wat is jouw naam:</label>
        <br />
        <input type="text" id="username" name="username" />
        <br />

        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
        <br />
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
        <input type="submit" value="Submit" />
      </form>
    );
  };

  const renderImageForm = () => {
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
  };

  return (
    <section className="exercise-form-start">
      <h1 className="hidden">Form</h1>
      <div className="exercise-form-first">
        {route === 0 ? renderNameForm() : ""}
      </div>
      {route === 1 ? renderImageForm() : ""}
    </section>
  );
}
