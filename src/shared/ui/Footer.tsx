import React from "react";

export function Footer() {
    return (
        <footer>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-700">
                <div className="w-735 h-full">
                    <img className="w-full h-full" src="./src/image/bannerphu.png" alt="Image" />
                </div>
                <div className="w-705 h-full bg-grayebe">
                    <div className="px-4 py-4 mt-14 ml-20 mb-2">
                        <h1 className="font-heading text-blue456 text-3xl md:text-4xl lg:text-5xl">About Travel Buddy</h1>
                    </div>
                    <div className="text-sm md:text-base lg:text-lg ml-20 px-4 py-4">
                        <p>Travel Buddy is a young and dynamic DMC in Vietnam founded</p>
                        <p>in September 2023, primarily operating in international and</p>
                        <p>domestic travel and tourism services.</p>
                        <p><br /></p>
                        <p>We possess a young, sensitive workforce with current trends</p>
                        <p>and high expertise, so we are poised to offer more engaging</p>
                        <p>and fulfilling travel experiences than ever.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4 ml-20 px-4 py-4 mt-2 text-lg md:text-2xl lg:text-4xl">
                        <div>
                            <h2 className="font-bold text-blue344">25+</h2>
                            <span className="text-16">Destinations</span>
                        </div>
                        <div>
                            <h2 className="font-bold text-blue344">2500+</h2>
                            <span className="text-16">Tourist per year</span>
                        </div>
                        <div>
                            <h2 className="font-bold text-blue344">120+</h2>
                            <span className="text-16">Partners</span>
                        </div>
                    </div>
                    <div className="mt-6 ml-20 px-4 py-4">
                        <button className="flex items-center bg-blue33 hover:bg-blue-500 transition-colors text-white px-8 md:px-12 lg:px-16 py-2 md:py-4 lg:py-4 rounded-lg">
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="w-full h-933 px-24 py-24 mt-24 font-heading">
                <p className="text-gray8484 flex space-x-2 text-lg">
                    <span>BEST SELLER TOURS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" /></svg>
                </p>

                <h1 className="text-blue33 text-5xl mt-8">Find your place on the coast, in the <br />mountain or in the city</h1>

                <div className="grid grid-cols-4 gap-x-4 mt-12 text-black-500 font-heading">
                    <div className="w-full h-full">
                        <img src="./src/image/paris.png" alt="paris" />
                        <ul className="mt-4">
                            <li className="font-bold text-xl">Paris Tour</li>
                            <li className="mt-2">1 weeks</li>
                            <li className="mt-2">Quoc Gia Phap Thu Do Paris</li>
                            <li className="mt-2">$100</li>
                            <li className="mt-2">$40/pax</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </footer>
    );
}
