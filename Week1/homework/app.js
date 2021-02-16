'use strict';

{
  const bookTitles = [
    'the_capture',
    'the_journey',
    'the_rescue',
    'the_siege',
    'the_shattering',
    'the_burning',
    'the_hatchling',
    'the_outcast',
    'the_first_collier',
    'the_coming_of_hoole',
  ];
  const bookCovers = {
    the_capture: './img/thecapture.jpg',
    the_journey: './img/thejourney.jpg',
    the_rescue: './img/therescue.jpg',
    the_siege: './img/thesiege.jpg',
    the_shattering: './img/theshattering.jpg',
    the_burning: './img/theburning.jpg',
    the_hatchling: './img/thehatchling.jpg',
    the_outcast: './img/theoutcast.jpg',
    the_first_collier: './img/thefirstcollier.jpg',
    the_coming_of_hoole: './img/thecomingofhoole.jpg',
  };
  const guardiansOfGahooleSeries = {
    the_capture: {
      title: 'The Capture',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_journey: {
      title: 'The Journey',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_rescue: {
      title: 'The Rescue',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_siege: {
      title: 'The Siege',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_shattering: {
      title: 'The Shattering',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_burning: {
      title: 'The Burning',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_hatchling: {
      title: 'The Hatchling',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_outcast: {
      title: 'The Outcast',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_first_collier: {
      title: 'The First Collier',
      language: 'English',
      author: 'Kathryn Lasky',
    },
    the_coming_of_hoole: {
      title: 'The Coming of Hoole',
      language: 'English',
      author: 'Kathryn Lasky',
    },
  };

  // list bookTitle from array called bookTitles
  // const listItems = bookTitles => {
  //   const ul = document.createElement('ul');
  //   document.body.appendChild(ul);
  //   for (let i = 0; i < bookTitles.length; i++) {
  //     const li = document.createElement('li');
  //     const bookTitle = bookTitles[i];
  //     li.innerHTML = bookTitle;
  //     ul.appendChild(li);
  //   }
  // };
  // listItems(bookTitles);
  const listItems = (ids, bookInfo) => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < ids.length; i++) {
      const li = document.createElement('li');
      const id = ids[i];
      const bookInfoKeys = Object.keys(bookInfo);
      if (id === bookInfoKeys[i]) {
        li.innerHTML = bookInfo[bookInfoKeys[i]].title;
        ul.appendChild(li);
      }
    }
  };
  listItems(bookTitles, guardiansOfGahooleSeries);

  // const listItems = (img, info) => {
  //   const ul = document.createElement('ul');
  //   document.body.appendChild(ul);
  //   const imgKeys = Object.keys(img);
  //   const infoKeys = Object.keys(info);
  //   for (let i = 0; i < infoKeys.length; i++) {
  //     const li = document.createElement('li');
  //     const image = document.createElement('img');
  //     const heading = document.createElement('h1');
  //     const subHeading1 = document.createElement('h2');
  //     const subHeading2 = document.createElement('h2');

  //     // accessing values inside object
  //     const title = info[infoKeys[i]].title;
  //     const language = info[infoKeys[i]].language;
  //     const author = info[infoKeys[i]].author;
  //     heading.innerHTML = title;
  //     subHeading1.innerHTML = `Language: ${author}`;
  //     subHeading2.innerHTML = `Author: ${language}`;

  //     const check = () => {
  //       if (image) {
  //       }
  //     };
  //     image.src = img[imgKeys[i]];

  //     ul.appendChild(li);
  //     li.appendChild(image);
  //     li.appendChild(heading);
  //     li.appendChild(subHeading1);
  //     li.appendChild(subHeading2);
  //   }
  // };

  // listItems(bookCovers, guardiansOfGahooleSeries);
}
