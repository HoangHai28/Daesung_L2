var CLICK = {
    fixedMenu: function () {
        var header = document.querySelector(".header");
        var headerTop = document.querySelector(".header-top");
        var headerHeight = header.offsetHeight;
        var headerTopHeight = headerTop.offsetHeight;
        var width_ = window.innerWidth;
        document.body.style.paddingTop = headerHeight + "px";
        header.classList.add("fixed");
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (width_ >1024) {
                        header.style.top = "0px";
                    }
                    header.classList.remove("scroll");
                } else {
                    if(width_ >1024) {
                        header.style.top = "_"  + headerTopHeight +"px";
                    }
                    header.classList.add("scroll");
                }
            });
        });
        observer.observe(document.querySelector(".header-scroll-watched"));
    },
    showMenu: function () {
        var buttonShowMenu = document.querySelector(".show-menu-moblie");
        var closeMenu = document.querySelector(".over-lay");

        if (buttonShowMenu != null) {
            buttonShowMenu.addEventListener("click", function() {
                document.querySelector(".menu").classList.add("active");
                document.querySelector(".over-lay").classList.add("show");
                document.body.classList.add("show-menu");
                document.documentElement.classList.add("show-menu");
            });
        }

        if(closeMenu != null) {
            closeMenu.addEventListener("click", function() {
                document.querySelector(".menu").classList.remove("active");
                document.querySelector(".over-lay").classList.remove("show");
                document.body.classList.remove("show-menu");
                document.documentElement.classList.remove("show-menu");
            });
        }

        var width_= window.innerWidth;
        if (width_ < 1024) {
            var listIitemLi = document.querySelectorAll(".menu li");
            listIitemLi.forEach(function(element) {
                if (element.querySelector("ul") != null) {
                    var span = document.createElement("span");
                    span.classList.add("btn-dropdown-menu");
                    span.innerHTML = `<i class = "fa fa-angle-down" aria-hidden="true"></i>`;
                    element.appendChild(span);
                }
            });
            var listBtnDropdownMenu = document.querySelectorAll(
                ".menu .btn-dropdown-menu"
            );
            var timeSlide = 300;
            listBtnDropdownMenu.onClick(function(event) {
                var _this = Tech.$(this);
                _this.css("pointer-events", "none");
                setTimeout(function() {
                    _this.css("pointer-events", "all");
                }, timeSlide);
                // var parentLi = Tech.$(this.closest('li'));
                var listUlChild = Tech.$(this).prev("ul");
                _this.toggleClass("open");
                listUlChild.toggleSlide(timeSlide);
            });
        }
    },

    initAnimation: function () {
        var width_ = window.innerWidth;
        if(width_ > 1023) {
            var wow = new WOW();
            wow.init();
        }
    },
    init: function() {
        CLICK.showMenu();
        CLICK.initAnimation();
    }
};

