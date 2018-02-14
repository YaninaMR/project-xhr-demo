$('#search-keyword').on('submit', (e) => {
    var searchNew = $('#search-keyword').val();
    getnews(searchNew);
    e.preventDefault();
  });
function getNews(searchNew) {
    axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=b9ce7f78872e46f19ea9410794908a65')
      .then((response) => {
        console.log(response);
        var news = response.data.Search;
        var output = '';
        $.each(news, (index, newone) => {
          var pelis = ('<div class="col-md-3"><div class="well text-center"><img src=\'' + news[index].Poster + '\' class="img-responsive"><h5>' + news[index].Title + '</h5><a id=' + news[index].imdbID + ' class="btn btn-primary" href="#">Movie Details</a></div></div>');
          $('#news').prepend(pelis); 
         
          $('#' + news[index].imdbID + '').on('click', function() {
            localStorage.codeNum = news[index].imdbID;
            $(location).attr('href', 'movie.html');
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }