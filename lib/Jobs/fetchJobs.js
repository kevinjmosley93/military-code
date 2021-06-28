import fetchData from '../fetchData'

const fetchJobs = async (keyword, location, radius, numOfRecords) => {
  const url = `${process.env.NEXT_PUBLIC_REQ_URL}jobsearch/${process.env.NEXT_PUBLIC_USER_ID}/${keyword}/${location}/${radius}/0/0/0/${numOfRecords}/0?source=NLx&showFilters=false`

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append(
    'Authorization',
    `Bearer ${process.env.NEXT_PUBLIC_ONESTOP_TOKEN}`
  )

  const params = {
    method: 'GET',
    headers
  }
  const { data } = await fetchData(url, params)

  return { data }
}

const fetchJobsById = async id => {
  const url = `${process.env.NEXT_PUBLIC_REQ_URL}jobsearch/${process.env.NEXT_PUBLIC_USER_ID}/${id}`

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append(
    'Authorization',
    `Bearer ${process.env.NEXT_PUBLIC_ONESTOP_TOKEN}`
  )

  const params = {
    method: 'GET',
    headers
  }
  const { data } = await fetchData(url, params)

  return { data }
}

module.exports = {
  fetchJobs,
  fetchJobsById
}
