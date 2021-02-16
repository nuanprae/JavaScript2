'use strict';

{
  const guardiansOfGahooleSeries = {
    the_capture: {
      title: 'The Capture',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/thecapture.jpg',
    },
    the_journey: {
      title: 'The Journey',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/thejourney.jpg',
    },
    the_rescue: {
      title: 'The Rescue',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/therescue.jpg',
    },
    the_siege: {
      title: 'The Siege',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/thesiege.jpg',
    },
    the_shattering: {
      title: 'The Shattering',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/theshattering.jpg',
    },
    the_burning: {
      title: 'The Burning',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/theburning.jpg',
    },
    the_hatchling: {
      title: 'The Hatchling',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/thehatchling.jpg',
    },
    the_outcast: {
      title: 'The Outcast',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/theoutcast.jpg',
    },
    the_first_collier: {
      title: 'The First Collier',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/thefirstcollier.jpg',
    },
    the_coming_of_hoole: {
      title: 'The Coming of Hoole',
      language: 'English',
      author: 'Kathryn Lasky',
      bookCover: './img/thecomingofhoole.jpg',
    },
  };

  const listItems = obj => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const heading = document.createElement('h1');
      const subHeading1 = document.createElement('h2');
      const subHeading2 = document.createElement('h2');
      const key = keys[i];
      const title = obj[key].title;
      const language = obj[key].language;
      const author = obj[key].author;
      const bookCover = obj[key].bookCover;
      img.src = bookCover;
      heading.innerHTML = title;
      subHeading1.innerHTML = `Language: ${author}`;
      subHeading2.innerHTML = `Author: ${language}`;

      ul.appendChild(li);
      li.appendChild(img);
      li.appendChild(heading);
      li.appendChild(subHeading1);
      li.appendChild(subHeading2);
    }
  };

  listItems(guardiansOfGahooleSeries);
}
