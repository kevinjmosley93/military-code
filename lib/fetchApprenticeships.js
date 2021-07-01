import fetchData from './fetchData'

export const fetchApprenticeships = async location => {
  const url = `${process.env.NEXT_PUBLIC_REQ_URL}apprenticeshipfinder/${process.env.NEXT_PUBLIC_USER_ID}/${location}/100`

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
