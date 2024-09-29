// JavaScript
const subscribeButton = document.querySelector('.subscribe-button');
const subscribeMessage = document.querySelector('.subscribe-message');

subscribeButton.addEventListener('click', () => {
  // Визуальные эффекты
  subscribeButton.classList.add('animate');
  setTimeout(() => {
    subscribeButton.classList.remove('animate');
  }, 1000);

  // Показать надпись "Вы подписались"
  subscribeMessage.classList.add('show');
  subscribeMessage.textContent = 'Вы подписались!';
  setTimeout(() => {
    subscribeMessage.classList.remove('show');
  }, 3000);
});




document.addEventListener('DOMContentLoaded', () => {
  const likeButton = document.querySelector('.like-button');

  // Проверяем состояние лайка при загрузке страницы
  const isLiked = localStorage.getItem('videoLiked') === 'true';
  if (isLiked) {
      likeButton.textContent = '👍 Лайкнуто';
  }

  // Добавляем обработчик события для кнопки лайка
  likeButton.addEventListener('click', () => {
      const currentState = localStorage.getItem('videoLiked') === 'true';

      // Если лайк уже поставлен, снимаем его
      if (currentState) {
          likeButton.textContent = '👍 Лайк';
          localStorage.setItem('videoLiked', 'false');
      } else {
          // Если лайк не ставился, ставим его
          likeButton.textContent = '👍 Лайкнуто';
          localStorage.setItem('videoLiked', 'true');
      }
  });
});


// JavaScript
const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', () => {
  likeButton.classList.add('animate');
  likeButton.querySelector('.fas').classList.add('animate');
  setTimeout(() => {
    likeButton.classList.remove('animate');
    likeButton.querySelector('.fas').classList.remove('animate');
  }, 1000);
});