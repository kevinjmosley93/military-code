const saveTraining = async (id, info) => {
  const url = '/api/saveTraining'
  const body = {
    userId: id,
    ...info
  }
  const params = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  try {
    const res = await fetch(url, params)
    const { success } = await res.json()
    console.log({ profileData: success })
    return { success }
  } catch (err) {
    console.error(err)
  }
}

export default saveTraining
