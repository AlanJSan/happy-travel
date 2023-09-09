const Socials = () => {
    return (
        <div className="flex gap-5">
          <button
            id="facebook"
            className="bg-white duration-500 border-2 border-blue-600 w-9 transform hover:-translate-y-3   h-9 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 "
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            id="instagram"
            className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-9 h-9  transform hover:-translate-y-3 rounded-full duration-500 "
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            id="twitter"
            className="bg-white  transform hover:-translate-y-3  border-2 w-9 h-9 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            id="youtube"
            className="bg-white transform hover:-translate-y-3  border-2 w-9 h-9 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
          >
            <i className="fab fa-youtube"></i>
          </button>
        </div>
    );
}

export default Socials;