import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Import the FiCheckCircle icon from react-icons/fi
import Box from './_components/box';

const HomePage = async () => {
  return (
    <section>
      <Box>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-800'>
            Member Zone
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
            SignIn & SignUp to receive our daily content!
          </p>
          <div className="p-4 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Join Now</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$8</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>Daily Updates
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>New Repeats
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>Feedback Welcome
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>Cancel Anytime
              </p>
              <button className="flex items-center text-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
              SignIn
              </button>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
}

export default HomePage;
