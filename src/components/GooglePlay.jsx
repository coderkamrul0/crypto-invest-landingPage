import { FaGooglePlay } from "react-icons/fa";
function GooglePlay() {
  return (
    <div className="bg-[#124D6D] text-white rounded-xl flex items-center gap-3 px-5 py-1 w-40">
      <FaGooglePlay/>
      <div>
        <p className="text-[10px]">GET IT ON</p>
        <p className="text-lg ">Google Play</p>
      </div>
    </div>
  );
}

export default GooglePlay;
