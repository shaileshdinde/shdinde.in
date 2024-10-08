function initMap() {
  var e = new google.maps.LatLng(40.773328, -73.960088),
    a = {
      zoom: 14,
      center: e,
      mapTypeControl: !1,
      disableDefaultUI: !0,
      zoomControl: !0,
      scrollwheel: !1,
      styles: [
        {
          featureType: "water",
          stylers: [{ color: "#d8dee9" }, { visibility: "on" }],
        },
        { featureType: "landscape", stylers: [{ color: "#eeeeee" }] },
      ],
    },
    n = new google.maps.Map(document.getElementById("map"), a);
  new google.maps.Marker({ position: e, map: n, title: "We are here!" });
}
$(window).on("load", function () {
  var e = $(".preloader");
  e.find(".spinner").fadeOut(function () {
    e.fadeOut();
  });
}),
  $(function () {
    "use strict";
    var e = $(window).width();
    $(window).height();
    $(".subtitle.subtitle-typed").each(function () {
      var e = $(this);
      e.typed({
        stringsElement: e.find(".typing-title"),
        backDelay: 3500,
        typeSpeed: 0,
        loop: !0,
      });
    }),
      $("header, .profile").on("click", ".menu-btn", function () {
        return (
          $(".s_overlay").fadeIn(),
          $(".content-sidebar").addClass("active"),
          $("body,html").addClass("sidebar-open"),
          !1
        );
      }),
      $(".content-sidebar, .container").on(
        "click",
        ".close, .s_overlay",
        function () {
          $(".s_overlay").fadeOut(),
            $(".content-sidebar").removeClass("active"),
            $("body,html").removeClass("sidebar-open");
        }
      ),
      $(".main-menu li.page_item_has_children").each(function () {
        $(this).find("> a").after('<span class="children_toggle"></span>');
      }),
      $(".main-menu").on("click", ".children_toggle", function () {
        var e = $(this).closest(".page_item_has_children");
        e.hasClass("open")
          ? (e.removeClass("open"), e.find("> ul").slideUp(250))
          : (e.addClass("open"), e.find("> ul").slideDown(250));
      }),
      $(".lnk-view-menu").on("click", function () {
        var e = $(this).find(".text").text(),
          a = $(this).find(".text").data("text-open");
        return (
          $(".profile").hasClass("default-menu-open")
            ? ($(".profile").removeClass("default-menu-open"),
              $(this).find(".text").data("text-open", e),
              $(this).find(".text").text(a))
            : ($(".profile").addClass("default-menu-open"),
              $(this).find(".text").data("text-open", e),
              $(this).find(".text").text(a)),
          !1
        );
      });
    var a = $(".container"),
      n = $(".card-inner"),
      t = a.data("animation-in"),
      s = a.data("animation-out");
    function i() {
      var e = $(".skills-list.dotted .progress"),
        a = e.width();
      e.length && e.find(".percentage .da").css({ width: a + 1 });
    }
    $(".top-menu").on("click", "a", function () {
      var e = 1024,
        i = $(window).width(),
        o = $(this).attr("href"),
        l = parseFloat($(o).offset().top),
        r = $(o),
        d = $(".top-menu li"),
        p = $(this).closest("li");
      $(".lnks .lnk.discover");
      return (
        $(".new-skin").length && (e = 1200),
        $(".new-skin").length || (e = 1024),
        i >= e &&
          !p.hasClass("active") & (i > 1023) & $("#home-card").length &&
          (d.removeClass("active"),
          a.find(n).removeClass("animated " + t),
          $(a).hasClass("opened") && a.find(n).addClass("animated " + s),
          p.addClass("active"),
          a.addClass("opened"),
          a.find(r).removeClass("animated " + s),
          a.find(r).addClass("animated " + t),
          $(n).addClass("hidden"),
          $(r).removeClass("hidden"),
          $(r).addClass("active")),
        (i < e) & $("#home-card").length &&
          $("body,html").animate({ scrollTop: l - 100 }, 800),
        !1
      );
    }),
      $(window).on("resize", function () {
        var e = $(window).width(),
          a = ($(window).height(), 1024);
        $(".new-skin").length && (a = 1200),
          $(".new-skin").length || (a = 1024),
          e < a
            ? ($(".card-inner").removeClass("hidden"),
              $(".card-inner").removeClass("fadeOutLeft"),
              $(".card-inner").removeClass("rotateOutUpLeft"),
              $(".card-inner").removeClass("rollOut"),
              $(".card-inner").removeClass("jackOutTheBox"),
              $(".card-inner").removeClass("fadeOut"),
              $(".card-inner").removeClass("fadeOutUp"),
              $(".card-inner").removeClass("animated"),
              $(window).on("scroll", function () {
                var e = $(window).scrollTop();
                $(".top-menu ul li a").each(function () {
                  var a = $(this);
                  $(a.attr("href")).offset().top - 100 <= e &&
                    ($(".top-menu ul li").removeClass("active"),
                    a.closest("li").addClass("active"));
                });
              }),
              $(".card-inner .card-wrap").slimScroll({ destroy: !0 }),
              $(".card-inner .card-wrap").attr("style", ""))
            : ($($(".top-menu li.active a").attr("href")).addClass("active"),
              !$(".page").hasClass("new-skin") &&
                e > a &&
                $(".card-inner .card-wrap").slimScroll({ height: "570px" })),
          setTimeout(i, 750);
      }),
      (e < 1024) & $("#home-card").length &&
        $(window).on("scroll", function () {
          var e = $(window).scrollTop();
          $(".top-menu ul li a").each(function () {
            var a = $(this);
            $(a.attr("href")).offset().top - 76 <= e &&
              ($(".top-menu ul li").removeClass("active"),
              a.closest("li").addClass("active"));
          });
        }),
      !$(".page").hasClass("new-skin") &&
        e > 1024 &&
        $(".card-inner .card-wrap").slimScroll({ height: "570px" }),
      $(".lnks").on("click", ".lnk.discover", function () {
        $('.top-menu a[href="#contacts-card"]').trigger("click");
      });
    var o = $(".grid-items");
    o.imagesLoaded(function () {
      o.isotope({ percentPosition: !0, itemSelector: ".grid-item" });
    }),
      $(".filter-button-group").on("click", ".f_btn", function () {
        var e = $(this).find("input").val();
        o.isotope({ filter: "." + e }),
          $(".filter-button-group .f_btn").removeClass("active"),
          $(this).addClass("active");
      }),
      /\.(?:jpg|jpeg|gif|png)$/i.test(
        $(".gallery-item:first a").attr("href")
      ) &&
        $(".gallery-item a").magnificPopup({
          gallery: { enabled: !0 },
          type: "image",
          closeBtnInside: !1,
          mainClass: "mfp-fade",
        }),
      $(".has-popup-media").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: !0,
        mainClass: "mfp-fade popup-box-inline",
      }),
      $(".has-popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        image: { verticalFit: !0 },
      }),
      $(".has-popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        iframe: {
          patterns: {
            youtube_short: {
              index: "youtu.be/",
              id: "youtu.be/",
              src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
          },
        },
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "mfp-fade",
        callbacks: {
          markupParse: function (e, a, n) {
            e.find("iframe").attr("allow", "autoplay");
          },
        },
      }),
      $(".has-popup-music").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "mfp-fade",
      }),
      $(".has-popup-gallery").on("click", function () {
        var e = $(this).attr("href");
        return (
          $(e)
            .magnificPopup({
              delegate: "a",
              type: "image",
              closeOnContentClick: !1,
              mainClass: "mfp-fade",
              removalDelay: 160,
              fixedContentPos: !1,
              gallery: { enabled: !0 },
            })
            .magnificPopup("open"),
          !1
        );
      }),
      $("#cform").validate({
        ignore: ".ignore",
        rules: {
          name: { required: !0 },
          message: { required: !0 },
          email: { required: !0, email: !0 },
          hiddenRecaptcha: {
            required: function () {
              return "" == grecaptcha.getResponse();
            },
          },
        },
        success: "valid",
        submitHandler: function () {
          $.ajax({
            url: "sendmail.php",
            type: "post",
            dataType: "json",
            data:
              "name=" +
              $("#cform").find('input[name="name"]').val() +
              "&email=" +
              $("#cform").find('input[name="email"]').val() +
              "&message=" +
              $("#cform").find('textarea[name="message"]').val(),
            beforeSend: function () {},
            complete: function () {},
            success: function (response) {                
              if (response.value == 1) {
                // alert("1");
                // $(".alert-success").show();
                $("#cform").fadeOut(), $(".alert-success").delay(1e3).fadeIn();
                $(".alert-danger").hide();
              } else {
                // alert("0");
                // $(".alert-success").show();
                $("#cform").fadeOut(), $(".alert-danger").delay(1e3).fadeIn();
                $(".alert-success").hide();
              }
            },
          });
        },
      }),
      $("#comment_form").validate({
        rules: { name: { required: !0 }, message: { required: !0 } },
        success: "valid",
        submitHandler: function () {},
      }),
      $("#map").length && initMap(),
      $(".revs-carousel.default-revs .owl-carousel").owlCarousel({
        margin: 0,
        items: 1,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        loop: !0,
        rewind: !1,
        nav: !1,
        dots: !0,
      }),
      $(".revs-carousel.rtl-revs .owl-carousel").owlCarousel({
        margin: 0,
        items: 1,
        rtl: !0,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        loop: !0,
        rewind: !1,
        nav: !1,
        dots: !0,
      }),
      $(window).on("resize", function () {
        var e = $(".skills-list.dotted .progress"),
          a = e.width();
        e.length && e.find(".percentage .da").css({ width: a + 1 });
        var n = $(".revs-carousel .owl-carousel");
        n.find(".revs-item").css({ "max-width": n.width() });
      }),
      setTimeout(function () {
        var e = $(".skills-list.dotted .progress"),
          a = e.width();
        e.length &&
          (e.append(
            '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
          ),
          e
            .find(".percentage")
            .append(
              '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
            ),
          e.find(".percentage .da").css({ width: a }));
      }, 1e3);
    var l = $(".skills-list.circles .progress");
    l.length &&
      l.append(
        '<div class="slice"><div class="bar"></div><div class="fill"></div></div>'
      ),
      $(".content .title").each(function (e) {
        var a = $(this).text().split(" ");
        if (a.length > 1) {
          var n = a[0],
            t = '<span class="first-word">' + n + "</span>",
            s = $(this).html().replace(n, t);
          $(this).html(s);
        } else $(this).html('<div class="first-letter">' + $(this).html() + "</div>");
      });
  });

(function ($) {
  "use strict";
})(jQuery);

(function ($) {
  "use strict";
})(jQuery);
