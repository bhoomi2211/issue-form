import React, { useState } from 'react'
import { 
  IconBug, 
  IconX, 
  IconDeviceLaptop, 
  IconBrandChrome, 
  IconDeviceDesktop,
  IconExclamationMark,
  IconMinusVertical,
  IconSend
} from '@tabler/icons-react';

const App = () => {
  // Add state to track whether the form is visible
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      {/* Floating form that appears/disappears based on state */}
      {isFormVisible && (
        <div className="fixed bottom-24 right-8 z-10 bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="flex justify-between items-center bg-blue-900 text-white py-3 px-4 rounded-md">
            <h2 className="text-xl font-semibold flex items-center">
              <IconBug className="mr-2" size={24} /> Report A Bug
            </h2>
            <button 
              onClick={toggleForm}
              className="text-white hover:text-gray-300"
            >
              <IconX size={24} />
            </button>
          </div>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700">Where was this bug found?</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Level of Priority *</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="priority" className="mr-2" /> High
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" className="mr-2" /> Medium
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" className="mr-2" /> Low
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Details</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded h-24"
                defaultValue={""}
              />
            </div>
            <div>
              <label className="block text-gray-700 flex items-center">
                <IconDeviceLaptop className="mr-2" /> Device Used *
              </label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Option</option>
                <option>Desktop</option>
                <option>iOS</option>
                <option>Android</option>
                <option>Laptop</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 flex items-center">
                <IconBrandChrome className="mr-2" /> Browser
              </label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Option</option>
                <option>Google Chrome</option>
                <option>Firefox</option>
                <option>Microsoft Edge</option>
                <option>Yahoo</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 flex items-center">
                <IconDeviceDesktop className="mr-2" /> Operating System
              </label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Option</option>
                <option>Microsoft Windows</option>
                <option>Linux</option>
                <option>iOS</option>
                <option>Android</option>
              </select>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center mx-auto"
              >
                <IconSend className="mr-2" size={20} /> Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={toggleForm}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
      >
        {isFormVisible ? <IconMinusVertical size={24} /> : <IconExclamationMark size={24} />}
      </button>
    </>
  )
}

export default App;
