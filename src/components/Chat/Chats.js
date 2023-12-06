import React from "react";
import { Input, MessageBox } from "react-chat-elements";
import { ChatEngine } from "react-chat-engine";

const Chats=()=>{
    return (
        <div className=" grid grid-cols-3 bg-black">
            <div className="col-span-1 h-screen bg-[#d97a7a] rounded-xl relative">
                <Input placeholder="Send some vibration over the Pulse..." multiline={true}  type="text" className="w-full h-5 max-h-20 resizze-none absolute bottom-0 left-0 right-0 p-1"></Input>
            </div>
            
            <div className="col-span-2 bg-[#2f8a76] rounded-xl">
            <ChatEngine
			projectID='a16dd649-5c67-46b7-8a43-3db7dd54c804'
			userName='PulseL'
			userSecret='Dheeraj@144'
            className="max-h-fit"
		/>
            </div>
        </div>
    )
}
export default Chats;