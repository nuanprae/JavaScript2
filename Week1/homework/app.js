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
  };

  const listItems = (keys, obj) => {
    for (let i = 0; i < keys.length; i++) {
      const ul = document.createElement('ul');
      document.body.appendChild(ul);
      const h1 = document.createElement('h1');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const id = keys[i];
      const title = obj[id].title;
      const language = obj[id].language;
      const author = obj[id].author;
      debugger;
      // to access a variable in an object needs []
      h1.innerHTML = title;
      li1.innerHTML = `Language: ${language}`;
      li2.innerHTML = `Author: ${author}`;

      ul.appendChild(h1);
      ul.appendChild(li1);
      ul.appendChild(li2);
    }
  };

  listItems(bookTitles, guardiansOfGahooleSeries);
}
