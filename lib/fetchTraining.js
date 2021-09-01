import fetchData from './fetchData'

export const fetchTraining = async (keyword, location) => {
  const url = `${process.env.NEXT_PUBLIC_REQ_URL}training/${process.env.NEXT_PUBLIC_USER_ID}/${keyword}/${location}/100/0/0/0/0/0/0/0/0/100`

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
  try {
    const { data } = await fetchData(url, params)

    return { data }
  } catch (err) {
    console.error(err)
  }
}
