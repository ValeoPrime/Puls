$(document).ready(function(){
    $('.carusel__inner').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/icons/chevron-left-solid.png" alt="chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/icons/chevron-right-solid.png" alt="chevron-right"></button>'
      });

     $('.catalog__tabs').on('click', 'div:not(.catalog__tab_active)', function() {  //переключение табов
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__items').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) { //переключение описания и откат назад у каждой карточки
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__item__content').eq(i).toggleClass('catalog__item__content__active');
                $('.catalog__item__list').eq(i).toggleClass('catalog__item__list__active');
            })
        });
    };

    toggleSlide('.catalog__item__link');
    toggleSlide('.catalog__item__back');
  });

