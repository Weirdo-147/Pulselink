import React from "react";
import Navbar from "./Navbar";
import backGroundVideo from "./img/cherry blossom. [lofi jazzhop chill mix] (online-video-cutter.com).mp4"
import Searchbar from "./Searchbar";
import Fortune from "./Fortune";
import UserDetails from "./UserDetails";

const Home = () => {

  return (
    <div className="relative text-center font-custom  bg-cherry-blossom bg-cover bg-no-repeat bg-center " style={{  height: "100vh" }}>
        <video id="video" loop autoPlay muted style={{zIndex:-1}}><source src={backGroundVideo} type="video/mp4" ></source></video>
      
      <Navbar />
        <UserDetails/>
        <Searchbar/>
        <Fortune/>
    </div>
  );
};

export default Home;
