import banner from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="w-full">
        <div className="relative hero w-full">
            <img className="w-full max-h-screen" src={banner} alt="img" />
            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-60 ">
                <div className="text-white space text-right pr-6">
                <h1 className="text-4xl font-extrabold mb-4 text-purple-400">SurveySphere Pro</h1>
                <p className="text-xl mb-6 text-purple-400">Empowering surveys and insights like never before!</p>
                <a href='/' className="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden font-bold text-purple-400 rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                            {/* <!-- Top glass gradient --> */}
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            {/* <!-- Bottom gradient --> */}
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            {/* <!-- Left gradient --> */}
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            {/* <!-- Right gradient --> */}
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative text-base">Explore More</span>
                        </a>
                
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;