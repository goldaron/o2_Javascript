/* Open t5 folder in your IDE/editor. Create multiple <article> elements that contain heading, image, image caption and text and populate them with the data from picArray. Add the articles to the <section> element. (5p)
The structure of the articles should be this:
<article class="card">
   <h2>title_from_picArray</h2>
   <figure>
      <img src="medium_image_from_picArray" alt="title_from_picArray">
      <figcaption>caption_from_picArray</figcaption>
   </figure>
   <p>description_from_picArray</p>
</article> */

// Enable strict mode to catch common mistakes and unsafe actions.
// Strict mode makes debugging easier by turning silent errors into throw errors,
// forbidding some syntax that is likely to be problematic, and preventing
// implicit globals.
'use strict';

/*
  Data: picArray

  This array is the single source of truth for the gallery. Each item in the
  array is an object representing one picture along with its metadata.

  Shape of each object:
  {
    title: 'Short title shown as H2',
    caption: 'Short caption shown under the image',
    description: 'Longer paragraph text describing the image',
    image: {
      large: 'path/for/large.jpg',   // intended for linking to full image
      medium: 'path/for/medium.jpg', // intended for in-document thumbnail
    }
  }

  Keeping the data separate from the DOM code makes the module easier to
  maintain and test. You can replace `picArray` with data loaded from an API
  later without changing the rendering logic.
*/
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  // Select the section element where the generated articles will be appended.
  // If the page layout changes and the selector fails, we bail out gracefully.
  const section = document.querySelector('section');
  if (!section) return; // guard: nothing to mount into

  // Loop through the data array and build DOM nodes for each item.
  // Using a simple for-loop keeps the code clear and avoids creating
  // unnecessary closures. If this dataset were very large we'd consider
  // document fragments or virtualization, but for small galleries this is fine.
  for (let i = 0; i < picArray.length; i++) {
    const data = picArray[i]; // local alias to improve readability

    // Create the article container with a semantic class for styling.
    // <article class="card"> ... </article>
    const article = document.createElement('article');
    article.className = 'card';

    // Create and append the title element. Using textContent ensures any
    // characters in the title are escaped and we don't risk injecting HTML.
    // <h2>title</h2>
    const title = document.createElement('h2');
    title.textContent = data.title;
    article.appendChild(title);

    // Build the figure block which groups the image and its caption.
    // <figure>
    //   <img src="..." alt="...">
    //   <figcaption>...</figcaption>
    // </figure>
    const figure = document.createElement('figure');

    // Image element:
    // - src points to the medium-sized image (thumbnail) for the article.
    // - alt text is important for accessibility: we use the title here. If
    //   you have more descriptive alt text in your data, prefer that.
    // - Consider adding loading="lazy" for better performance on long pages.
    const img = document.createElement('img');
    img.src = data.image.medium;
    img.alt = data.title; // accessibility: provide meaningful alt text
    figure.appendChild(img);

    // Caption describing the image. Keep it short — use description for longer text.
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = data.caption;
    figure.appendChild(figcaption);

    // Append the figure to the article
    article.appendChild(figure);

    // Create the descriptive paragraph. Use textContent to avoid accidental HTML injection.
    const description = document.createElement('p');
    description.textContent = data.description;
    article.appendChild(description);

    // Append the fully constructed article into the section.
    // We append directly — for larger datasets consider building a
    // DocumentFragment, appending all children to the fragment, and
    // then appending the fragment to `section` once. That reduces DOM
    // reflows.
    section.appendChild(article);
  }
});
