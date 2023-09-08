// Array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Radiohead', 'The Who'];

// Function to remove articles and sort the names
function sortBandNamesWithoutArticles(names) {
  const articles = ['a', 'an', 'the'];

  // Custom sorting function
  function customSort(a, b) {
    let nameA = a.toLowerCase();
    let nameB = b.toLowerCase();

    // Remove articles from the beginning of each name
    for (const article of articles) {
      if (nameA.startsWith(article)) {
        nameA = nameA.slice(article.length).trim();
        break;
      }
    }

    for (const article of articles) {
      if (nameB.startsWith(article)) {
        nameB = nameB.slice(article.length).trim();
        break;
      }
    }

    return nameA.localeCompare(nameB);
  }

  // Sort the names using the custom sorting function
  names.sort(customSort);

  return names;
}

// Sort the band names without articles
const sortedBandNames = sortBandNamesWithoutArticles(bandNames);

// Create an HTML list
const ul = document.getElementById('band');

for (const name of sortedBandNames) {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
}


    

  




