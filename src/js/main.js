// $('body').scroll(function() {
//   if ($('body').scrollTop() >= $('nav').outerHeight()) {
//     $('nav').addClass('fixed');
//     $('nav a').addClass('invert');
//   } else {
//     $('nav').removeClass('fixed');
//     $('nav a').removeClass('invert');
//   }
// });

function addBackgroundEffect() {
  var background = event.target.closest('.project').querySelector('.background');
  var name = event.target.closest('.project').querySelector('.project-name');
  background.classList.add('project-hover');
  name.classList.add('link-underline-hide');
}

function removeBackgroundEffect() {
  var background = event.target.closest('.project').querySelector('.background');
  var name = event.target.closest('.project').querySelector('.project-name');
  background.classList.remove('project-hover');
  name.classList.remove('link-underline-hide');
}

var projects = document.getElementsByClassName('project');

for (var i = 0; i < projects.length; i++) {
  projects[i].addEventListener('mouseover', addBackgroundEffect, false);
  projects[i].addEventListener('mouseout', removeBackgroundEffect, false);

  projects[i].addEventListener('focusin', addBackgroundEffect, false);
  projects[i].addEventListener('focusout', removeBackgroundEffect, false);
}
