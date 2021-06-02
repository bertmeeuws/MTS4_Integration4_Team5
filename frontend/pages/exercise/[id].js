import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Webcam from 'react-webcam';

export default function index({ data }) {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState(null);
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const videoConstraints = {
    facingMode: 'user',
  };

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
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

  return (
    <section className="exercise-form-start">
      <h1>Form</h1>
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
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          width={600}
          ref={webcamRef}
          videoConstraints={{ deviceId: deviceId }}
        />
        <img id="output" style={{ width: '50%' }} src={state} />
      </form>
      <>
        <select
          name="devices"
          id="devices"
          onChange={(e) => setDeviceId(e.currentTarget.value)}
        >
          {devices.map((device, key) => (
            <option value={device.deviceId}>
              {JSON.stringify(device.label)} {key + 1}
            </option>
          ))}
        </select>
        <button onClick={capture}>Capture photo</button>
      </>
    </section>
  );
}
