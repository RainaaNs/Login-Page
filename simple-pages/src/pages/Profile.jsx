import jessica from "../assets/jessica.jpeg"

function SimpleProfile() {
  return (
    <div className="absolute bg-slate-400 h-screen w-full">
      <div className="grid grid-cols-1 max-w-[360px] bg-stone-900 rounded-xl mx-auto ">
        {" "}
        <div className="flex flex-col items-center pt-8 pb-5">
          <div>
            <img
              className="rounded-full aspect-square w-[72px] h-[72px]"
              src={jessica}
              alt="jessica"
            />
          </div>
          <div className="text-[25px] text-white font-semibold mt-2 mb-1">
            Jessica Randall
          </div>
          <div className="text-[14px] text-lime-400 font-semibold mb-6">
            London, United Kingdom
          </div>
          <div className="text-[14px] text-white mb-5">
          &quot;Frontend developer and avid reader.&quot;
          </div>

          {/*The following are buttons*/}
          <button className="text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            GitHub
          </button>
          <button className="text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            Frontend Mentor
          </button>
          <button className="text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-neutral-900 mb-4">
            LinkedIn
          </button>
          <button className="text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            Twitter
          </button>
          <button className="text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleProfile
