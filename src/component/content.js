import React from 'react';
import Button from './btn';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

// import { makeStyles } from '@material-ui/core/styles';
import './content.css';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';




export default function SingleLineGridList() {
  return (
    <div className='container'>
      <Grid container spacing={3}>

        <Grid item xs={6}>

          <h1 className='text'> I am Kanchan Sharma</h1>
          <p className='p'>I am a Web Developer located in Hartford, Connecticut. I currently work as a part time Remote Junior Web Developer for Coolor, located in Las Vegas. I am looking to take on more work and to increase my skills as a Web Developer.</p>

          <div className='aboutme'>
            <p>
              <span className='info'>Phone</span>
              <span>+1 437-237-7378</span>
            </p>
            <p>
              <span className='info'>Email</span>
              <span>ksrikhi123@gmail.com</span>
            </p>
            <p>
              <span className='info'>Address</span>
              <span>45 Barton ville,york,CA M6E2B2</span>
            </p>
            <p >
              <span className='info'>Social</span>
              <span> <Icon className='icon'>facebook</Icon>
                <Icon className='icon'>EmailIcon</Icon>
                <Icon className='icon'>LinkedInIcon</Icon></span>
            </p>

          </div>

        </Grid>
        <Grid item xs={4}>
          <image src="./assest/profile.jpg" className="image" alt="img" />
        </Grid>
        <Button></Button>
      </Grid>

    </div>
  );
}
