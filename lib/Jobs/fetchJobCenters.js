import fetchData from '../fetchData'

const fetchJobCenters = async location => {
  const url = `${process.env.NEXT_PUBLIC_REQ_URL}ajcfinder/${process.env.NEXT_PUBLIC_USER_ID}/${location}/100/0/0/0/0/0/0/0/100`

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
  fetchJobCenters
}
