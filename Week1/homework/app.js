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
  const listItems = (ids, info, images) => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < ids.length; i++) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const heading = document.createElement('h1');
      const subHeading1 = document.createElement('h2');
      const subHeading2 = document.createElement('h2');
      li.setAttribute('id', ids[i]);

      ul.appendChild(li);
      const id = li.getAttribute('id');
      const src = images[id];
      const title = info[id].title;
      const language = info[id].language;
      const author = info[id].author;

      img.src = src;
      heading.innerHTML = title;
      subHeading1.innerHTML = `Language: ${language}`;
      subHeading2.innerHTML = `Author: ${author}`;

      li.appendChild(img);
      li.appendChild(heading);
      li.appendChild(subHeading1);
      li.appendChild(subHeading2);
    }
  };
  listItems(bookTitles, guardiansOfGahooleSeries, bookCovers);
}
