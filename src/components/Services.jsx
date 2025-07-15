import imgService from "./../assets/img/service.png";
import imgDelivery from "./../assets/img/delivery.png";
import imgHealthy from "./../assets/img/healthy.png";

const Services = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex flex-col gap-5">
      <h2 className="md:text-3xl text-2xl font-semibold text-green-700">
        Services
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
        <div className="w-full col-span-1 p-5 rounded-lg shadow-lg bg-[#EFEBE3] text-center flex flex-col items-center gap-1">
          <img
            className="max-h-24 h-full mx-auto"
            src={imgService}
            alt="imgService"
          />
          <h3 className="text-xl font-semibold">24/7 Service</h3>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quae unde explicabo iusto illo tempore!
          </p>
        </div>
        <div className="w-full col-span-1 p-5 rounded-lg shadow-lg bg-[#EFEBE3] text-center flex flex-col items-center gap-1">
          <img
            className="max-h-24 h-full mx-auto"
            src={imgDelivery}
            alt="imgDelivery"
          />
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quae unde explicabo iusto illo tempore!
          </p>
        </div>
        <div className="md:w-full sm:w-1/2 w-full mx-auto md:col-span-1 sm:col-span-2 col-span-1 p-5 rounded-lg shadow-lg bg-[#EFEBE3] text-center flex flex-col items-center gap-1">
          <img
            className="max-h-24 h-full mx-auto"
            src={imgHealthy}
            alt="imgHealthy"
          />
          <h3 className="text-xl font-semibold">Healthy Products</h3>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quae unde explicabo iusto illo tempore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
