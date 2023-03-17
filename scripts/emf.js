$.get("index.html").done(function () {
  
  
}).fail(function () {
   alert("failed.");
});

const text = 'Lorem ipsum dolor sit amet, consectetur ';

const matches = [];

for (const div of document.querySelectorAll('p')) {
  if (div.textContent.includes(text)) {
    matches.push(div);
  }
}

console.log(matches); // 👉️ [div.box]