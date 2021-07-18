import React from 'react'
import Image from 'next/image'
import moment from 'moment'

const Title = ({ data }) => {
  const {
    id,
    fields: { title, body, author, createdAt, img }
  } = data

  // console.log({ blog: data })
  return (
    <div
      style={{
        wordWrap: 'break-word'
      }}
      className='container my-3'>
      <h1 className='text-center'>{title}</h1>
      <span className='row'>
        <div className='d-flex align-items-center my-4'>
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
      <p className='text-justify mt-3'>{body}</p>
    </div>
  )
}

export async function getStaticPaths() {
  // const url = 'http://localhost:3000'
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blog`)
  const data = await res.json()

  console.log({ data })

  const paths = data.map(({ id, fields: { title } }) => ({
    params: { title }
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log({ params })
  // const url = 'http://localhost:3000'

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blog`)
  const data = await res.json()

  const newData = data.find(({ fields: { title } }) => title == params.title)

  console.log({ newData })

  if (!newData) return

  console.log({ postData: newData })

  return { props: { data: newData } }
}

export default Title
