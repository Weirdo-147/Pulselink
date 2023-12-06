import React from "react";
import { MessageBox } from "react-chat-elements";

const Messege=()=>{
    return (
        <div className="rounded-xl">
            <MessageBox position="left" type="text" replyButton={true} date={new Date()} text="Hi there !!!!!!!!"/>
        </div>
    )
}
export default Messege;