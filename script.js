const viewCount = document.querySelector('.View_Count');
const initialCount = 429923122;
let count = initialCount;
setInterval(function() {
  count++;
  viewCount.textContent = numberWithCommas(count);
}, 30);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
