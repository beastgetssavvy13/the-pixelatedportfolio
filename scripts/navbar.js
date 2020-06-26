/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', () => {
  const toggleMid = document.getElementsByClassName('toggle-mid');
  if (document.getElementsByClassName('toggle-bottom')[0].style.display === 'none') {
    toggleMid[0].style.transform = 'rotate(0deg)';
    toggleMid[1].style.transform = 'rotate(0deg)';
    document.getElementsByClassName('toggle-bottom')[0].style.display = 'block';
    document.getElementsByClassName('toggle-top')[0].style.display = 'block';
  } else {
    toggleMid[0].style.transform = 'rotate(45deg)';
    toggleMid[1].style.transform = 'rotate(-45deg)';
    document.getElementsByClassName('toggle-bottom')[0].style.display = 'none';
    document.getElementsByClassName('toggle-top')[0].style.display = 'none';
  }
});
