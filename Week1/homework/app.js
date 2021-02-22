'use strict';

{
  // const bookTitles = [
  //   'the_capture',
  //   'the_journey',
  //   'the_rescue',
  //   'the_siege',
  //   'the_shattering',
  //   'the_burning',
  //   'the_hatchling',
  //   'the_outcast',
  //   'the_first_collier',
  //   'the_coming_of_hoole',
  // ];

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

  const books = {
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

  // generate li that includes info and book cover for each li (appended to one ul)
  const generateBooks = info => {
    const section = document.createElement('section');
    const ul = document.createElement('ul');
    for (const key of Object.keys(info)) {
      const li = document.createElement('li');
      li.setAttribute('id', key);
      const title = document.createElement('h2');
      const language = document.createElement('h3');
      const author = document.createElement('h3');

      title.innerText = info[key].title;
      language.innerText = `Language: ${info[key].language}`;
      author.innerText = `Author: ${info[key].author}`;

      li.appendChild(title);
      li.appendChild(language);
      li.appendChild(author);

      ul.appendChild(li);
    }
    section.appendChild(ul);
    document.body.appendChild(section);
  };

  const injectImage = images => {
    for (const key of Object.keys(images)) {
      const img = document.createElement('img');
      img.src = images[key];
      img.alt = key;
      document.getElementById(key).appendChild(img);
    }
  };

  // generate page
  generateBooks(books);
  injectImage(bookCovers);
}
