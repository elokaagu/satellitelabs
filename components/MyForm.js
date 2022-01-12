import React from "react";

export default function MyForm(props) {
  return (
    <div className="relative w-96">
      <div className="relative mt-8">
        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mt-4 mb-4  relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mb-4 flex justify-end"
            viewBox="0 0 20 20"
            fill="none"
            stroke="black"
            cursor="pointer"
          >
            <path
              fill="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip="evenodd"
            />
          </svg>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="fullname"
            >
              Full name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="e.g. hey@satellitelabs.xyz"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="Message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border border-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="message"
              rows={5}
              placeholder="we'd love to hear from you..."
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-700 hover:bg-blue-900 text-base font-medium hover:text-opacity-100 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
