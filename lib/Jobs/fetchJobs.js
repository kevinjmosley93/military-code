import fetchData from '../fetchData'

const fetchJobs = async () => {
  const url = `${process.env.REQ_URL}software%20engineer/United%20States/25/0/0/0/12/0?source=NLx&showFilters=false`

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', `Bearer ${process.env.ONESTOP_TOKEN}`)

  const params = {
    method: 'GET',
    headers
  }
  const { data } = await fetchData(url, params)

  return { data }
}

const fetchJobsById = async id => {
  const url = `${process.env.REQ_URL}${id}`

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', `Bearer ${process.env.ONESTOP_TOKEN}`)

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
