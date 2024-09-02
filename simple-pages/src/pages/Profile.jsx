import jessica from "../assets/jessica.jpeg"

function SimpleProfile() {
  return (
    <div className=" bg-black h-screen w-full flex items-center">
      <div className="flex justify-center items-center w-[350px] h-[550px] bg-zinc-900 rounded-xl mx-auto pt-8 pb-5 flex-col">      
          <div className='flex-1'>
            <img
              className="rounded-full aspect-square w-[72px] h-[72px]" src={jessica} alt="jessica"/>
          </div>

          <div className=" flex-1 text-[25px] text-white font-semibold mt-2 mb-1">
            Jessica Randall
          </div>

          <div className="flex-1 text-[14px] text-lime-400 font-semibold mb-6">
            London, United Kingdom
          </div>

          <div className="flex-1 text-[14px] text-white mb-5">
            &quot;Frontend developer and avid reader.&quot;
          </div>

          <button className="flex-1 text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            GitHub
          </button>

          <button className="flex-1 text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            Frontend Mentor
          </button>

          <button className="flex-1 text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            LinkedIn
          </button>

          <button className="flex-1 text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            Twitter
          </button>

          <button className="flex-1 text-white text-[14px] font-bold w-[273px] py-3 rounded-lg bg-zinc-800 mb-4">
            Instagram
          </button>
        
      </div>
    </div>
  );
}

export default SimpleProfile
