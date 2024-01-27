import React from 'react';
import IconSearch from "../searchIcon";
import SearchProfile from './SearchProfile';

const ChatSearch = () => {
  return (
    <div className='relative flex items-center'>
        <div className="relative py-2 mt-0 mb-1 w-full">
          <input className="px-10 opacity-90 w-full h-8 p-2 rounded-xl" type="search" id="searchid" placeholder="Search for Pulses" />
          <IconSearch className="absolute left-3 top-3 h-6 w-4 text-black opacity-50" />
          <div className="mt-2 border-b-2 border-gray-300 pb-1">
            <SearchProfile />
          </div>
        </div>
    </div>
  );
}

export default ChatSearch;