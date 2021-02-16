'use strict';

{
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

  const listItems = obj => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const li = document.createElement('li');
      const heading = document.createElement('h1');
      const subHeading1 = document.createElement('h2');
      const subHeading2 = document.createElement('h2');
      const key = keys[i];
      const title = obj[key].title;
      const language = obj[key].language;
      const author = obj[key].author;
      // to access a variable in an object needs []
      heading.innerHTML = title;
      subHeading1.innerHTML = `Language: ${language}`;
      subHeading2.innerHTML = `Author: ${author}`;

      ul.appendChild(li);
      li.appendChild(heading);
      li.appendChild(subHeading1);
      li.appendChild(subHeading2);
    }
  };

  listItems(guardiansOfGahooleSeries);
}
