import Link from 'next/link'

export default function Footer() {
  return (
    <div className="items-center">
      <footer className="text-red-600 transition duration-500 ease-in-out transform bg-white">
        <div className="flex flex-col flex-wrap justify-center p-5 md:flex-row">
          <nav className="flex flex-wrap items-center justify-center w-full mx-auto mb-6 text-base space-x-2">
            <Link href="/about">
              <a className="text-red-600 hover:bg-black hover:text-white px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-red-600 hover:bg-black hover:text-white px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                Contact
              </a>
            </Link>
          </nav>
          <span className="inline-flex justify-center w-full mx-auto mt-2 sm:mt-0">
            <a
              className="text-red-600 hover:text-gray-900"
              target="_blank"
              href="https://twitter.com/pipehogs"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            {/* <a
              className="ml-4 text-red-600 hover:text-gray-900"
              target="_blank"
              href="https://www.instagram.com/athunfiltered/"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a> */}
          </span>
        </div>
        <div className="flex align-center w-full px-8 py-6 mt-4 bg-black">
          <p className="mx-auto text-center text-white uppercase tracking-wide text-sm">
            {' '}
            <span className="font-bold">Pipehogs</span> © 2021{' '}
          </p>
        </div>
      </footer>
    </div>
  )
}
