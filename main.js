jQuery(document).ready(function($) {
    // THIS CODE HAS BEEN MOVED TO: themes/vital/assets/scripts/source/mainnav-controller.js
    // Getting viewport width
    // var responsive_viewport = $(window).width();
    // var topNav = $('.top-nav-actions .search-form');
    // topNav.click(function() {
    //     $(this)
    //         .find('.search-form-field')
    //         .animate({ width: '145px' });
    // });
    //
    // $(document).mouseup(function(e) {
    //     var container = $('.top-nav-actions .search-form');
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         container.find('.search-form-field').animate({ width: '45px' });
    //     }
    // });
    //
    // $(window).on('load resize', function() {
    //     responsive_viewport = $(window).width();
    //     if (responsive_viewport > 768) {
    //         $('.top-nav .utility-hire').appendTo('.top-nav-actions .right');
    //         $('.top-nav .utility-contact').appendTo('.top-nav-actions .right');
    //         $('.top-nav .mobile-nav').remove();
    //     } else {
    //         $('.top-nav-actions .right .utility-hire')
    //             .insertAfter('#blog-hover')
    //             .wrap('<li class="mobile-nav"></li>');
    //         $('.top-nav-actions .right .utility-contact')
    //             .insertAfter('#blog-hover')
    //             .wrap('<li class="mobile-nav"></li>');
    //     }
    // });

    $("#prev-vitalian").click(function() {
        setTimeout(function() {
            if (
                !$(".team-slideshow")
                    .find(".cycle-slide-active")
                    .data("cycle-hash")
            ) {
                var loc = window.location;
                if ("pushState" in history) {
                    history.pushState(
                        "",
                        document.title,
                        loc.pathname + loc.search
                    );
                }
            }
        }, 200);
    });
    $("#next-vitalian").click(function() {
        setTimeout(function() {
            if (
                !$(".team-slideshow")
                    .find(".cycle-slide-active")
                    .data("cycle-hash")
            ) {
                var loc = window.location;
                if ("pushState" in history) {
                    history.pushState(
                        "",
                        document.title,
                        loc.pathname + loc.search
                    );
                }
            }
        }, 200);
    });
    // Homepage Scrollers
    if ($(".smoothScroll").length) {
        $("body").pageScroller({
            navigation: ".scrollDown"
        });
    }
    // Homepage Animated Hero
    var wipe = $(".wipe");
    var wrapper = $("#animated-intro");
    var circle = $("#circle-animate");
    var heading = $("#circle-animate-h1");
    var logo = $("#vital-logo");
    var links = $("#link-set");
    setTimeout(function() {
        wrapper.addClass("go");
    }, 1000);
    setTimeout(function() {
        circle.addClass("go");
    }, 2000);
    setTimeout(function() {
        logo.addClass("go");
    }, 3200);
    setTimeout(function() {
        heading.addClass("go");
    }, 5500);
    setTimeout(function() {
        links.addClass("go animated fadeInUp");
    }, 6800);

    var accT = $(".accordion-title"),
        accC = $(".accordion-content");

    //if any accordion titles have the class "open" show the respective accordion content on page load
    if (accT.hasClass("open")) accTOpen.next(accC).show();

    //use accordion.single to open / close a single accordion
    //use accordion.multi to open selected accordion and close all others
    accordion = {
        single: function() {
            $(this).toggleClass("open").next(accC).slideToggle(500);
        },
        multi: function() {
            accT.removeClass("open");
            accC.slideUp(300);

            if ($(this).next(accC).is(":visible")) return false;

            $(this).addClass("open").next(accC).slideToggle(300);
        }
    };
    //I hate optin monster
    $("#gform_40, #gform_41").css("text-align", "center");

    accT.on("click", accordion.single);

    //Lead Capture Page add class to the last word
    var currtext = $(
        ".page-template-lead-capture-php .home-section-description"
    ).text();
    currtext = currtext.substring(0, currtext.lastIndexOf(" "));
    var last_arr = $(".home-section-description").text().split(" ");
    var las = last_arr[last_arr.length - 1];
    $(".page-template-lead-capture-php .home-section-description").replaceWith(
        '<div class="home-section-description white">' +
            currtext +
            " <strong>" +
            las +
            "</strong></div>"
    );

    if ($("#content-slider-1").length) {
        $("#content-slider-1").slick({
            autoplay: true,
            autoplaySpeed: 4200,
            speed: 400
        });
    }

    if ($("#content-slider-2").length) {
        $("#content-slider-2").slick({
            autoplay: true,
            autoplaySpeed: 4200,
            speed: 400
        });
    }

    if ($("#services-page-project-slider").length) {
        $("#services-page-project-slider").slick({
            autoplay: true,
            autoplaySpeed: 4200,
            speed: 400,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev-next slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" width="26"><path d="M6 7L0 1l1-1 5 5 5-5 1 1z"></path></svg></button>',
            nextArrow: '<button type="button" class="slick-prev-next slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" width="26"><path d="M6 7L0 1l1-1 5 5 5-5 1 1z"></path></svg></button>',
        
        });
    }

    //Easter Egg Trigger
    //$.finishHim('https://vtldesign.com/wp-content/themes/vital/legacy/js/easter-egg/src/public/product');

    if ($("#team").length) {
        $(".avatar-nav").click(function() {
            offsetTop = $("#team");
            $("html, body").animate({
                scrollTop: offsetTop
            });
        });
    }

    // $(".superbox").SuperBox();

    // $(".slider").bxSlider({
    //     pagerCustom: "#bx-pager"
    // });

    //ebook title. sorry.
    $("#gform_wrapper_1 .gform_title, #gform_wrapper_36 .gform_title").text(
        "Get The eBook"
    );
    //ebook move the privacy policy. sorry.
    //$('#field_36_9 .gfield_required').prepend($('#field_36_9 .gfield_description'));

    // Mix It Up Stuff - the top handles the checkbox filtering functionality.

    var numTypes = $(".type .checkbox").length;
    var numTopics = $(".topic .checkbox").length;
    var addheight = numTypes * 50 + 10;
    var addheight1 = numTopics * 50 + 10;

    $(".type").mouseenter(function() {
        $(".controls", this).show();
        $(".type").animate(
            {
                height: addheight
            },
            500
        );
    });
    $(".type").mouseleave(function() {
        $(".controls", this).hide();
        $(".type").animate(
            {
                height: "33px"
            },
            200
        );
    });
    $(".topic").mouseenter(function() {
        $(".controls", this).show();
        $(".topic").animate(
            {
                height: addheight1
            },
            500
        );
    });
    $(".topic").mouseleave(function() {
        $(".controls", this).hide();
        $(".topic").animate(
            {
                height: "33px"
            },
            200
        );
    });

    var checkboxFilter = {
        $filters: null,
        $reset: null,
        groups: [],
        outputArray: [],
        outputString: "",

        init: function() {
            var self = this;

            self.$filters = $("#Filters, #Filters2, #Filters3, #Filters4");
            self.$container = $(".resource-page");

            self.$filters.find("fieldset").each(function() {
                self.groups.push({
                    $inputs: $(this).find("input"),
                    active: [],
                    tracker: false
                });
            });

            self.bindHandlers();
        },

        bindHandlers: function() {
            var self = this;

            self.$filters.on("change", function() {
                self.parseFilters();
            });
        },

        parseFilters: function() {
            var self = this;

            for (var i = 0, group; (group = self.groups[i]); i++) {
                group.active = []; // reset arrays
                group.$inputs.each(function() {
                    $(this).is(":checked") && group.active.push(this.value);
                });
                group.active.length && (group.tracker = 0);
            }

            self.concatenate();
        },

        concatenate: function() {
            var self = this,
                cache = "",
                crawled = false,
                checkTrackers = function() {
                    var done = 0;

                    for (var i = 0, group; (group = self.groups[i]); i++) {
                        group.tracker === false && done++;
                    }

                    return done < self.groups.length;
                },
                crawl = function() {
                    for (var i = 0, group; (group = self.groups[i]); i++) {
                        group.active[group.tracker] &&
                            (cache += group.active[group.tracker]);

                        if (i === self.groups.length - 1) {
                            self.outputArray.push(cache);
                            cache = "";
                            updateTrackers();
                        }
                    }
                },
                updateTrackers = function() {
                    for (var i = self.groups.length - 1; i > -1; i--) {
                        var group = self.groups[i];

                        if (group.active[group.tracker + 1]) {
                            group.tracker++;
                            break;
                        } else if (i > 0) {
                            group.tracker && (group.tracker = 0);
                        } else {
                            crawled = true;
                        }
                    }
                };

            self.outputArray = []; // reset output array

            do {
                crawl();
            } while (!crawled && checkTrackers());

            self.outputString = self.outputArray.join();
            !self.outputString.length && (self.outputString = "all");

            if (self.$container.mixItUp("isLoaded")) {
                self.$container.mixItUp("filter", self.outputString);
            }
        }
    };

    checkboxFilter.init();

    var resources = $(".resource-page");

    if (resources.length > 0) {
        resources.mixItUp({
            controls: {
                enable: false // we won't be needing these
            },
            animation: {
                easing: "cubic-bezier(0.86, 0, 0.07, 1)",
                duration: 600,
                animateResizeContainer: false,
                effects: "fade rotateX(-45deg) translateY(-10%)"
            },
            layout: {
                display: "block"
            }
        });
    }

    /*  ==========================================================================
     CAREERS PAGE
    ==========================================================================  */

    // Accordion
    $("#jobs-accordion:first").each(function() {
        var $trigger = $(".jobs-accordion-header"),
            $content = $(".jobs-accordion-content"),
            hash = window.location.hash.substring(1);
        $content.hide();

        if (hash) {
            var $hashTarget = $("[data-hash='" + hash + "']"),
                $hashParent = $hashTarget.closest(".jobs-accordion-item"),
                $hashContent = $hashParent.find(".jobs-accordion-content");

            $(".jobs-accordion-content").not($hashContent).slideUp(200);
            $(".jobs-accordion-item").not($hashParent).removeClass("active");
            $hashParent.addClass("active");
            $hashContent.slideDown(200);
        }

        $trigger.on("click", function(event) {
            event.preventDefault();

            var $parent = $(this).closest(".jobs-accordion-item"),
                $content = $parent.find(".jobs-accordion-content"),
                hash = $parent.attr("data-hash");

            if ($parent.hasClass("active")) {
                $content.slideUp("fast");
                $parent.removeClass("active");
            } else {
                window.location.hash = hash;
                $(".jobs-accordion-content").not(this).slideUp(200);
                $(".jobs-accordion-item").not($parent).removeClass("active");
                $parent.addClass("active");
                $content.slideDown(200);

                setTimeout(function() {
                    $("html, body").animate(
                        {
                            scrollTop: $parent.offset().top - 70
                        },
                        500
                    );
                }, 200);
            }
        });
    });

    /**
     * Now hiring console message
     */
    if (window.console) {
        (function() {
            var ascii_logo =
                    "           $$\\   $$\\               $$\\\n           \\__|  $$ |              $$ |\n$$\\    $$\\ $$\\ $$$$$$\\    $$$$$$\\  $$ |\n\\$$\\  $$  |$$ |\\_$$  _|   \\____$$\\ $$ |\n \\$$\\$$  / $$ |  $$ |     $$$$$$$ |$$ |\n  \\$$$  /  $$ |  $$ |$$\\ $$  __$$ |$$ |\n   \\$  /   $$ |  \\$$$$  |\\$$$$$$$ |$$ |$$\\\n    \\_/    \\__|   \\____/  \\_______|\\__|\\__|",
                ascii_style = ["color: #ff7200"].join(";"),
                headline = "Now Hiring Web Developers!",
                headline_style = [
                    "font-weight: bold",
                    "color: #ff7200",
                    "line-height: 2",
                    "font-size: 20px"
                ].join(";"),
                message = [
                    "Vital is constantly growing, so we’re always on the lookout for new people who really takes pride in enhancing a project — someone who likes making a project cooler, not just simply completing it. We are looking for an interactivity enthusiast, obsessed with the presentation layer of the project. You would join a team of creative designers and developers to plan and execute some pretty awesome projects.",
                    "Find out more about us (and our sweet job perks) at http://vtldesign.com/so-you-want-to-work-at-vital"
                ].join("\n\n"),
                message_style = [
                    "color: #ff7200",
                    "line-height:1.5",
                    "font-size:12px"
                ].join(";");

            console.log("%c" + ascii_logo, ascii_style);
            console.log("%c" + headline, headline_style);
            console.log("%c" + message, message_style);
        })();
    }


    /*Scroll animation location page */
    $(".vital-locations .arrow-down").click(function(e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $("#gallery-slider").offset().top - 128
            },
            2000
        );
    });

    /* Circle animation */
    if ($(".stats").length) {
        $(document).on("scroll", function() {
            checkAnimation();
        });
    }
    function isElementInViewport(elem) {
        var $elem = $(elem);
        var scrollElem =
            navigator.userAgent.toLowerCase().indexOf("webkit") != -1
                ? "body"
                : "html";
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elemTop = Math.round($elem.offset().top);
        var elemBottom = elemTop + $elem.height();
        return elemTop < viewportBottom && elemBottom > viewportTop;
    }
    function checkAnimation() {
        var $elem = $(".stats");
        if (isElementInViewport($elem)) {
            if ($elem.hasClass("start")) return;
            statsAnimate();
            $elem.addClass("start");
        }
    }
    function statsAnimate() {
        $(".vital-locations .stats-title").each(function() {
            var statvalue = $(this).text().replace(/[^0-9\.]/g, "");
            var statText = $(this).text().replace(/\d+/g, "");
            var stattext = statText.replace(/\./g, "");
            if ($(this).closest(".stats-content").index() !== 0) {
                if (statvalue % 1 == 0) {
                    $(this).prop("Counter", 0).animate(
                        {
                            Counter: statvalue
                        },
                        {
                            duration: 3000,
                            easing: "swing",
                            step: function(now) {
                                $(this).text(parseInt(now).toLocaleString());
                            }
                        }
                    );
                } else {
                    $(this).prop("Counter", 0).animate(
                        {
                            Counter: statvalue
                        },
                        {
                            duration: 3000,
                            easing: "swing",
                            step: function(now) {
                                $(this).text(parseFLoat(now).toLocaleString());
                            }
                        }
                    );
                }
            } else {
                $(this).countTo({
                    from: new Date().getFullYear(),
                    to: statvalue,
                    speed: 3000,
                    refreshInterval: 50
                });
            }
        });
    }

    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof options.onUpdate == "function") {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof options.onComplete == "function") {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    var placeSlideshow = $("#place-slideshow");
    if (placeSlideshow.length) {
        var slideCount = $("#place-slideshow .slider-content").length;
        // Carousel
        clearTimeout(reinitTimer);
        reinitTimer = setTimeout(reinit_cycle, 100); // Timeout limits the number of calculations
        var reinitTimer;
        $(window).resize(function($) {
            clearTimeout(reinitTimer);
            reinitTimer = setTimeout(reinit_cycle, 100); // Timeout limits the number of calculations
        });
    }

    /*  ==========================================================================
        Cycle Carousel
       ==========================================================================  */

    function reinit_cycle() {
        var width = $(window).width(); // Checking size again after window resize
        var placeNav = $(".prev-next");
        if (width < 500) {
            placeSlideshow.cycle("destroy");
            reinitCycle(1);
        } else if (width > 500 && width < 768) {
            placeSlideshow.cycle("destroy");
            reinitCycle(2);
        } else if (width > 768 && width < 800) {
            placeSlideshow.cycle("destroy");
            reinitCycle(3);
        } else if (width > 800 && width < 1100) {
            placeSlideshow.cycle("destroy");
            reinitCycle(4);
            placeNav.show();
            if (slideCount >= 6) {
                placeSlideshow.addClass("no-slider");
            }
        } else if (width > 1200) {
            if (slideCount >= 6) {
                placeSlideshow.cycle("destroy");
                reinitCycle(5);
            } else {
                placeSlideshow.cycle("destroy");
                placeNav.hide();
            }
        } else {
            placeSlideshow.cycle("destroy");
            reinitCycle(5);
        }
    }

    function reinitCycle(visibleSlides) {
        $("#place-slideshow").cycle({
            speed: 1000,
            timeout: 0,
            carouselFluid: false,
            carouselVisible: visibleSlides,
            allowWrap: false,
            fx: "carousel",
            slides: "> div",
            next: "#next-place",
            prev: "#prev-place"
        });
    }
}); // jQUERY END
