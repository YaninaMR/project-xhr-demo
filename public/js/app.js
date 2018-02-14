
  const form = document.getElementById('search-form');
  const searchField = document.getElementById('search-keyword');
  const responseContainer = document.getElementById('response-container');
  let searchedForText;
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
  });

  function getNews(){
   const articleRequest = new XMLHttpRequest();
   articleRequest.open('GET',`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=b9ce7f78872e46f19ea9410794908a65`);
   articleRequest.onload  = addNews;
   articleRequest.onerror = handleError;
   articleRequest.send();
  }

  function handleError(){
      console.log('Se ha presentado un error');
  }

  function addNews(){
   const data = JSON.parse(this.responseText);
   console.log(data);
   const response = data.response;
   console.log(response);
   const article = data.response.docs[0];
   const title = article.headline.main;
   const snippet = article.snippet;

   let li = document.createElement('li');
   li.className = 'articleClass';
   li.innerText = snippet;
   
   responseContainer.appendChild(li);
  }

