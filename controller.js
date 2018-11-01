var totalDonations = 1000;
var currentDonations = 500;
var elem = document.getElementById("myBar");

var button = document.getElementById('donateButton');
elem.style.width = currentDonations / 10 < 100 ? currentDonations / 10 + '%' : 100 + '%';

updateRemainingValue();
button.addEventListener('click', function() {
  var amount = Number(document.getElementById('amount').value);
  if (amount > 0) {
    currentDonations = currentDonations + amount;

    var percentage = currentDonations / 10 < 100 ? currentDonations / 10 : 100;

    elem.style.width = percentage + '%';
    updateRemainingValue();
  }

});

function updateRemainingValue() {
  var remainingAmountNode = document.getElementById('remainingValue');
  var remainingAmount = totalDonations - currentDonations >= 0 ? totalDonations - currentDonations : 0;
  remainingAmountNode.innerText = '$' + remainingAmount;

}

var modal = document.getElementById('myModal');
var btn = document.getElementById("modalLink");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
