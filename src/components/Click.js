import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Click() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState('');
  const [material, setMaterial] = useState(''); // Start with no selected material
  const [imageCaptured, setImageCaptured] = useState(false);
  const [imageSubmitted, setImageSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [mediaStream, setMediaStream] = useState(null);
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setMediaStream(stream);
    } catch (err) {
      setError('Error accessing the camera. Please check your permissions.');
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop(); // Stop each track of the media stream
      });
      videoRef.current.srcObject = null; // Clear the video element
      setMediaStream(null); // Clear the media stream state
      console.log('Camera stopped.');
    } else {
      console.log('No media stream to stop.');
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    setCapturedImage(imageData);
    setImageCaptured(true);
    setSubmissionMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!capturedImage) {
      setError('Please capture an image before submitting.');
      return;
    }
    setImageSubmitted(true);
    setSubmissionMessage('Image submitted successfully!');
    setError('');
  };

  const handleContinue = () => {
    if (imageSubmitted) {
      navigate('/price');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', height: '100vh', backgroundColor: '#add8e6' }}>
      <h2>Instructions to Capture Image</h2>
      <p>Click the button below to start the camera. Position the item you want to capture in front of the camera and click "Capture Image".</p>
      
      <button onClick={startCamera} style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Start Camera
      </button>
      <button onClick={stopCamera} style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#FF5733', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Stop Camera
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submissionMessage && <p style={{ color: 'green' }}>{submissionMessage}</p>}

      <video 
        ref={videoRef} 
        style={{ width: '100%', maxWidth: '400px', display: capturedImage ? 'none' : 'block' }} 
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={captureImage} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#28A745', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Capture Image
      </button>
      
      {imageCaptured && (
        <div>
          <h3>Image Successfully Captured!</h3>
          <img src={capturedImage} alt="Captured" style={{ width: '100%', maxWidth: '400px', marginTop: '10px' }} />
          
          <div style={{ marginTop: '20px' }}>
            <label htmlFor="material">Select Material of Captured Item:</label>
            <select 
              id="material" 
              value={material} 
              onChange={(e) => setMaterial(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              <option value="">Select Material</option>
              <option value="plastic">Plastic</option>
              <option value="glass">Glass</option>
              <option value="wood">Wood</option>
              <option value="electronics">Electronics</option>
              <option value="metal">Metal</option>
              <option value="others">Others</option>
            </select>
          </div>

          <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#17A2B8', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Submit
          </button>
        </div>
      )}

      {imageSubmitted && (
        <button onClick={handleContinue} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Continue to Price Page
        </button>
      )}
    </div>
  );
}

export default Click;