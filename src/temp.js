let count = 0; 

function increment() {
  try {
    count += 1;

    document.getElementById('clickme').innerHTML = `CLICK ME - &#128077; ${count}`;
  } catch (err) {
    console.log(err);
  }
}
