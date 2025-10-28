var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
  if (xhr.status === 200) {
    var data = xhr.response;
    var articles = data.articles;
    var container = document.getElementById('articles');

    articles.forEach(function (item) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = item.title;

      var description = document.createElement('p');
      description.textContent = item.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      item.ways_to_achieve.forEach(function (way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      item.benefits.forEach(function (benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Append all elements properly
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      container.appendChild(articleDiv);
    });
  } else {
    console.error('Error loading JSON:', xhr.status);
  }
};

xhr.send();
