import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Form state
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('');
  const [details, setDetails] = useState('');
  const [device, setDevice] = useState('');
  const [browser, setBrowser] = useState('');
  const [os, setOs] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      location,
      priority,
      details,
      device,
      browser,
      os,
    };

    try {
      const response = await fetch('http://localhost:5000/api/create-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Bug report submitted successfully!');
        setIsOpen(false);
        // Clear form
        setLocation('');
        setPriority('');
        setDetails('');
        setDevice('');
        setBrowser('');
        setOs('');
      } else {
        alert('Failed to submit bug report.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting bug report.');
    }
  };

  return (
    <div className="app-container">
      <button onClick={() => setIsOpen(true)} className="toggle-button">
        Report Bug 🐞
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setIsOpen(false)} className="close-button">
              ✖
            </button>

            <h2 className="modal-header">🐞 Report a Bug</h2>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div>
                <label className="label">Where was this bug found?</label>
                <input
                  type="text"
                  className="input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Dashboard > Profile"
                />
              </div>

              <div>
                <label className="label">Priority *</label>
                <div className="radio-group">
                  {['High', 'Medium', 'Low'].map((level) => (
                    <label key={level} className="radio-option">
                      <input
                        type="radio"
                        name="priority"
                        value={level}
                        className="radio-input"
                        checked={priority === level}
                        onChange={(e) => setPriority(e.target.value)}
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="label">Details</label>
                <textarea
                  className="textarea"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe what happened and how to reproduce it..."
                />
              </div>

              <div className="grid-container">
                <div>
                  <label className="label">Device Used *</label>
                  <select
                    className="select"
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option>Desktop</option>
                    <option>iOS</option>
                    <option>Android</option>
                    <option>Laptop</option>
                  </select>
                </div>

                <div>
                  <label className="label">Browser</label>
                  <select
                    className="select"
                    value={browser}
                    onChange={(e) => setBrowser(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option>Google Chrome</option>
                    <option>Firefox</option>
                    <option>Microsoft Edge</option>
                    <option>Safari</option>
                  </select>
                </div>

                <div className="grid-full">
                  <label className="label">Operating System</label>
                  <select
                    className="select"
                    value={os}
                    onChange={(e) => setOs(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option>Windows</option>
                    <option>Linux</option>
                    <option>iOS</option>
                    <option>Android</option>
                  </select>
                </div>
              </div>

              <div className="submit-button-container">
                <button type="submit" className="submit-button">
                  ✉️ Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
