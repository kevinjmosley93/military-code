import React from 'react'

const Video = () => {
  return (
    <div className='container'>
      <h2 className='pb-2 text-center'>What V.E.T.S are saying</h2>
      <div className='row'>
        <div className='col-md-4'>
          <iframe
            className='rounded'
            width='100%'
            height='250'
            src='https://www.youtube.com/embed/_UN4CK5SNo8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='col-md-4'>
          <iframe
            className='rounded'
            width='100%'
            height='250'
            src='https://www.youtube.com/embed/N9r0DPR8JlU'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='col-md-4'>
          <iframe
            className='rounded'
            width='100%'
            height='250'
            src='https://www.youtube.com/embed/EonBbsOZ_eA'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default Video
