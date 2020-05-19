(function () {
  var video = document.querySelector('[data-video]');

  function showVideo() {
    var content = video.querySelector('[data-video-content]');
    var btn = video.querySelector('[data-video-btn]');
    var url = btn.href;

    var iframe = document.createElement('iframe');
    iframe.src = url + '?autoplay=1';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    // ie11 doesn't support multi arg classList.add()
    iframe.setAttribute('class', 'absolute inset-0 h-full w-full');

    content.innerHTML = '';

    content.appendChild(iframe);
  }

  if (video) {
    video.onclick = function (event) {
      event.preventDefault();
      showVideo();
    };
  }

  var transcriptBtn = document.querySelector('.js-transcript-btn');
  var transcriptBody = document.querySelector('.js-transcript-body');
  var transcriptBtnIcon = transcriptBtn.querySelector('.js-transcript-icon');

  if (transcriptBtn) {
    transcriptBtn.onclick = function () {
      transcriptBody.classList.toggle('hidden');
      transcriptBtnIcon.classList.toggle('-rotate-180');
    };
  }

  // mobile toggler

  var menuBtn = document.querySelector('.js-menu-btn');
  var menu = document.querySelector('.js-menu');
  var timesIcon = menuBtn.querySelector('.times');
  var barsIcon = menuBtn.querySelector('.bars');

  menuBtn.onclick = function () {
    menu.classList.toggle('hidden');
    barsIcon.classList.toggle('hidden');
    timesIcon.classList.toggle('hidden');
  };
})();
