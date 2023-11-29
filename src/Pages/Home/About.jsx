import React from 'react';

const About = () => {
  return (
    <div className="overflow-y-auto">
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-blue-950 text-primary-content font-black grid place-content-center">
            <div className="bg-gray-100 min-h-screen">
              <header className="bg-gray-800 text-white text-center py-8">
                <h1 className="text-3xl font-bold">Urban Nest House</h1>
                <p className="text-lg">Discover Your Perfect Home, Seamlessly</p>
              </header>
              <section className="max-w-screen-md mx-auto bg-gray-800 text-white rounded-md p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">About Urban Nest House</h2>
                <p className="text-gray-300 mb-4">
                  Urban Nest House is more than just a real estate platform; it's a community built on trust, transparency,
                  and a shared love for finding or selling the perfect home. Our mission is to make your real estate
                  experience seamless and enjoyable.
                </p>

                <p className="text-gray-300">
                  Whether you are a buyer looking for a dream home, a seller wanting to showcase your property, or an agent
                  seeking a platform that values professionalism, Urban Nest House is your partner in the real estate
                  journey.
                </p>
              </section>

              {/* Connect With Us Section */}
             
            </div>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">About UrbanNest Hub</div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default About;
