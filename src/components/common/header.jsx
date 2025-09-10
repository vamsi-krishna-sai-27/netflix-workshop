import netflix from "../../../public/netflix-logo-netflix-logo-in-red-text-u62hu7Wm_t-removebg-preview.png"

export default function Header() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-3 py-1">
        <div className="w-40 ml-30">
          <img src={netflix} alt="netflix-logo" />
        </div>
        <div className="flex felx-row gap-2">
            <div className="text-white ">
            <select className=" text-white px-3 py-1 rounded  border p-4">
                <option>English</option>
                <option>Hindi</option>
            </select>
            
            </div >
            <div className="mr-40">
                <button className="bg-red-600 text-white px-4 py-1 font-bold rounded-sm ">Sign in</button>
            </div>
        </div>
      </div>
    </div>
  );
}