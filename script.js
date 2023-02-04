

const list = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
list.map((el) => {
  let opts = {
    animation: false,
    trigger: 'focus',
  }
  if (el.hasAttribute('data-bs-content-id')) {
    opts.content = document.getElementById(el.getAttribute('data-bs-content-id')).innerHTML;
    opts.html = true;
  }
  new bootstrap.Popover(el, opts);
})
  

window.setInterval(ut, 1000);

function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });;
  document.getElementById("date").innerHTML = d.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });;
}

ut();

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
