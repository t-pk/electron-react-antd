import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  React.useCallback(() => {
    webcamRef.current.getScreenshot();
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
