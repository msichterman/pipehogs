import { useState } from 'react'
import Layout from '../components/Layout'

export default function contact() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(value)
    setForm({ ...form, [name]: value })
  }

  return (
    <Layout showMailingList>
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="uppercase tracking-wide text-3xl lg:text-5xl font-extrabold block my-12">
          Become a Pipehogs Partner
        </h1>
        <form className="w-full max-w-lg mb-12">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name*
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-gray-500 focus:border-gray-500"
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name*
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-gray-500 focus:border-gray-500"
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-gray-500 focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
              <p className="text-gray-600 text-xs italic">
                Feel free to{' '}
                <a
                  href="https://twitter.com/messages/compose?recipient_id=1412458934061912072&text=Hey+there%21%F0%9F%91%8B%F0%9F%8F%BB+We+are+excited+to+work+with+you.+Can+you+tell+us+more+about+your+business%3F+%F0%9F%98%81%0D%0A%0D%0A..."
                  className="text-blue-500 hover:text-blue-700"
                  data-screen-name="@pipehogs"
                >
                  DM us on Twitter @pipehogs
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="company"
              >
                Company / Business*
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-gray-500 focus:border-gray-500"
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message*
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-gray-500 focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => handleChange(e)}
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                Want to feed the hogs? Become a Wednesday night offensive line
                dinner sponsor!
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => console.log(form)}
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </Layout>
  )
}
