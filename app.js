AFRAME.registerComponent('cursor-listener', {
  init: function() {
    function playVideo(evt) {
      document.querySelector('#videoDemo').play();
    }
    document.querySelector('.videoDemo').addEventListener('click', playVideo);
  }
});
