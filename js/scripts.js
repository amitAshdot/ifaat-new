document.addEventListener("DOMContentLoaded", function () {
    // When the user scrolls the page, execute myFunction
    // window.onscroll = function () { setFixed() };
    // let header = document.getElementById("header");
    // let viewPortWidth = window.innerWidth
    // let sticky = viewPortWidth * 0.011111 * 5;//5% of the viewport width
    // const setFixed = () => {
    //     if (window.pageYOffset > sticky)
    //         header.classList.add("sticky");
    //     else
    //         header.classList.remove("sticky");
    // }

    // -----START ISONSCREEN-----
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    const isElementInViewport = el => {
        const pixFromElementTop = 1;
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        let rect = el.getBoundingClientRect();
        return (
            (rect.top + pixFromElementTop <= 0 && rect.bottom >= 0) ||
            (rect.bottom + pixFromElementTop >=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top + pixFromElementTop <=
                (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.top + pixFromElementTop >= 0 &&
                rect.bottom + pixFromElementTop <=
                (window.innerHeight || document.documentElement.clientHeight))
        );
    };
    // Detect request animation frame
    let scroll =
        window.requestAnimationFrame ||
        // IE Fallback
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    let elementsToShow = document.querySelectorAll(".show-on-scroll");

    const loop = () => {
        Array.prototype.forEach.call(elementsToShow, function (element) {
            if (isElementInViewport(element)) {
                element.classList.add("is-visible");
            } else {
                element.classList.remove("is-visible");
            }
        });
        scroll(loop);
    };

    // Call the loop for the first time
    loop();

    // -----END ISONSCREEN-----

    // -----START URL PARAMS-----
    //get url params

    //get url params
    // const queryString = window.location.search
    // try {
    //     const urlParams = new URLSearchParams(queryString)
    //     const campaign = urlParams.get('campaign')
    //     const keyword = urlParams.get('keyword')
    //     const utmSource = urlParams.get('utm-source')
    //     if (!utmSource) {
    //         let inputCampaign = document.getElementsByClassName('campaign')
    //         let inputTerm = document.getElementsByClassName('term')
    //         let campaignArray = [...inputCampaign]
    //         let termArray = [...inputTerm]
    //         campaignArray.map(item => (item.value = campaign))
    //         termArray.map(item => (item.value = keyword))
    //         //ONANDOFF FUNCTION START
    //         timerPlus("5e2d900e4369e40017de9383");
    //     }
    //     else {
    //         let phone = $("a[href='tel:072-3944129']")
    //         let phoneArray = [...phone]
    //         phoneArray.map(item => {
    //             item.href = "tel:0747691374"
    //             if (item.innerHTML !== " חייג לנציג ") {
    //                 item.innerHTML = "לנציג מכירות ללא המתנה חייגו :<br>074-7691374"
    //             }
    //         })

    //         let originatingleadcode = $("input[name=originatingleadcode]")
    //         originatingleadcode.each(function () {
    //             $(this).val('51');
    //         })
    //         //ONANDOFF FUNCTION START
    //         timerPlus("607c0b19080fb70017a6d963");
    //     }
    // }
    // catch (err) {

    // }
    // // -----END URL PARAMS-----
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
        // const re = /^[0-9]{10}$/;
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
    const submitForm = (e) => {
        if (validateForm()) {
            return true
        } else {
            e.preventDefault();
            return false
        }
    }
    document.getElementById("form").addEventListener("submit", submitForm);
    // -----END EMAIL VALIDATION-----



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
        const circle = $('.circle');

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
});