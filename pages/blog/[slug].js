import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'

const Title = ({ data }) => {
  const {
    fields: { title, body, author, createdAt, img, blogImg, tags, ytLink }
  } = data

  // console.log({ blog: data })
  return (
    <div
      style={{
        wordWrap: 'break-word',
        padding: '0 2rem'
      }}
      className='container '>
      <h1 className='mt-5'>{title}</h1>
      <span className='row'>
        <div className='d-flex align-items-center my-3'>
          <Image
            width={40}
            height={40}
            className='rounded-circle'
            src={
              img ||
              'https://dummyimage.com/40x40/000000/dbd2db.png&text=Placeholder'
            }
            alt='Author Img'
          />
          <div className='small mx-2'>
            <div className='fw-bold'>{author}</div>
            <div className='text-muted'>
              {moment(createdAt).format('MMMM Do YYYY')}
            </div>
          </div>
        </div>
      </span>
      <div
        style={{
          width: '100%',
          fontSize: '.7rem'
        }}>
        {tags.length > 0 &&
          tags.map((tag, idx) => (
            <span key={idx} className='badge rounded-pill bg-primary px-3 me-1'>
              {tag}
            </span>
          ))}
      </div>
      <div>
        <Image
          width={1076}
          height={600}
          id='blogImg'
          className='img-fluid rounded mt-4'
          src={
            blogImg ||
            'https://dummyimage.com/40x40/000000/dbd2db.png&text=Placeholder'
          }
          alt='Author Img'
        />
        <ReactMarkdown className='mt-3 body-text'>{body}</ReactMarkdown>
        <iframe
          className='mb-5'
          width='100%'
          height='515'
          src={ytLink}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        {/* 
        <div className='blog-comment'>
          <form className='blog-comment__form'>
            <div className='blog-comment__form-header'>
              <h2>Share your thoughts</h2>
              <Link href='/login'>
                <a>Login to comment</a>
              </Link>
            </div>
            <div>
              <textarea
                type='text'
                placeholder='Enter your comment here...'
                style={{ height: '5rem', width: '100%', marginTop: '1rem' }}
              />
            </div>
          </form>
          <div className='d-flex comment'>
            <div className='flex-shrink-0'>
              <Image
                width={40}
                height={40}
                className='rounded-circle'
                src={
                  'https://dummyimage.com/40x40/000000/dbd2db.png&text=Placeholder'
                }
                alt='Author Img'
              />
            </div>
            <div className='small mx-2'>
              <div className='fw-bold'>Billy</div>
              <div className='text-muted'>
                {moment().format('MMMM Do YYYY')}
              </div>
            </div>
            <div className='flex-grow-1 ms-3'>This is comment text.</div>
          </div>
          <div className='d-flex comment'>
            <div className='flex-shrink-0'>
              <Image
                width={40}
                height={40}
                className='rounded-circle'
                src={
                  'https://dummyimage.com/40x40/000000/dbd2db.png&text=Placeholder'
                }
                alt='Author Img'
              />
            </div>
            <div className='small mx-2'>
              <div className='fw-bold'>Billy</div>
              <div className='text-muted'>
                {moment().format('MMMM Do YYYY')}
              </div>
            </div>
            <div className='flex-grow-1 ms-3'>This is comment text.</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // const url = 'http://localhost:3000'

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blog`)
  const data = await res.json()

  // console.log({ data })

  const paths = data.map(({ fields: { slug } }) => ({
    params: { slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log({ params })
  // const url = 'http://localhost:3000'

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blog`)
  const data = await res.json()

  const newData = data.find(({ fields: { slug } }) => slug === params.slug)

  // console.log({ newData })

  if (!newData) return

  // console.log({ postData: newData })

  return { props: { data: newData } }
}

export default Title
