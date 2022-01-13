import React from "react";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/solid";

export default function MyForm(props) {
  return (
    <div className="relative w-96">
      <div className="relative mt-8">
        <form className="bg-white shadow-md rounded-md px-8 pt-8 pb-8 mt-4 mb-4 relative">
          <Link href="/">
            <XCircleIcon
              className="h-9 w-9 mb-4 text-blue-700 absolute right-2 top-2"
              cursor="pointer"
            />
          </Link>

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
