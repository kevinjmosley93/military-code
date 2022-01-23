import React from 'react';
import { NextSeo } from 'next-seo'
import DownloadHero from '../../components/DownloadHero';

const linkedInChecklist = () => {
  return (
    <div>
        <NextSeo
        title='Free LinkedIn Profile Checklist - ETV | Employ The Vets (V.E.T.S - Veterans Equally Trying to Survive)'
        description='Linkedin is a social media platform and a social networking site with millions of users.'
      />
        <DownloadHero topText='Would you like a FREE LinkedIn checklist?' bottomText='Linkedin is a social media platform and a social networking site with millions of users. Get this free linkedin checklist that will give you some tips on how to create a winning linkedIn profile that could help you start getting more job interviews!' btnText='Get Free Download' type='linkedIn'/>
    </div>
  )
};

export default linkedInChecklist;