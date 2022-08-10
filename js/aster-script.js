const article = document.querySelectorAll('.article'),
    show_more = document.querySelector('.more-articles__show-more'),
    show_article = document.querySelector('.hide-section');


    show_more.addEventListener('click', function(){
        show_article.classList.remove('article-hide');
        show_more.classList.add('more-articles__show-more_hide');
        
    });


    
    article[0].classList.add('article_big');

$(document).ready(function(){
    $('.follow-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,

      }); 
  });


$(document).ready(function(){
    $('.quick-bytes-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true

      }); 
  });

