import React from 'react';
import Webcam from 'react-webcam';
import { Button } from 'antd';

const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      {/* <Button type="primary" onClick={capture}>Capture photo</Button> */}
    </>
  );
};

export default WebcamCapture;
