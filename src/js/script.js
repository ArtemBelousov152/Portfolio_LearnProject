$(document).ready(function(){
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active')
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active')
    });

    const percents = document.querySelectorAll('.tech__skills-percent'),
        lines = document.querySelectorAll('.tech__skills-substrip');

    percents.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    $('.contacts__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: "required",
            checkbox: "required"
        },
        messages: {
            name: {
                required: "Введите ваше имя",
                minlength: jQuery.validator.format("Нужно ввести {0} или больше символов")
            },
            email: {
              required: "Введите свой почтовый адрес",
              email: "Не верный формат почтового адреса"
            },
            checkbox: {
                required: "Подтвердите ознакомление"
            }
        }
    });
    
    $(document).ready(function() {
        $('.hover').on('touchstart touchend', function(e) {
            e.preventDefault();
            $(this).toggleClass('hover_effect');
        });
    });
});

