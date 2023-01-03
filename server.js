const express = require('express');
const app = express();

app.locals.title = 'Stretch Dog API';
app.locals.dogs = {
  "dogs": [
    {
      "breed": "Labrador Retriever",
      "size": "large",
      "family-rating": 5,
      "trainability": 5,
      "grooming-needed": 1,
      "energy-level": 5,
      "id": 1,
      "img": "https://commons.wikimedia.org/wiki/File:Labrador_Retriever_%281210559%29.jpg"
    },
    {
      "breed": "Golden Retriever",
      "size": "large",
      "family-rating": 5,
      "trainability": 5,
      "grooming-needed": 4,
      "energy-level": 3,
      "id": 2,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Golden_Retriever_2019.jpg/800px-Golden_Retriever_2019.jpg?20210119120616"
    },
    {
      "breed": "Standard Poodle",
      "size": "large",
      "family-rating": 5,
      "trainability": 5,
      "grooming-needed": 4,
      "energy-level": 4,
      "id": 3,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/640px-Full_attention_%288067543690%29.jpg"
    },
    {
      "breed": "French Bulldog",
      "size": "medium",
      "family-rating": 5,
      "trainability": 4,
      "grooming-needed": 1,
      "energy-level": 3,
      "id": 4,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/French_Bulldog_Male.jpg/640px-French_Bulldog_Male.jpg"
    },
    {
      "breed": "Dachschund",
      "size": "small",
      "family-rating": 4,
      "trainability": 4,
      "grooming-needed": 2,
      "energy-level": 3,
      "id": 5,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Short-haired-Dachshund.jpg/640px-Short-haired-Dachshund.jpg"
    },
    {
      "breed": "German shepherd",
      "size": "large",
      "family-rating": 5,
      "trainability": 5,
      "grooming-needed": 2,
      "energy-level": 5,
      "id": 6,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/640px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
    },
    {
      "breed": "Shih Tzu",
      "size": "small",
      "family-rating": 5,
      "trainability": 3,
      "grooming-needed": 4,
      "energy-level": 2,
      "id": 7,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shihtzu_%28cropped%29.jpg/640px-Shihtzu_%28cropped%29.jpg"
    },
    {
      "breed": "Chihuahua",
      "size": "small",
      "family-rating": 3,
      "trainability": 3,
      "grooming-needed": 1,
      "energy-level": 4,
      "id": 8,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chihuahua_long-haired_black_%26_tan.jpg/640px-Chihuahua_long-haired_black_%26_tan.jpg"
    },
    {
      "breed": "Yorkshire Terrier",
      "size": "small",
      "family-rating": 5,
      "trainability": 4,
      "grooming-needed": 5,
      "energy-level": 4,
      "id": 9,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_Yorkshire_Terrier_DSC_5954.jpg/640px-A_Yorkshire_Terrier_DSC_5954.jpg"
    },
    {
      "breed": "Cavalier King Charles Spaniel",
      "size": "small",
      "family-rating": 5,
      "trainability": 4,
      "grooming-needed": 2,
      "energy-level": 2,
      "id": 10,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CarterBIS.Tiki.13.6.09.jpg/640px-CarterBIS.Tiki.13.6.09.jpg"
    },
    {
      "breed": "Boykin Spaniel",
      "size": "medium",
      "family-rating": 4,
      "trainability": 4,
      "grooming-needed": 3,
      "energy-level": 4,
      "id": 11,
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/ae/BoykinSpaniel.jpg"
    },{
      "breed": "Australian Shepherd",
      "size": "medium",
      "family-rating": 4,
      "trainability": 5,
      "grooming-needed": 5,
      "energy-level": 5,
      "id": 12,
      "img": "https://worldanimalfoundation.org/wp-content/uploads/2022/10/Australian-Shepherd-Dog-Breed-History-review.jpg"
    }
  ]
}

app.set('port', 3001);

app.get('/api/v1/dogs', (request, response) => {
  response.status(200).json(app.locals.dogs);
});

app.get('/api/v1/dogs/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.dogs.find(dog => dog.id == id);

  if (!match) return response.status(404).json({message: `No dog found with an id of ${id}`});

  return response.status(200).json(match);
});

app.post('/api/v1/dogs', (request, response) => {
  const newDog = request.body;

  for (let requiredParameter of ['id', 'title', 'description']) {
    if (!newDog[requiredParameter]) return response.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`});
  }

  app.locals.dogs = [...app.locals.dogs, newdog];

  return response.status(201).json(newDog);
});

app.delete('/api/v1/dogs/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.dogs.find(dog => dog.id == id);

  if (!match) return response.status(404).json({message: `No dog found with an id of ${id}`});

  const filteredDogs = app.locals.dogs.filter(dog => dog.id != id);

  app.locals.dogs = filteredDogs;

  return response.sendStatus(204);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`);
});
