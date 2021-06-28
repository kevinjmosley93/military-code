import React, { createContext, useState } from 'react'

import { fetchJobs, fetchJobsById } from '../lib/Jobs/fetchJobs'

const JobContext = createContext()

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null)

  const [jobData, setJobData] = useState(null)

  const [formInput, setFormInput] = useState({
    form: {
      keyword: 'admin',
      location: 'Tx'
    }
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      return { form: updatedForm }
    })
  }
  const handleForm = async e => {
    e.preventDefault()
    const { keyword, location, radius, numOfRecords } = formInput.form

    await getJobs(keyword, location, radius, numOfRecords)

    setSubmitted(true)
    if (submitted) {
      setFormInput({
        form: {
          keyword: 'admin',
          location: 'Tx'
        }
      })
      console.log({ submitted })
    }
  }

  const {
    form: { keyword, location }
  } = formInput

  const getJobs = async (keyword, location) => {
    const { data } = await fetchJobs(keyword, location)
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
        jobIds,
        keyword,
        location
      }}>
      {children}
    </JobContext.Provider>
  )
}

export { JobProvider, JobContext }
