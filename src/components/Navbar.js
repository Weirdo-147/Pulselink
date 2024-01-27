import React ,{useState} from "react";


const Navbar = () => {
    const [activeItem , setActiveItem]=useState(null);
    const handleItemClick=(index)=>{
        setActiveItem(index);
    };
  return (
    <div>
        <div className="bg-[#E4C5FB] bg-opacity-70 center rounded-full absolute top-0 left-0 right-0 mt-0 mb-8" style={{zIndex:1}}>
        <div className="py-4 px-6 text-sm font-medium">
            <ul className="flex justify-center space-x-3">
                <li className={` text-3xl font-medium block px-3 py-2 cursor-pointer rounded-md ${activeItem===null ? 'bg-[#6fcca1] text-white' : 'bg-slate-300'}`} onClick={()=>handleItemClick(null)}>
                    <h1>Home</h1>
                </li>
            </ul>
        </div>
        <div>
      <ul className="flex justify-center space-x-10">
        <li className={` text-3xl font-medium block px-3 py-2 rounded-md cursor-pointer ${activeItem===0 ?'bg-[#6fcca1] text-white' : 'bg-slate-300'}`} onClick={()=>handleItemClick(0)}>Chats</li>
        <li className={` text-3xl font-medium block px-3 py-2 rounded-md cursor-pointer ${activeItem===1 ?'bg-[#6fcca1] text-white' : 'bg-slate-300'}`} onClick={()=>handleItemClick(1)}>Channels</li>
        <li className={` text-3xl font-medium block px-3 py-2 rounded-md cursor-pointer ${activeItem===2 ?'bg-[#6fcca1] text-white' : 'bg-slate-300'}`} onClick={()=>handleItemClick(2)}>Events</li>
      </ul>
      </div><br></br></div>
      <div className="mt-4 absolute top-8 right-4 cursor-pointer" style={{zIndex:2}}>
                    <img
                        src="https://www.html.am/images/html-codes/links/boracay-resort-1000x750.jpg"
                        style={{ height: 50, width: 50, borderRadius: "50%" }}
                    />
        
      </div>
      
    </div>
  );
};

export default Navbar;
