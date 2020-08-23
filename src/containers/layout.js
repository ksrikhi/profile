import React from 'react';
import Profile from './profile';
import Skills from './skills';
import data from '../data/data.json';
import Experience from './experience';
import Education from './education';
import  Project from './projects'

const Layout = () => {
    return (
        <>
          <Profile data={data.profile} />
          <Skills data={data.skills} />
          <Experience data={data.experience} />  
          <Education data={data.education} />
          < Project  data={data.project}/> 
        </>
    );
};
 
export default Layout;