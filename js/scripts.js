document.addEventListener("DOMContentLoaded", function () {
    // -----START URL PARAMS-----
    try {
        //ONANDOFF FUNCTION START
        timerPlus("5e2d900e4369e40017de9383");
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const campaign = urlParams.get('campaign')
        const keyword = urlParams.get('keyword')
        // const utmSource = urlParams.get('utm-source')
        //   if(!utmSource){
        let inputCampaign = document.getElementsByClassName('campaign')
        let inputTerm = document.getElementsByClassName('term')
        let campaignArray = [...inputCampaign]
        let termArray = [...inputTerm]
        campaignArray.map(item => (item.value = campaign))
        termArray.map(item => (item.value = keyword))
    }
    catch (err) {

    }
    // -----END URL PARAMS-----

    // -----START EMAIL VALIDATION-----
    const isNumberKey = (evt) => {
        let charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    let phoneNumberInput = document.getElementById("phone");
    phoneNumberInput.onkeypress = isNumberKey

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePhone = (phone) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return re.test(String(phone));
    }

    const validateForm = () => {
        let flag = false, name = document.getElementById("name"), email = document.getElementById("email"),
            phone = document.getElementById("phone"), customer = document.getElementById("customer");
        message = document.getElementById("message");

        if (name.value.length < 2) {
            name.classList.add("error");
            flag = true;
        }
        if (validateEmail(email.value) === false) {
            email.classList.add("error");
            flag = true;
        }
        if (validatePhone(phone.value) === false) {
            phone.classList.add("error");
            flag = true;
        }
        if (customer.value === "") {
            customer.classList.add("error");
            flag = true;
        }
        if (flag) {
            message.innerHTML = "אנא מלא/י את כל השדות הנדרשים";
            message.classList.add("error");
        }
        return flag ? false : true;
    }
    // const submitForm = (e) => {
    //     if (validateForm()) {
    //         return true
    //     } else {
    //         e.preventDefault();
    //         return false
    //     }
    // }
    // document.getElementById("form").addEventListener("submit", submitForm);
    // -----END EMAIL VALIDATION-----

    // -----START EMAIL SUBMIT-----
    $('#form').submit(function (e) {
        if (validateForm()) {
            e.preventDefault();
            var data = $(this).serialize();
            $.ajax({
                type: "POST",
                url: 'https://app.powerlink.co.il/web/webtoaccount.aspx',
                data: data,
                success: function (answer) {
                    $.ajax({
                        type: "POST",
                        url: 'mail.php',
                        data: data,
                        success: function (mail) {
                            window.location.href = 'thanks.html';
                        }
                    });
                }
            });
            return true
        } else {
            e.preventDefault();
            return false
        }
    });
    // -----END EMAIL SUBMIT-----


    // -----START CAROUSEL-----
    $('.carousel').slick({
        dots: true,
        // infinite: true,
        speed: 300,
        slidesToShow: 5.5,
        slidesToScroll: 3,
        nextArrow: $('.slick-next'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.15,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
    // -----END CAROUSEL-----


    // -----START toggleCta CTA-----
    const toggleCta = () => {
        const footer = $('.footer-section');
        if ($('.footer-section:visible').length === 0) {
            footer.fadeIn(300);
            footer.addClass("mobile");
        } else {
            footer.fadeOut(300);
            footer.removeClass("mobile");
        }
    }
    document.getElementById("close").addEventListener("click", toggleCta);
    document.getElementById("ctaButton").addEventListener("click", toggleCta);
    // -----END toggleCta CTA-----

    // -----START ONCLICK CAROUSEL-----
    const onClickCarousel = (e) => {
        let screenWidth = window.innerWidth;
        if (screenWidth < 900) {
            toggleCta()
        } else {
            $('form').addClass('active');
            $("#name").focus();
        }
    }
    $('.cta').click(onClickCarousel);
    // -----END ONCLICK CAROUSEL-----

    // -----START SCROLL ON CLICK-----
    $('input').focus(function () {
        $('footer').animate({ scrollTop: 1000 }, 'slow');
        return false;
    });
    // -----END SCROLL ON CLICK-----
});