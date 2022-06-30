$(document).ready(function(){
    /* Open and close menu */
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          close = document.querySelector('.menu__close'),
          menuItem = document.querySelectorAll('.menu__link');
    

    hamburger.addEventListener('click', () => {
        menu.classList.add('active')
    });

    $('.menu__overlay').click(function(e) {
		if ($(e.target).closest('.menu').length) {
			$('.menu').removeClass('active');					
		}
	});
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active')
        });
    });
    
    close.addEventListener('click', () => {
        menu.classList.remove('active')
    });

    /* interactive persent line */
    const percents = document.querySelectorAll('.tech__skills-percent'),
        lines = document.querySelectorAll('.tech__skills-substrip');

    percents.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
    /* form validate */
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
    /* send message from user */
    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });

});

