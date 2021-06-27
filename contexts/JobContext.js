import React, { createContext, useState } from 'react'

import { fetchJobs, fetchJobsById } from '../lib/Jobs/fetchJobs'

const JobContext = createContext()

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null)

  const [jobData, setJobData] = useState(null)

  const getJobs = async () => {
    const { data } = await fetchJobs()
    const { Jobs } = data
    console.log(Jobs)
    setJobs(Jobs)
    return Jobs
  }

  const getJobsById = async id => {
    const { data } = await fetchJobsById(id)
    console.log(data)
    return data
  }
  const jobIds = jobs && jobs.map(({ JvId }) => JvId)

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        getJobs,
        getJobsById,
        jobData,
        setJobData,
        jobIds
      }}>
      {children}
    </JobContext.Provider>
  )
}

export { JobProvider, JobContext }
