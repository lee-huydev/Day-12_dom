const modal = document.querySelector('.modal-container');
const btnMsg = document.querySelector('.btn-msg');
function User(text, avt, position) {
   this.text = text;
   this.avt = avt;
   this.position = position;
}
let author = new User(
   {
      hi: 'Xin chào và cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi có thể giúp gì cho bạn hôm nay?',
      anws1: 'Bạn có thể liên hệ với chúng tôi tại: Điện thoại: +8419002808',
      anws2: 'Tôi muốn đặt đồ!',
   },
   'icon'
);
let user = new User(
   {
      quesion1: 'Tôi có thể liên hệ với bạn theo cách nào khác?',
      quesion2: 'Tôi muốn xem menu?',
   },
   'img'
);
// console.log(user.text.quesion1);
// Click messenger
btnMsg.onclick = () => {
   modal.classList.toggle('active');
   const loading = `<div class="loading"></div>`;
   setTimeout(function () {}, 2500);
   const div = document.createElement('div');
   div.innerHTML = loading;
   div.classList.add('loadingBx');
   const contentMsgContainer = document.querySelector('.content');
   contentMsgContainer.appendChild(div);
   setTimeout(function () {
      div.remove();
   }, 2500);
   setTimeout(function () {
      const contentMsg = `<ul class="content-text">
   <li class='msg'><span class='bg-author'>
   Xin chào và cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi có thể giúp gì cho bạn hôm nay?
   </span></li>
   </ul>
   <ul class="user-author">
   </ul>
   <ul class="question">
   <li class="user"><span>Tôi có thể liên hệ với bạn theo cách nào khác?</span></li>
   <li class="user"><span>Tôi muốn xem menu?</span></li>
   </ul>`;
      contentMsgContainer.innerHTML = contentMsg;
      const span = document.getElementsByTagName('span');
      for (let value of span) {
         const text = value.innerHTML;
         value.onclick = () => {
            if (text === user.text.quesion1) {
               const userAuthor = document.querySelector('.user-author');
               value.parentElement.remove();
               const li = document.createElement('li');
               li.classList.add('user', 'msg');
               li.innerHTML = `<span class='bg-user'>${user.text.quesion1}</span>`;
               userAuthor.appendChild(li);
               setTimeout(function () {
                  const li = document.createElement('li');
                  li.classList.add('author', 'msg');
                  li.innerHTML = `<span class='bg-author'>${author.text.anws1}</span>`;
                  userAuthor.appendChild(li);
               }, 2000);
            } else {
               if (text === user.text.quesion2) {
                  const userAuthor = document.querySelector('.user-author');
                  value.parentElement.remove();
                  const li = document.createElement('li');
                  li.classList.add('user', 'msg');
                  li.innerHTML = `<span class='bg-user'>${user.text.quesion2}</span>`;
                  userAuthor.appendChild(li);
                  setTimeout(function () {
                     const li = document.createElement('li');
                     li.classList.add('author', 'msg');
                     li.innerHTML = `<span class='bg-author'>${author.text.anws2}</span>`;
                     userAuthor.appendChild(li);
                  }, 2000);
               }
            }
         };
      }
   }, 2500);
};
// Click send msg
const input = document.getElementById('input');
const send = document.querySelector('.send');
const sendValue = () => {
   const userAuthor = document.querySelector('.user-author');
   const valueMsg = input.value;
   const li = document.createElement('li');
   li.classList.add('user', 'msg');
   li.innerHTML = `<span class='bg-user'>${valueMsg}</span>`;
   userAuthor.appendChild(li);
   const qs = document.querySelector('.question');
   if (qs) {
      qs.remove();
   }
   input.value = '';
};
send.addEventListener('click', sendValue);
// Đổi màu buton send
function checkValue() {
   if (input.value != '') {
      send.classList.add('color-send');
   } else if (input.value == '') {
      send.classList.remove('color-send');
   }
}
// Delete Msg
const delMsg = document.querySelector('.clear');
let msg = document.getElementsByTagName('ul');
let li = document.getElementsByTagName('li');
const clearMsg = () => {
   for (let i of msg) {
      i.innerHTML = '';
   }
};
delMsg.addEventListener('click', clearMsg);
