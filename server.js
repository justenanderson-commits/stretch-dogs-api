const express = require('express')
const app = express()
const db = require('./db/db')

app.locals.title = 'Stretch Dog API'

app.set('port', 3001)

// app.get('/api/v1/dogs', (request, response) => {
//   response.status(200).json(app.locals.dogs)
// })

app.get('/api/v1/dogs/:size/:family_rating/:trainability/:grooming_needed/:energy_level', async (request, response) => {
  try {
    const { size, family_rating, trainability, grooming_needed, energy_level  } = request.params
    const match = await db('dogs')
      .where('size', size)
      .andWhere('family_rating', family_rating)
      .andWhere('trainability', trainability)
      .andWhere('grooming_needed', grooming_needed)
      .andWhere('energy_level', energy_level)
      .select()

    if (match.length) {
      response.status(200).json(match)
    } else {
      response.status(404).json({
        error: `Could not find dog breed that would be a good fit. Maybe get a cat?`
      })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`)
})