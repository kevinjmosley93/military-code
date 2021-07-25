import moment from 'moment'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Loading from './Loading'

const Blog = () => {
  const [blogData, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${window.location.origin}/api/get-blog`)
    const data = await res.json()
    // console.log('this is data', data)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const blog = blogData.map(
    ({
      id,
      fields: { title, body, author, createdAt, img, blogImg, slug }
    }) => ({
      id,
      title,
      body,
      createdAt,
      author,
      img,
      blogImg,
      slug
    })
  )

  const sortedPosts = blog.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  )

  console.log({ blog })
  if (blog.length < 1)
    return (
      <div className='conatiner py-5'>
        <Loading />
      </div>
    )

  return (
    <div className='container'>
      <h1 className='text-center mt-3'>Recent Posts</h1>
      <div className='row my-3 gx-5 w-100 mx-auto'>
        {blog &&
          sortedPosts.map(
            ({ id, title, body, createdAt, author, img, blogImg, slug }) => (
              <div key={id} className='col-lg-4 mb-5'>
                <div className='card h-100 shadow border-0'>
                  <Image
                    className='rounded'
                    width={150}
                    height={200}
                    src={
                      blogImg ||
                      'https://dummyimage.com/150x200/000000/dbd2db.png&text=Placeholder'
                    }
                    alt='cover img'
                  />
                  <div className='card-body p-4 d-flex flex-column justify-content-between'>
                    <Link href={`/blog/${slug}`}>
                      <a className='text-decoration-none link-dark stretched-link'>
                        <h5 className='card-title mb-3'>{title}</h5>
                      </a>
                    </Link>
                    <span className='text-truncate-container'>
                      <p
                        style={{ fontSize: '.8rem' }}
                        className='card-text m-0'>
                        {body}
                      </p>
                    </span>
                  </div>
                  <div className='card-footer p-4 pt-0 bg-transparent border-top-0'>
                    <div className='d-flex align-items-end justify-content-between'>
                      <div className='d-flex align-items-center'>
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
                      <Link href={`/blog/${slug}`}>
                        <a className='text-decoration-none link-primary stretched-link'>
                          <span style={{ fontSize: '.7rem' }}>
                            Read Post &#10230;
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        {/* <a
          style={{ margin: '0 auto' }}
          href='#'
          className='text-center text-dark d-block btn-lg p-2'>
          View More
        </a> */}
      </div>
    </div>
  )
}

export default Blog
