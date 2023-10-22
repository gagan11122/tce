import React from 'react';
import Card from './Card';

const CardRow = () => {
  const cardsData = [
    {
      title: 'Pug',
      description: 'The Pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often fawn or black, and a compact, square body with well developed and thick muscles all over the body.',
      imageUrl: 'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg'
    },
    {
      title: 'Maltese',
      description: 'Maltese dog refers both to an ancient variety of dwarf canine from Italy and generally associated also with the island of Malta, and to a modern breed of dog in the toy group. The contemporary variety is genetically related to the Bichon, Bolognese, and Havanese breeds.',
      imageUrl: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg'
    },
    {
      title: 'Chow Chow',
      description: 'The Chow Chow is a spitz-type of dog breed originally from Northern China. The Chow Chow is a sturdily built dog, square in profile, with a broad skull and small, triangular, erect ears with rounded tips. The breed is known for a very dense double coat that is either smooth or rough.',
      imageUrl: 'https://i.pinimg.com/1200x/ff/6e/a2/ff6ea261410a85c4fec775eb00b4e9b0.jpg'
    }
  ];

  return (
    <div className="card-row">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardRow;
