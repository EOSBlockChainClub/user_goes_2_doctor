require('dotenv').config()
const app = require('express')()
const cors = require('cors')
const demux = require('./demux')
const fuzzyRoutes = require('./api/fuzzy/fuzzy.route')
const io = require('./utils/io')

app.use(cors())

app.use('/fuzzy', fuzzyRoutes)

const server = app.listen(process.env.PORT, () => console.info(`Fuzzy app listening on port ${process.env.PORT}!`))

io.connect(server)

demux.watch()
