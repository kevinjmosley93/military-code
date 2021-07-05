import React, { createContext, useState } from 'react'

import { fetchJobs, fetchJobsById } from '../lib/Jobs/fetchJobs'
import { fetchJobCenters } from '../lib/Jobs/fetchJobCenters'
import { fetchTraining } from '../lib/fetchTraining'

const JobContext = createContext()

const JobProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [jobs, setJobs] = useState(null)

  const [training, setTraining] = useState(null)

  const [jobData, setJobData] = useState(null)

  const [jobCenters, setJobCenters] = useState(null)

  const [apprenticeships, setApprenticeships] = useState(null)

  const [formInput, setFormInput] = useState({
    form: {
      keyword: 'veterans',
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
      await getJobCenters(location)
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
      // console.log(Jobs)
      setJobs(Jobs)
      return Jobs
    } catch (err) {
      console.error(err)
    }
  }

  const getJobsById = async id => {
    try {
      const { data } = await fetchJobsById(id)
      // console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
  const jobIds = jobs && jobs.map(({ JvId }) => JvId)

  const getJobCenters = async location => {
    try {
      const { data } = await fetchJobCenters(location)
      if (!data) return
      const { OneStopCenterList } = data
      setJobCenters(OneStopCenterList)
      // console.log(OneStopCenterList)
      return OneStopCenterList
    } catch (err) {
      console.error(err)
    }
  }

  const getTraining = async (keyword, location) => {
    try {
      const { data } = await fetchTraining(keyword, location)
      if (!data) return
      const { SchoolPrograms } = data
      setTraining(SchoolPrograms)
      // console.log(SchoolPrograms)
      return data
    } catch (err) {
      console.error(err)
    }
  }

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
        handleForm,
        getJobCenters,
        jobCenters,
        setJobCenters,
        getTraining,
        training,
        setTraining,
        user,
        setUser
      }}>
      {children}
    </JobContext.Provider>
  )
}

export { JobProvider, JobContext }
