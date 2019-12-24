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
    
    const coll = document.querySelector(".button__coll");
    const main = document.querySelector(".button__main");
    const bay = document.querySelectorAll(".button__mini");
    const popup = document.querySelector(".modal__consultation");
    const baypopup = document.querySelector(".modal__bay");
    const overlay = document.querySelector(".overlay");
    const close = overlay.querySelectorAll(".modal__close");

    bay.forEach(function(item) {
        item.addEventListener("click", function (evt) {
              evt.preventDefault();
              overlay.classList.add("overlay__show");
              baypopup.classList.add("modal__show");
        })
    });

    coll.addEventListener("click", function (evt) {
      evt.preventDefault();
      overlay.classList.add("overlay__show");
      popup.classList.add("modal__show");
    });

    main.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("overlay__show");
        popup.classList.add("modal__show");
      });


    close.forEach(function(item) {
        item.addEventListener("click", function (evt) {
            evt.preventDefault();
              overlay.classList.remove("overlay__show");
              popup.classList.remove("modal__show");
              baypopup.classList.remove("modal__show");
        })
    });

    function valideForm(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          }, 
          tel: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Заполни ник",
            minlength: jQuery.validator.format("Не менее чем из {0} символов!")
          },
          tel: {
            required: "Оставь телефончик",
          },
          email: {
            required: "и почту, мы тебя найдем:)",
          }
        }
      });
    }

    valideForm(consultation__form);
    valideForm(order);
    valideForm(consultation);

    $('input[type=tel]').mask("+375(999) 999-9999"); //маска для телефона в форме
  });






