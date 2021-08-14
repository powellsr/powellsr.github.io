alert('Hello World')

let style_button = document.getElementById('randomize-style');
let content_button = document.getElementById('change-content');

style_button.onclick = function() {
  console.log('Hello');
  console.log(event.target.style.backgroundColor);
  event.target.style.backgroundColor = 'rgb(' + '231' + ',' + '42' + ',' + '121' + ')';
};

style_button.addEventListener('click', colorChange);
//style_button.addEventHandler('click', () => {
//  event.target.style.backgroundColor('rgb(' + '231' + ',' + '42' + ',' + '121' + ')');
//});

function colorChange(event) {
  let color = 'rgb(' + colorVal() + ',' + colorVal() + ',' + colorVal() + ')';
  let otherColor = 'rgb(' + colorVal() + ',' + colorVal() + ',' + colorVal() + ')';
  event.target.style.backgroundColor = color;
};

function colorVal() {
  return Math.floor(Math.random() * 256);
};
