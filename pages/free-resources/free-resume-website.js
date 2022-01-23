import React from 'react';
import { NextSeo } from 'next-seo'
import DownloadHero from '../../components/DownloadHero';

const resumeSite = () => {
  return (
    <div>
        <NextSeo
        title='Free CV/ Resume Website - ETV | Employ The Vets (V.E.T.S - Veterans Equally Trying to Survive)'
        description='Get this online resume template free download and stop using all of the free resume making websites!'
      />
        <DownloadHero topText='Would you like a FREE resume website?' bottomText='Get this online resume template free download so you can leave all the free resume making websites behind and build your own free resume website today!' btnText='Get Free Download' type='resume-site'/>
    </div>
  )
};

export default resumeSite;
