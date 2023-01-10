/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
    {
      breed: 'Labrador Retriever',
      size: 4,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 2,
      energy_level: 5,
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Labrador_Retrievers_yellow_and_red.jpg',
      description:
        'The Labrador Retriever or Labrador is a British breed of retriever gun dog.',
    },
    {
      breed: 'Golden Retriever',
      size: 4,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Golden_Retriever_2019.jpg/800px-Golden_Retriever_2019.jpg?20210119120616',
      description:
        'The Golden Retriever is a British breed of retriever dog of 1 size. It is characterised by a gentle and affectionate nature and a striking golden coat.',
    },
    {
      breed: 'Standard Poodle',
      size: 4,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/640px-Full_attention_%288067543690%29.jpg',
      description:
        'The Standard Poodle is a big fluffy version of a little toy poodle. Originally bread to hunting in cold conditions, they are highly intelligent and trainable.',
    },
    {
      breed: 'French Bulldog',
      size: 2,
      family_rating: 5,
      trainability: 4,
      grooming_needed: 1,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/French_Bulldog_Male.jpg/640px-French_Bulldog_Male.jpg',
      description:
        'The French Bulldog, is a French breed of companion dog or 1 dog. It appeared in Paris in the mid–nineteenth century, apparently the result of cross–breeding of 1 Bulldogs imported from England and local Parisian ratters.',
    },
    {
      breed: 'Dachshund',
      size: 2,
      family_rating: 4,
      trainability: 4,
      grooming_needed: 2,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Short-haired-Dachshund.jpg/640px-Short-haired-Dachshund.jpg',
      description:
        'The dachshund, also known as the wiener dog, badger dog, and sausage dog, is a 1–legged, 2–bodied, hound–type dog breed. They may be smooth–haired, wire–haired, or 2–haired.',
    },
    {
      breed: 'German Shepherd Dog',
      size: 4,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 2,
      energy_level: 5,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/640px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
      description:
        'The German Shepherd or German Shepherd Dog, also known as the Alsatian, is a German breed of working dog of 1 to 4 size. It is a modern breed, developed by Max von Stephanitz from various traditional German herding dogs from 1899.',
    },
    {
      breed: 'Shih Tzu',
      size: 1,
      family_rating: 5,
      trainability: 3,
      grooming_needed: 4,
      energy_level: 2,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shihtzu_%28cropped%29.jpg/640px-Shihtzu_%28cropped%29.jpg',
      description:
        'The Shih Tzu is an Asian 1 dog breed originating from Tibet. This breed is well–known for their 1 snout and 4 round eyes, as well as their ever growing coat, floppy ears, and 1 and stout posture.',
    },
    {
      breed: 'Chihuahua',
      size: 1,
      family_rating: 2,
      trainability: 3,
      grooming_needed: 1,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chihuahua_long-haired_black_%26_tan.jpg/640px-Chihuahua_long-haired_black_%26_tan.jpg',
      description:
        'The Chihuahua is one of the 2est breeds of dog, and is named after the Mexican state of Chihuahua.',
    },
    {
      breed: 'Yorkshire Terrier',
      size: 1,
      family_rating: 5,
      trainability: 4,
      grooming_needed: 5,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_Yorkshire_Terrier_DSC_5954.jpg/640px-A_Yorkshire_Terrier_DSC_5954.jpg',
      description: 'Description not found. **sad puppy sounds **',
    },
    {
      breed: 'English Spaniel',
      size: 3,
      family_rating: 4,
      trainability: 3,
      grooming_needed: 4,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Cavalier_King_Charles_Spaniels_%282821585840%29.jpg',
      description:
        'The King Charles Spaniel (also known as the English 1 Spaniel) is a 2 dog breed of the spaniel type. In 1903, the Kennel Club combined four separate 1 spaniel breeds under this single title.',
    },
    {
      breed: 'Boykin Spaniel',
      size: 3,
      family_rating: 4,
      trainability: 4,
      grooming_needed: 3,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/BoykinSpaniel.jpg',
      description: `The Boykin Spaniel is an American gun dog used for hunting birds and tracking. Bred to be small, South Carolina's state dog is nicked the dog 'who won't rock the boat.`,
    },
    {
      breed: 'Australian Shepherd',
      size: 3,
      family_rating: 4,
      trainability: 5,
      grooming_needed: 5,
      energy_level: 5,
      img: 'https://worldanimalfoundation.org/wp-content/uploads/2022/10/Australian-Shepherd-Dog-Breed-History-review.jpg',
      description:
        'The Australian Shepherd is a bright, relational dog. Easily trainable, their job description has expanded from a protective herding dog into a do-it-all family companion.',
    },
    {
      breed: 'Chinese Crested',
      size: 1,
      family_rating: 4,
      trainability: 1,
      grooming_needed: 1,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/American-Hairless-Terrier-standing-in-the-grass-on-lead.jpg',
      description:
        'The Chinese Crested Dog is a hairless breed of dog. Like most hairless dog breeds, the Chinese Crested Dog comes in two varieties, with and without hair, which can be born in the same litter: the Powderpuff and the Hairless.',
    },
    {
      breed: 'Finnish Spitz',
      size: 2,
      family_rating: 3,
      trainability: 4,
      grooming_needed: 3,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/FINNISH_SPITZ.jpg/1200px-FINNISH_SPITZ.jpg',
      description:
        'The Finnish Spitz is a breed of dog originating in Finland. The breed was originally trained to hunt all types of game from squirrels and other rodents to bears.',
    },
    {
      breed: 'Boxer',
      size: 4,
      family_rating: 4,
      trainability: 4,
      grooming_needed: 2,
      energy_level: 4,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Boxer.1.jpg',
      description:
        'The Boxer is a 1 to 4, 1–haired breed of dog, developed in Germany. The coat is smooth and tight–fitting; colors are fawn, brindled, or white, with or without white markings.',
    },
    {
      breed: 'American StaffordShire Terrier',
      size: 4,
      family_rating: 4,
      trainability: 3,
      grooming_needed: 2,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/AmStaff.01.jpg',
      description:
        'The American Staffordshire Terrier, also known as the AmStaff or American Staffy is a 1–sized, 1–coated American dog breed.',
    },
    {
      breed: 'Great Pyrenees',
      size: 5,
      family_rating: 4,
      trainability: 3,
      grooming_needed: 4,
      energy_level: 4,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Great-Pyrenees-walking-on-the-beach.jpg',
      description:
        'The Great Pyrenees is a large, thickly coated, and immensely powerful working dog bred to deter sheep-stealing wolves and other predators on snowy mountaintops',
    },
    {
      breed: 'Pug',
      size: 2,
      family_rating: 5,
      trainability: 4,
      grooming_needed: 3,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Pug-On-White-01.jpg',
      description:
        'The pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, 1–muzzled face and curled tail.',
    },
    {
      breed: 'Soft Coated Wheaten Terrier',
      size: 3,
      family_rating: 5,
      trainability: 3,
      grooming_needed: 3,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Soft-Coated_Wheaten_Terrier.jpg/640px-Soft-Coated_Wheaten_Terrier.jpg',
      description:
        'The Soft-coated Wheaten Terrier ("Yellow Terrier") is a pure–breed terrier originating from Ireland. Wheatens typically have one of two coat types: Irish or 3 (American).',
    },
    {
      breed: 'American Ring-Tail Bandit',
      size: 1,
      family_rating: 1,
      trainability: 1,
      grooming_needed: 1,
      energy_level: 1,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Curious_Raccoon.jpg/800px-Curious_Raccoon.jpg?20130712195919',
      description: 'Wait, is that even a dog?',
    },
    {
      breed: 'Scottish Herbivorous Nottacanis',
      size: 5,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 5,
      energy_level: 5,
      img: 'https://www.helpfulhorsehints.com/wp-content/uploads/Shetland-Pony-in-Grass-Field-1024x597.jpg',
      description:
        'Description not found. **sad horse....we mean puppy sounds **',
    },
    {
      breed: 'Australian Cattle Dog',
      size: 3,
      family_rating: 2,
      trainability: 4,
      grooming_needed: 2,
      energy_level: 5,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Australian-Cattle-Dog-laying-down-in-the-grass.jpg',
      description:
        'The Australian Cattle Dog (ACD), or simply Cattle Dog, is a breed of herding dog originally developed in Australia for droving cattle over 2 distances across rough terrain.',
    },
    {
      breed: 'Standard Schnauzer',
      size: 3,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Standard-Schnauzer-standing-outdoors.jpg',
      description:
        'The Schnauzer or Standard Schnauzer (Mittelschnauzer) is a dog breed that originated in Germany in at least 14th–15th century, of Schnauzer breed type and progenitor of the Giant Schnauzer and Miniature Schnauzer.',
    },
    {
      breed: 'Saint Bernard',
      size: 5,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 5,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Saint-Bernard-On-White-01.jpg',
      description:
        'The Saint Bernard or St. Bernard is a breed of very 4 working dog from the Western Alps in Italy and Switzerland. They were originally bred for rescue work by the hospice of the Great St Bernard Pass on the Italian–Swiss border.',
    },
    {
      breed: 'Shetland Sheepdog',
      size: 2,
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 4,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Shetland-Sheepdog-On-White-01.jpg',
      description:
        'The Shetland Sheepdog, often known as the Sheltie, is a breed of herding dog that originated in the Shetland Islands of Scotland.',
    },
    {
      breed: 'English Bulldog',
      size: 3,
      family_rating: 3,
      trainability: 4,
      grooming_needed: 4,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Bulldog-standing-in-the-grass.jpg',
      description: 'Description not found. **sad puppy sounds **',
    },
    {
      breed: 'American Bulldog',
      size: 5,
      family_rating: 2,
      trainability: 3,
      grooming_needed: 3,
      energy_level: 3,
      img: 'https://www.akc.org/wp-content/uploads/2020/01/American-Bulldog-standing-in-three-quarter-view.jpg',
      description:
        'American Bulldogs are a well-balanced athletic dog that demonstrate great strength, endurance, agility, and a friendly attitude. Historically, they were bred to be a utility dog used for working the farm.',
    },
    {
      breed: 'Bichon Frisé',
      size: 1,
      family_rating: 5,
      trainability: 3,
      grooming_needed: 2,
      energy_level: 4,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bichon_Fris%C3%A9_-_studdogbichon.jpg/1600px-Bichon_Fris%C3%A9_-_studdogbichon.jpg',
      description:
        'Small, fluffy pup with a big personality. Some might even say the greatest pup there ever was.',
    },
    {
      breed: 'Greyhound',
      size: 4,
      family_rating: 3,
      trainability: 3,
      grooming_needed: 2,
      energy_level: 4,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Greyhound-running.jpg',
      description:
        'The Greyhound is a breed of dog, a sighthound which has been bred for coursing game and greyhound racing. It is also referred to as the English Greyhound.',
    },
    {
      breed: 'Bullmastiff',
      size: 5,
      family_rating: 3,
      trainability: 4,
      grooming_needed: 2,
      energy_level: 4,
      img: 'https://www.akc.org/wp-content/uploads/2017/11/Bullmastiff-standing-in-a-field.jpg',
      description:
        'The Bullmastiff is a 4–sized breed of domestic dog, with a solid build and a 1 muzzle. The Bullmastiff is a mastiff type dog, and was originally developed by 19th–century gamekeepers to guard estates.',
    },
  ])
}
