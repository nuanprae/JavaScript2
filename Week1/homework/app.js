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
    to_be_a_king: {
      title: 'To Be a King',
      language: 'English',
      author: 'Kathryn Lasky',
    },
  };
  const bookCovers = {
    the_journey: './img/thejourney.jpg',
    the_rescue: './img/therescue.jpg',
    the_siege: './img/thesiege.jpg',
    the_shattering: './img/theshattering.jpg',
    the_burning: './img/theburning.jpg',
    the_hatchling: './img/thehatchling.jpg',
    the_outcast: './img/theoutcast.jpg',
    the_first_collier: './img/thefirstcollier.jpg',
    the_coming_of_hoole: './img/thecomingofhoole.jpg',
    the_capture: './img/thecapture.jpg',
  };

  // Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.
  // const generateLi = array => {
  //   const ul = document.createElement('ul');
  //   document.body.appendChild(ul);
  //   for (const element of array) {
  //     const li = document.createElement('li');
  //     li.innerHTML = element;
  //     ul.appendChild(li);
  //   }
  // };

  const generateHeader = name => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = name;
    document.body.appendChild(header);
    header.appendChild(h1);
    header.setAttribute('class', 'header');
  };
  // generate li that includes info and book cover for each li (appended to one ul)
  const generateItems = (list, info) => {
    const section = document.createElement('section');
    document.body.appendChild(section);
    // loop over bookTitles array and append each li to ul (book info and book cover)
    for (const key of list) {
      const article = document.createElement('article');
      section.appendChild(article);
      article.setAttribute('id', key);

      const ul = document.createElement('ul');
      article.appendChild(ul);

      const title = document.createElement('li');
      ul.appendChild(title);
      title.innerHTML = info[key].title;
      title.setAttribute('class', 'title');

      const language = document.createElement('li');
      ul.appendChild(language);
      language.innerHTML = `Language: ${info[key].language}`;

      const author = document.createElement('li');
      ul.appendChild(author);
      author.innerHTML = `Author: ${info[key].author}`;
    }
  };

  const injectImage = images => {
    for (const key of Object.keys(images)) {
      const img = document.createElement('img');
      img.src = images[key];
      img.alt = key;
      document
        .getElementById(key)
        .querySelector('ul')
        .appendChild(img);
    }
  };

  // generate page
  generateHeader("Guardians of Ga'Hoole");
  generateItems(bookTitles, guardiansOfGahooleSeries);
  injectImage(bookCovers);
}
