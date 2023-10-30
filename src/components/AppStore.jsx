import { BsApple } from "react-icons/bs";
function AppStore() {
  return (
    <div className="bg-[#00D094] text-black rounded-xl flex items-center gap-3 px-5 py-1 w-40">
      <BsApple/>
      <div>
        <p className="text-[10px]">Download on the</p>
        <p className="text-lg ">App Store</p>
      </div>
    </div>
  );
}

export default AppStore;
