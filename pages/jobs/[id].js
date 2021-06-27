import React from 'react'
import { useRouter } from 'next/router'
import { fetchJobs, fetchJobsById } from '../../lib/Jobs/fetchJobs'

export async function getStaticPaths() {
  const { data } = await fetchJobs()
  const { Jobs } = data
  console.log(Jobs)

  const paths = Jobs.map(({ JvId }) => ({
    params: { id: JvId }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { data } = await fetchJobsById(params.id)

  return { props: { data } }
}

const id = ({ data }) => {
  const router = useRouter()

  const { id } = router.query
  const { JobTitle, Company, Description, Location, URL } = data
  console.log(data, id)

  return (
    <>
      <p>
        {Company} is hiring {JobTitle} in {Location}
      </p>
      <div dangerouslySetInnerHTML={{ __html: Description }} />
      <a target='_blank' className='text-dark' href={URL}>
        Apply
      </a>
    </>
  )
}

export default id
