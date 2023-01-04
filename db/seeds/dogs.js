/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
    {
      breed: 'Labrador Retriever',
      size: 'large',
      family_rating: 5,
      trainability: 5,
      grooming_needed: 1,
      energy_level: 5,
      img: 'https://commons.wikimedia.org/wiki/File:Labrador_Retriever_%281210559%29.jpg',
    }, 
    {
      breed: 'Golden Retriever',
      size: 'large',
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Golden_Retriever_2019.jpg/800px-Golden_Retriever_2019.jpg?20210119120616',
    }, 
    {
      breed: 'Standard Poodle',
      size: 'large',
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/640px-Full_attention_%288067543690%29.jpg',
    }, 
    {
      breed: 'French Bulldog',
      size: 'medium',
      family_rating: 5,
      trainability: 4,
      grooming_needed: 1,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/French_Bulldog_Male.jpg/640px-French_Bulldog_Male.jpg',
    }, 
    {
      breed: 'Dachschund',
      size: 'small',
      family_rating: 4,
      trainability: 4,
      grooming_needed: 2,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Short-haired-Dachshund.jpg/640px-Short-haired-Dachshund.jpg',
    }, {
      breed: 'German Sheperd',
      size: 'large',
      family_rating: 5,
      trainability: 5,
      grooming_needed: 2,
      energy_level: 5,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/640px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
    },
    {
      breed: 'Shih Tzu',
      size: 'small',
      family_rating: 5,
      trainability: 3,
      grooming_needed: 4,
      energy_level: 2,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shihtzu_%28cropped%29.jpg/640px-Shihtzu_%28cropped%29.jpg',
    }, 
    {
      breed: 'Chihuahua',
      size: 'small',
      family_rating: 3,
      trainability: 3,
      grooming_needed: 1,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chihuahua_long-haired_black_%26_tan.jpg/640px-Chihuahua_long-haired_black_%26_tan.jpg',
    }, 
    {
      breed: 'Yorkshire Terrier',
      size: 'small',
      family_rating: 5,
      trainability: 4,
      grooming_needed: 5,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_Yorkshire_Terrier_DSC_5954.jpg/640px-A_Yorkshire_Terrier_DSC_5954.jpg',
    }, 
    {
      breed: 'Cavalier King Charles Spaniel',
      size: 'small',
      family_rating: 5,
      trainability: 4,
      grooming_needed: 2,
      energy_level: 2,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CarterBIS.Tiki.13.6.09.jpg/640px-CarterBIS.Tiki.13.6.09.jpg',
    }, 
    {
      breed: 'Boykin Spaniel',
      size: 'medium',
      family_rating: 4,
      trainability: 4,
      grooming_needed: 3,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/BoykinSpaniel.jpg',
    }, 
    {
      breed: 'Australian Shepherd',
      size: 'medium',
      family_rating: 4,
      trainability: 5,
      grooming_needed: 5,
      energy_level: 5,
      img: 'https://worldanimalfoundation.org/wp-content/uploads/2022/10/Australian-Shepherd-Dog-Breed-History-review.jpg',
    } 
  ])
}
