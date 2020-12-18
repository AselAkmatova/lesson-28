document.addEventListener('DOMContentLoaded', function () {
  let openModalBtn = document.querySelector('.button_open');
  let modalWindow = document.querySelector('.modal-content');
  let modal = document.querySelector('.modal-backdrop');
  let closeModalBtn = document.querySelector('.modal-content__button_close');
  let body = document.body;

  openModalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modalWindow.classList.add('open');
    modal.style.backgroundColor = 'grey';
    body.style.backgroundColor = 'grey';
  });

  closeModalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modalWindow.classList.remove('open');
    modal.style.backgroundColor = 'lightgrey';
    body.style.backgroundColor = 'lightgrey';
  });

  modal.addEventListener('click', function () {
    modalWindow.classList.remove('open');
    modal.style.backgroundColor = 'lightgrey';
    body.style.backgroundColor = 'lightgrey';
  });
});
