const fetchData = async (url, params) => {
  try {
    const res = await fetch(url, params)
    const resData = await res.json()
    return {
      data: resData
    }
  } catch (err) {
    console.error(`Error!!: ${err}`)
  }
}

export default fetchData
