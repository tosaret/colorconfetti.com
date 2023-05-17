$(document).ready(function () {
  $('a.search-trigger').on('click', function (e) {
    e.preventDefault();
    $('header .search').toggleClass('shown');
  });
  $('a.menu-trigger').on('click', function (e) {
    e.preventDefault();
    $('.main-nav').toggleClass('shown');
    $(this).toggleClass('opened');
  });
  $('.tooltip-trigger').on('click', function (e) {
    e.preventDefault();
    $('.tooltiptext').toggleClass('shown');
    copyText($('.tooltip-info').attr('data-text').trim());
  });

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

async function copyText(text) {
  try {
    const toCopy = text || location.href;
    await navigator.clipboard.writeText(toCopy);
  } catch (err) {}
}
