'use strict';

{
  const bookTitles = [
    'the_capture',
    'the_journey',
    'the_siege',
    'the_shattering',
    'the_burning',
    'the_hatchling',
    'the_outcast',
    'the_first_collier',
    'the_coming_of_hoole',
    'the_rescue',
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
  };
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

  // Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.
  const generateLi = array => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (const element of array) {
      const li = document.createElement('li');
      li.innerHTML = element;
      ul.appendChild(li);
    }
  };
  const generateHeader = title => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    document.body.appendChild(header);
    header.setAttribute('class', 'title');
  };
  generateHeader("Guardians of Ga'Hoole");

  // generate li that includes info and book cover for each li (appended to one ul)
  const generateItems = (info, images) => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    // loop over bookObj and append each li (with info) to ul
    for (const key of Object.keys(info)) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.setAttribute('id', key);

      const heading = document.createElement('h1');
      li.appendChild(heading);
      heading.innerHTML = info[key].title;

      const subHeading1 = document.createElement('h2');
      li.appendChild(subHeading1);
      subHeading1.innerHTML = `Language: ${info[key].language}`;

      const subHeading2 = document.createElement('h2');
      li.appendChild(subHeading2);
      subHeading2.innerHTML = `Author: ${info[key].author}`;
    }
    // loop over bookCovers object and display the corresponding book cover for each li
    for (const key of Object.keys(images)) {
      const img = document.createElement('img');
      img.src = images[key];
      img.alt = key;
      document.getElementById(key).appendChild(img);
    }
  };
  generateItems(guardiansOfGahooleSeries, bookCovers);
}
