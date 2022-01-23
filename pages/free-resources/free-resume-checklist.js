import React from 'react';
import { NextSeo } from 'next-seo'
import DownloadHero from '../../components/DownloadHero';

const resumeChecklist = () => {
  return (
    <div>
        <NextSeo
        title='Free checklist for writing an effective resume - ETV | Employ The Vets'
        description='Get this free checklist for writing an effective resume!'
      />
        <DownloadHero topText='Having trouble converting or translating military experience to civilian resume?' bottomText='Get this free checklist for writing an effective resume!' btnText='Get Free Download' type='resume'/>
    </div>
  )
};

export default resumeChecklist;