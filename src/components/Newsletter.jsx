import newsletterFruits from "./../assets/img/vegetable-busket.png";

const Newsletter = () => {
  return (
    <div className="absolute  md:-top-40 -top-[350px] shadow-lg shadow-black/10 px-10 p-5 md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col items-center gap-5 rounded-2xl bg-[#FFF9F4]">
      <img className="max-h-60" src={newsletterFruits} alt="newsletterDog" />
      <div className="flex flex-col gap-3 md:text-left text-center">
        <h4 className="md:text-2xl text-xl font-medium">Get Awesome News!</h4>
        <p className="text-gray-700">
          Exclusive gift vouchers tips, offers, product deals and more.
        </p>
        <input
          className="px-2 py-2 font-medium rounded-md bg-white border-none text-black placeholder:text-gray-700"
          type="email"
          placeholder="Your email"
        />
        <div>
          <button className="px-6 py-1 rounded-lg text-lg font-medium border border-green-300 bg-green-300 hover:bg-black hover:text-white duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
