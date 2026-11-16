const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.topbar nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent(data.get('subject') || 'Portfolio enquiry');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:iftikharzulfiqarofficial@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('form-note').textContent = 'Your email app should open with the message ready to send.';
});
