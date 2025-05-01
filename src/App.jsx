import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6 font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out z-50"
      >
        Report Bug 🐞
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="relative bg-white/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-2xl border border-white/20 h-[80vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 shadow-md transition"
            >
              ✖
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-500 py-3 px-6 rounded-xl shadow-inner tracking-wide">
              🐞 Report a Bug
            </h2>

            {/* Form */}
            <form className="mt-6 space-y-4 text-sm overflow-y-auto max-h-[calc(80vh-100px)] pr-2">
              <div>
                <label className="block text-gray-800 font-medium mb-1">Where was this bug found?</label>
                <input
                  type="text"
                  className="w-full p-2 bg-white/70 backdrop-blur border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-purple-400 outline-none text-sm"
                  placeholder="e.g., Dashboard > Profile"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-1">Priority *</label>
                <div className="flex justify-between text-gray-700">
                  {['High', 'Medium', 'Low'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="priority" className="accent-purple-600" />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-1">Details</label>
                <textarea
                  className="w-full p-2 bg-white/70 backdrop-blur border border-gray-300 rounded-lg shadow-inner h-20 resize-none focus:ring-2 focus:ring-purple-400 outline-none text-sm"
                  placeholder="Describe what happened and how to reproduce it..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 font-medium mb-1">Device Used *</label>
                  <select className="w-full p-2 bg-white/70 backdrop-blur border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-purple-400 outline-none text-sm">
                    <option>Select Option</option>
                    <option>Desktop</option>
                    <option>iOS</option>
                    <option>Android</option>
                    <option>Laptop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-1">Browser</label>
                  <select className="w-full p-2 bg-white/70 backdrop-blur border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-purple-400 outline-none text-sm">
                    <option>Select Option</option>
                    <option>Google Chrome</option>
                    <option>Firefox</option>
                    <option>Microsoft Edge</option>
                    <option>Safari</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-800 font-medium mb-1">Operating System</label>
                  <select className="w-full p-2 bg-white/70 backdrop-blur border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-purple-400 outline-none text-sm">
                    <option>Select Option</option>
                    <option>Windows</option>
                    <option>Linux</option>
                    <option>iOS</option>
                    <option>Android</option>
                  </select>
                </div>
              </div>

              <div className="text-center pt-2">
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-1 rounded-full shadow-md hover:scale-105 transition-transform duration-300 ease-in-out text-sm">
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