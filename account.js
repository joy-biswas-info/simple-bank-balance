document.getElementById("diposit").addEventListener("click", function () {
  const dipositAmmount = document.getElementById("diposit-ammount");
  const totalDiposit = document.getElementById("total-diposit");
  const totalDipositText = totalDiposit.innerText;
  const dipositAmmountValue = parseFloat(dipositAmmount.value);
  if (dipositAmmountValue < 0 || dipositAmmount.value.length == 0) {
    alert("Please input A Valid Ammount");
  } else {
    // Update Diposit Ammount
    const totalDipositAmmount = parseFloat(totalDipositText);
    const updateDipositAmmount =
      parseFloat(dipositAmmount.value) + totalDipositAmmount;
    totalDiposit.innerText = updateDipositAmmount;

    // Update Balance Ammount
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceAmmount = parseFloat(totalBalance.innerText);
    const updatedTotalBalance =
      totalBalanceAmmount + parseFloat(dipositAmmount.value);
    totalBalance.innerText = updatedTotalBalance;
  }

  dipositAmmount.value = " ";
});

document.getElementById("widthdraw").addEventListener("click", function () {
  // Get All Element Of widthdraw
  const totalWidthdraw = document.getElementById("total-widthdraw");
  const totalWidthdrawText = totalWidthdraw.innerText;
  const totalWidthdrawAmmount = parseFloat(totalWidthdrawText);
  const widthdraw = document.getElementById("widthdraw-ammount");
  const widthdrawText = widthdraw.value;
  const widthdrawAmmount = parseFloat(widthdrawText);

  // Get All Elements Of Balance
  const balance = document.getElementById("total-balance");
  const balanceText = balance.innerText;
  const balanceAmmount = parseFloat(balanceText);
  if (widthdrawAmmount < 0 || widthdrawText.length == 0) {
    alert("Please Input A Valid Ammount To widthdraw");
  } else if (balanceAmmount <= 0 || widthdrawAmmount > balanceAmmount) {
    alert("You Have No Sufficent balance");
  } else {
    totalWidthdraw.innerText = totalWidthdrawAmmount + widthdrawAmmount;
    balance.innerText = balanceAmmount - widthdrawAmmount;
  }

  widthdraw.value = "";
});
