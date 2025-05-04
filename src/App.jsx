import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  IconBug, 
  IconX, 
  IconDeviceLaptop, 
  IconBrandChrome, 
  IconDeviceDesktop,
  IconExclamationMark,
  IconMinusVertical,
  IconSend,
  IconAlertCircle,
  IconChevronCompactDown,
  IconChevronDown
} from '@tabler/icons-react';

const App = ({site_key}) => {
  // console.log(`Site Key: ${site_key}`);
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Updated form state with default values
  const [priority, setPriority] = useState('High');
  const [bugArea, setBugArea] = useState('Dashboard');
  const [issueDetail, setIssueDetail] = useState('I encountered an issue with...');
  const [device, setDevice] = useState('');
  const [browser, setBrowser] = useState('');
  const [operatingSystem, setOperatingSystem] = useState('');

  // Detect system theme and information automatically
  useEffect(() => {
    // Detect system theme (dark/light mode)
    const detectTheme = () => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkThemeMq.matches);

      // Listen for theme changes
      darkThemeMq.addEventListener('change', e => {
        setIsDarkMode(e.matches);
      });
    };

    // Detect browser
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf("Chrome") > -1) return "Chrome";
      else if (userAgent.indexOf("Safari") > -1) return "Safari";
      else if (userAgent.indexOf("Firefox") > -1) return "Firefox";
      else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) return "Internet Explorer";
      else if (userAgent.indexOf("Edge") > -1) return "Microsoft Edge";
      return "Unknown";
    };
    
    // Detect operating system
    const detectOS = () => {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf("Win") > -1) return "Windows";
      else if (userAgent.indexOf("Mac") > -1) return "MacOS";
      else if (userAgent.indexOf("Linux") > -1) return "Linux";
      else if (userAgent.indexOf("Android") > -1) return "Android";
      else if (userAgent.indexOf("iOS") > -1 || userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1) return "iOS";
      return "Unknown";
    };
    
    // Detect device type
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) return "Tablet";
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) return "Mobile";
      return "Desktop";
    };
    
    // Run all detections
    detectTheme();
    setBrowser(detectBrowser());
    setOperatingSystem(detectOS());
    setDevice(detectDevice());
    
    // Clean up event listener when component unmounts
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', () => {});
    };
  }, []);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Updated data structure to match required JSON format
    const data = {
      site_key,
      priority: priority.toLowerCase(),
      bugArea,
      IssueDetail: issueDetail,
      Device: device,
      Browse: browser,
      OperatingSystem: operatingSystem
    };

    try {
      const response = await fetch('http://localhost:8000/api/issues/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Bug report submitted successfully!');
        setIsFormVisible(false);
        // Clear form but keep default values
        setPriority('High');
        setBugArea('Dashboard');
        setIssueDetail('I encountered an issue with...');
        setDevice('');
        setBrowser('');
        setOperatingSystem('');
      } else {
        alert('Failed to submit bug report.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting bug report.');
    }
  };

  // Define theme-based classes
  const formBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const headerBgColor = isDarkMode 
    ? 'bg-gradient-to-r from-blue-900 to-blue-700' 
    : 'bg-gradient-to-r from-blue-700 to-blue-500';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-700';
  const inputBgColor = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300';
  const inputTextColor = isDarkMode ? 'text-white' : 'text-gray-700';
  const buttonGradient = isDarkMode 
    ? 'from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700' 
    : 'from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600';

  return (
    <>
      {/* Floating form that appears/disappears based on state */}
      {isFormVisible && (
        <div className={`fixed bottom-24 right-8 z-50 w-full max-w-md ${formBgColor} border border-gray-200 rounded-2xl shadow-2xl animate-fade-in`}>
          <div className={`flex justify-between items-center ${headerBgColor} text-white py-4 px-6 rounded-t-2xl`}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <IconBug size={26} /> Report a Bug
            </h2>
            <button 
              onClick={toggleForm}
              className="hover:bg-blue-800 rounded-full p-1 transition"
              aria-label="Close"
            >
              <IconX size={26} />
            </button>
          </div>
          <form className="p-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-1`}>Bug Area <span className="text-red-500">*</span></label>
              <input
                type="text"
                className={`w-full p-2 border ${inputBgColor} ${inputTextColor} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition`}
                placeholder="e.g. Dashboard, Login Page"
                value={bugArea}
                onChange={(e) => setBugArea(e.target.value)}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-1`}>Priority <span className="text-red-500">*</span></label>
              <select 
                className={`w-full p-2 border ${inputBgColor} ${inputTextColor} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition`}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
              >
                <option value="High" className="text-red-600">High</option>
                <option value="Medium" className="text-yellow-600">Medium</option>
                <option value="Low" className="text-green-600">Low</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-1`}>Issue Detail <span className="text-red-500">*</span></label>
              <textarea
                className={`w-full p-2 border ${inputBgColor} ${inputTextColor} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition h-24 resize-none`}
                placeholder="Describe the bug in detail..."
                value={issueDetail}
                onChange={(e) => setIssueDetail(e.target.value)}
                required
                onClick={(e) => {
                  // Clear default text when first clicked
                  if (issueDetail === 'I encountered an issue with...') {
                    setIssueDetail('');
                  }
                }}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-1 flex items-center gap-2`}>
                <IconDeviceLaptop size={18} /> Device 
                <span className="ml-auto text-xs text-gray-500">(Auto-detected: {device})</span>
              </label>
              <select 
                className={`w-full p-2 border ${inputBgColor} ${inputTextColor} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition`}
                value={device}
                onChange={(e) => setDevice(e.target.value)}
              >
                <option value="">Select Option</option>
                <option>Desktop</option>
                <option>Tablet</option>
                <option>Mobile</option>
                <option>Laptop</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-1 flex items-center gap-2`}>
                <IconBrandChrome size={18} /> Browser
                <span className="ml-auto text-xs text-gray-500">(Auto-detected: {browser})</span>
              </label>
              <select 
                className={`w-full p-2 border ${inputBgColor} ${inputTextColor} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition`}
                value={browser}
                onChange={(e) => setBrowser(e.target.value)}
              >
                <option value="">Select Option</option>
                <option>Chrome</option>
                <option>Firefox</option>
                <option>Microsoft Edge</option>
                <option>Safari</option>
                <option>Internet Explorer</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-1 flex items-center gap-2`}>
                <IconDeviceDesktop size={18} /> Operating System
                <span className="ml-auto text-xs text-gray-500">(Auto-detected: {operatingSystem})</span>
              </label>
              <select 
                className={`w-full p-2 border ${inputBgColor} ${inputTextColor} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition`}
                value={operatingSystem}
                onChange={(e) => setOperatingSystem(e.target.value)}
              >
                <option value="">Select Option</option>
                <option>Windows</option>
                <option>MacOS</option>
                <option>Linux</option>
                <option>iOS</option>
                <option>Android</option>
              </select>
            </div>
            <div className="pt-2 flex justify-center">
              <button 
                type="submit"
                className={`bg-gradient-to-r ${buttonGradient} text-white px-8 py-2 rounded-lg shadow flex items-center gap-2 font-semibold transition`}
              >
                <IconSend size={20} /> Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={toggleForm}
        className={`fixed bottom-8 right-8 bg-gradient-to-r ${buttonGradient} text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl transition z-50`}
        aria-label={isFormVisible ? "Hide bug report form" : "Show bug report form"}
      >
        {isFormVisible ? <IconChevronDown size={32} /> : <IconAlertCircle size={32} />}
      </button>
      {/* Optional: fade-in animation */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.25s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </>
  );
};

export default App;
