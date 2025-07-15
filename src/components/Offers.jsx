import daawat from "./../assets/img/dawat-logo.png";
import daawatP from "./../assets/img/dawat-mock-up.png";
import indiaGate from "./../assets/img/india-gate-logo.png";
import indiaGateP from "./../assets/img/india-gate-mock-up.png";

const Offers = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex flex-col gap-5">
      <h2 className="md:text-3xl text-2xl font-semibold">Arrival & Offers</h2>
      <div className="w-full grid sm:grid-cols-4 grid-cols-1 gap-5">
        <div className="flex items-center gap-1  sm:col-span-2 col-span-1 shadow-lg bg-green-800 p-3 rounded-lg justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <img className="max-w-32" src={daawat} alt="daawat" />
            <h4 className="text-xs font-medium px-2 py-2 text-white rounded-lg bg-green-500">
              Cook Exotic Dishes
            </h4>
            <p className="text-lg font-normal text-white">
              UP to <span className="font-bold">20% OFF</span>
            </p>
          </div>
          <img
            className="md:max-w-48 sm:max-w-40 max-w-32"
            src={daawatP}
            alt="daawatP"
          />
        </div>
        <div className="md:col-span-2 sm:col-span-2 col-span-1 p-3 rounded-lg shadow-lg bg-sky-800 flex items-center gap-2 justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <img className="max-w-32" src={indiaGate} alt="indiaGateP" />
            <h4 className="text-sm font-medium px-2 py-2 text-white rounded-lg bg-sky-500">
              World&apos;s No.1 Rice
            </h4>
            <p className="text-lg font-normal text-white">
              UP to <span className="font-bold">20% OFF</span>
            </p>
          </div>
          <img
            className="sm:max-w-28 max-w-20"
            src={indiaGateP}
            alt="indiaGate"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
