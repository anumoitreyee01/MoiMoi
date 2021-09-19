import React from 'react';
import Container from '@material-ui/core/Container';
import MenuAppBar from '../Components/AppBarWithMenu';
import first from './../Assets/first.jpeg';
import FullWidthTabs from '../Components/FullWidthTab';
import SwipeableTextMobileStepper from '../Components/Stepper';


import MediaCard from '../Components/AirtelPrepaidCard';
import MediaCard1 from '../Components/AirtelPostPaidCard';

import OutlinedCard from '../Components/OutlineCard';


import TextButtons from '../Components/BackToTopTextButton';
import SvgIconsSize from '../Components/ArrowIcon';
import IconLabelButtons from '../Components/LogoIconandLabel';






export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
         <img src={first}  alt="first" />
        <MenuAppBar/>
        
        <IconLabelButtons/>
        <OutlinedCard/>
        <FullWidthTabs/>
        <SwipeableTextMobileStepper/>
        <MediaCard/>
        <MediaCard1/>
        <MediaCard/>
        
        <OutlinedCard/>
        <SwipeableTextMobileStepper/>
        <MediaCard/>
        <TextButtons/>
        <SvgIconsSize/>
        

        
        
        </Container>
    </React.Fragment>
  );
}