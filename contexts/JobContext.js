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

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      return { form: updatedForm }
    })
  }
  const handleForm = async e => {
    try {
      e.preventDefault()
      const { keyword, location } = formInput.form

      await getJobs(keyword, location)
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { keyword, location }
  } = formInput

  const getJobs = async (keyword, location) => {
    try {
      const { data } = await fetchJobs(keyword, location)
      const { Jobs } = data
      console.log(Jobs)
      setJobs(Jobs)
      return Jobs
    } catch (err) {
      console.error(err)
    }
  }

  const getJobsById = async id => {
    try {
      const { data } = await fetchJobsById(id)
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
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
        location,
        formInput,
        setFormInput,
        handleChange,
        handleForm
      }}>
      {children}
    </JobContext.Provider>
  )
}

export { JobProvider, JobContext }
