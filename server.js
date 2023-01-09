const express = require('express')
const app = express()
const db = require('./db/db')
const cors = require('cors')
require('dotenv').config()

app.locals.title = 'Stretch Dog API'

app.set('port', process.env.PORT)

app.use(cors())
app.use(express.json())

app.get(
  '/api/v1/dogs/:size/:family_rating/:trainability/:grooming_needed/:energy_level',
  async (request, response) => {
    console.log(request.params)
    try {
      const {
        size,
        family_rating,
        trainability,
        grooming_needed,
        energy_level,
      } = request.params
      const match = await db('dogs')
        .where('size', size)
        .andWhere('family_rating', family_rating)
        .andWhere('trainability', trainability)
        .andWhere('grooming_needed', grooming_needed)
        .andWhere('energy_level', energy_level)
        .select()

      response.status(200).json(match)
    } catch (error) {
      response.status(500).json({ error })
    }
  }
)

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`)
})
