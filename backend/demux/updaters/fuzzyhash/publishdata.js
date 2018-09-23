async function publishData (state, payload, blockInfo, context) {
  const Fuzzy = state.fuzzy
  try {
    let fuzzy = await Fuzzy.find(
      {
        _id: {
          timestamp: blockInfo.timestamp,
          author: payload.data.user
        }
      }
    ).exec()

    // if data already exists do not insert it in again
    if (fuzzy.length !== 0) return

    console.log(JSON.stringify(payload.data));

    fuzzy = new Fuzzy(
      {
        _id: {
          timestamp: blockInfo.timestamp,
          author: payload.data.user
        },
        author: payload.data.user,
        hash: payload.data.hash, 
        location: payload.data.location,      
        fuzzyConfirmed: true
      }
    )
    await fuzzy.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = publishData
