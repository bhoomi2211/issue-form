import React from 'react'

const App = () => {
  return (
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-xl font-semibold text-center bg-blue-900 text-white py-3 rounded-md">
        Report A Bug
      </h2>
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
          <label className="block text-gray-700">Device Used *</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select Option</option>
            <option>Dekstop</option>
            <option>Ios</option>
            <option>Android </option>
            <option>laptop</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Browser</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select Option</option>
            <option>Google Chrome</option>
            <option>Firebox</option>
            <option>Microsoft Edge</option>
            <option>Yahoo</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Operating System</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select Option</option>
            <option>Microsoft Window</option>
            <option>Linux</option>
            <option>Ios</option>
            <option>Android</option>
          </select>
        </div>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>

  )
}

export default App;
