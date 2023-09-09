import Profile from "../../assets/profile1.jpg";

const CommentCarouselItem = () => {
  return (
    <div className="max-w-[320px]">
      <div className="mb-4 text-center opacity-90">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src={Profile}
            className="mx-auto object-cover rounded-full h-40 w-40 "
          />
        </a>
      </div>
      <div className="text-center">
        <p className="text-gray-600 dark:text-white">
          <span className="text-lg font-bold text-indigo-500">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span className="text-lg font-bold text-indigo-500">”</span>
        </p>
        <span className="text-sm font-semibold text-indigo-500">
          Jean Miguel
        </span>
      </div>
    </div>
  );
};

export default CommentCarouselItem;
