import React from 'react'

const Card = () => {
  return (
      <div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md max-w-sm">
              <img className="w-full mb-4" src="https://i.ibb.co/pJSWKz4/marco-chilese-f5-Khg-GV8vb-I-unsplash.jpg" alt="Flex" />
              <div className="">
                  <h2 className="text-lg font-bold mb-2">FLEX</h2>
                  <p className="text-gray-700">
                      This is the shorthand for flex-grow, flex-shrink and flex-basis combined.
                      The second and third parameters (flex-shrink and flex-basis) are optional.
                      Default is 0 1 auto.
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                      Button
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Card