import React from 'react';
import { Helmet } from "react-helmet";
import Profile from './profile';
import Skills from './skills';
import data from '../data/data.json';
import Experience from './experience';
import Education from './education';
import Project from './projects'

const Layout = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content={data.metaDetails.description}></meta>
        <meta name="keywords" content={data.metaDetails.keywords}></meta>
        <meta name="author" content={data.metaDetails.author}></meta>
        <link rel="fluid-icon" href={data.metaDetails.icon} title="GitHub" />
        <meta name="twitter:image:src" content={data.metaDetails.icon} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={data.metaDetails.title} />
        <meta name="twitter:description" content={data.metaDetails.description} />
        <meta property="og:image" content={data.metaDetails.icon} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={data.metaDetails.title} />
        <meta property="og:url" content={data.metaDetails.url} />
        <meta property="og:description" content={data.metaDetails.description} />
        <meta property="profile:username" content={data.metaDetails.profileUsername} />
      </Helmet>

      <Profile data={data.profile} />
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <Education data={data.education} />
      < Project data={data.project} />

    </>
  );
};

export default Layout;