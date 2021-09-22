import React from 'react'
import Blog from '../../components/Blog'
import { NextSeo } from 'next-seo'

const Index = () => {
  return (
    <div className='container'>
      <NextSeo
        title='ETV Latest Blog Posts'
        description='Follow the Veterans Equally Trying To Survive Blog to keep up with what veterans are thinking and saying around the community.'
      />
      <Blog />
    </div>
  )
}

export default Index
