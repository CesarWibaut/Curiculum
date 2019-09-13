import React from 'react';

import SideBar from './SideBar';
import Body from './Body';

const Main = () => {
    return  <div className='main'>
                <Body />
                <SideBar />
            </div>
}

export default Main;