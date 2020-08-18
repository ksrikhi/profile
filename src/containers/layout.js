import React from 'react';
import Profile from './profile';
import Skills from './skills';
import data from '../data/data.json';

const Layout = () => {
    return (
        <>
          <Profile data={data.profile} />
          <Skills />
        </>
    );
};
 
export default Layout;