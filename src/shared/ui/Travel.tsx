import React from "react";

export function Travel() {
    return (
        <div className="w-full h-696">
            <div className="relative w-full h-696">
                <img src="./src/image/banner.png" alt="Example Image" className="w-full h-auto" />
                <div className="absolute bottom-20 md:bottom-40 lg:bottom-60 xl:bottom-60 text-white px-4 py-2 rounded">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-heading">A colorful <br /> experience with us</h1>
                </div>
                <div className="absolute bottom-6 md:bottom-16 lg:bottom-24 xl:bottom-24 text-white px-4 py-2 rounded">
                    <button className="bg-blue33 hover:bg-blue-500 transition-colors text-white px-6 md:px-8 lg:px-16 xl:px-16 py-2 md:py-4 lg:py-4 xl:py-4 flex items-center rounded-lg">Back now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className="absolute bottom-4 md:bottom-8 lg:bottom-10 xl:bottom-10 right-4 md:right-8 lg:right-12 xl:right-12 text-white px-0 md:px-2 lg:px-4 xl:px-4 py-0 md:py-0 lg:py-2 xl:py-2 rounded">
                    <ul>
                        <li className="flex justify-end mb-2">
                            <div>
                                <button className="flex items-center bg-green088 hover:bg-green-500 transition-colors px-4 md:px-8 lg:px-12 xl:px-14 py-2 md:py-2 lg:py-4 xl:py-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-5 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>
                                    Contact us
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className="mt-4">
                                <button className="flex items-center bg-blue336 hover:bg-blue-500 transition-colors px-4 md:px-8 lg:px-12 xl:px-14 py-2 md:py-2 lg:py-4 xl:py-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-5 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                    Promotional Tours
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
