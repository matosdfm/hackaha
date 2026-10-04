// 04/10: added a small confirmation state for the signup redirect.
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.search.includes('signed-up=1')) {
    const form = document.querySelector('.joinForm');
    if (form) {
      form.innerHTML = '<p class="signupSuccess">Thanks — we will be in touch with the next meetup details.</p>';
      form.classList.add('signupSuccessWrap');
    }
  }
});
