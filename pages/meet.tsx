import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout showMailingList>
      <>
        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/cam.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Cam is majoring in nutrition and health sciences. When he is not
                dominating on the field he is probably herding cattle or running
                his personal brand, Beef Jurgy. You can see more and support Cam
                at{' '}
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://beefjurgy.com"
                  target="_blank"
                >
                  beefjurgy.com
                </a>
                . Cam is the most experienced player on the pipeline.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Cam Jurgens{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #51 – Center{'  |  '}Pickrell, NE{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/CameronJurgens"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/beef_jurgy/"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/matt.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Matt is a graduate student and got his bachelors degree in
                Software Engineering. When he is not working out on the field or
                in the weight room, he is working hard to better himself as a
                software engineer and entrepreneur. In fact, Matt created this
                website! See more of his work at{' '}
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://msich.dev"
                  target="_blank"
                >
                  msich.dev
                </a>
                .{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Matt Sichterman{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #70 – Right Guard{'  |  '}Cincinnati, OH{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/mattsichterman"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/mattsichterman"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.linkedin.com/in/msichterman/"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/bryce.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Bryce is majoring in criminology and criminal justice. During
                his off time he enjoys playing video games with his teammates
                and tracking down the best French dip sandwich in town.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Bryce Benhart{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #54 – Right Tackle{'  |  '}Lakeville, MN{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/BenhartBryce"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/brycebenhart"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/ethan.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Ethan is majoring in science education. Ethan is one of the
                friendliest players on the team. If you need help with
                something, Ethan is your guy.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Ethan Piper{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #57 – Left Guard{'  |  '}Norfolk, NE{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/epipe71"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/Epipe71"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.linkedin.com/in/ethan-piper-4619a91b2/"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/turner.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Turner is a criminology and criminal justice major. He is a tier
                one fan of the Bussin' with the Boys. The pride in the number
                that he wears is everything that you need to know about Turner's
                personality.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Turner Corcoran{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #69 – Left Tackle{'  |  '}Lawrence, KS{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/turnercorcoran"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/turner69corcoran"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/broc.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Broc earned his degree in Business Administration in December of
                2020 and has started working on a certificate of Business
                Analytics. He enjoys fishing and grilling when he is not
                grinding on the gridiron.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Broc Bando{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #73 – Guard{'  |  '}Lincoln, NE{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/73broccoli"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/73broccoli"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.linkedin.com/in/broc-bando-4436b4164/"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/brant.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Brant is a Business Management major. He is a Mexican food
                connoisseur due to his Texan roots. He also loves boats and the
                outdoors.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Brant Banks{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #74 – Tackle{'  |  '}Houston, TX{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/brantbanks"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.instagram.com/brantbanks"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="text-gray-700 ">
          <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/trent.jpeg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <p className="mb-12 text-base font-medium leading-relaxed text-gray-700 ">
                {' '}
                Trent earned his bachelor's degree in accounting in May of 2021.
                Trent is the epitome of homegrown, as he started his journey as
                a walk-on before earning a scholarship.{' '}
              </p>
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {' '}
                Trent Hixson{' '}
                <span className="font-semibold text-gray-600 lg:mb-0">
                  – #75 – Center{'  |  '}Omaha, NE{' '}
                </span>
              </h2>
              <span className="inline-flex justify-start sm:mt-0">
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://twitter.com/trenthixson"
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
                <a
                  className="ml-3 text-red-600 hover:text-black"
                  target="_blank"
                  href="https://www.linkedin.com/in/trenthixson/"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}
