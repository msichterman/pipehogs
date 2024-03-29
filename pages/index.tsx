import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout showMailingList>
      <section className="text-gray-700 my-12">
        <div className="container flex flex-col-reverse items-center mx-auto md:flex-row">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="block md:hidden lg:block mb-3 text-xs font-semibold tracking-widest text-gray-900 uppercase title-font pt-0 md:pt-4">
              {' '}
              You know The Pipeline. You've seen the hogs. We are...{' '}
            </h2>
            <h1 className="mb-6 uppercase tracking-wider text-3xl font-black text-gray-900 lg:text-5xl title-font pt-0 md:pt-6 lg:pt-0">
              {' '}
              THE PIPEHOGS{' '}
            </h1>
            <p className="mb-8 text-base leading-relaxed tracking-tight font-light text-left text-gray-600 ">
              {' '}
              Dominant athletes, dedicated scholars, and passionate foodies.{' '}
            </p>
            <div className="flex flex-col justify-center items-center lg:flex-row w-full">
              <div className="inline-flex rounded-md shadow w-full">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md text-white bg-red-600 hover:bg-red-700 w-full uppercase tracking-wide text-sm font-bold">
                    Become a Partner
                  </a>
                </Link>
              </div>
              <p className="text-center mt-2 text-sm text-gray-600 lg:ml-6 md:mt-0 w-full py-4 lg:py-0 tracking-tight font-light">
                {' '}
                Who are these guys? <br className="hidden lg:block" />
                <Link href="/meet">
                  <a
                    className="inline-flex items-center text-red-600 md:mb-2 lg:mb-0 hover:text-red-700 uppercase tracking-wide text-xs font-bold"
                    title="read more"
                  >
                    {' '}
                    Meet the Hogs »{' '}
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center w-full mb-8 md:mb-0 md:w-1/2">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              loading="lazy"
              src="/hogs.jpeg"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
