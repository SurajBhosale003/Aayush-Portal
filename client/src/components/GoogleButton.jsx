// GoogleButton.js


import './Google.css'; // Import your CSS file for styling

const GoogleButton = () => {
  const handleButtonClick = () => {
    // Add your button click functionality here
    window.location.href = 'https://www.google.com'; // Redirect to Google as an example
  };

  return (
    <button className="google-button" onClick={handleButtonClick}>
      <span className="google-button-icon">
        <i className="fab fa-google"></i>
      </span>
      <span className="google-button-text">Sign in with Google</span>
    </button>
  );
};

export default GoogleButton;
