const fetchData = async (url, params) => {
  const res = await fetch(url, params)
  const resData = await res.json()
  return {
    data: resData
  }
}

export default fetchData
