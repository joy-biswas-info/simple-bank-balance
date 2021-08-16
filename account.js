function convertInput(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputFieldText = inputField.value;
  const inputFieldAmmount = parseFloat(inputFieldText);
  inputField.value = "";
  return inputFieldAmmount;
}

function currentBalance() {
  const getStr = document.getElementById("total-balance");
  const getStrText = getStr.innerText;
  const getStrValue = parseFloat(getStrText);
  // getStr.innerText = dipositAmmount;
  return getStrValue;
}

function updateTotalField(totalFieldId, amount) {
  const total = document.getElementById(totalFieldId);
  const totalText = total.innerText;
  const totalAmmount = parseFloat(totalText);
  total.innerText = totalAmmount + amount;
}

function updateBalance(ammount, isAdd) {
  const balance = document.getElementById("total-balance");
  const previousBalance = currentBalance();
  if (isAdd == true) {
    balance.innerText = previousBalance + ammount;
  } else {
    balance.innerText = previousBalance - ammount;
  }
}

document.getElementById("diposit").addEventListener("click", function () {
  const dipositAmmount = convertInput("diposit-ammount");
  if (dipositAmmount > 0) {
    updateTotalField("total-diposit", dipositAmmount);
    updateBalance(dipositAmmount, true);
  }
});

document.getElementById("widthdraw").addEventListener("click", function () {
  const widthdrawAmmount = convertInput("widthdraw-ammount");
  if (widthdrawAmmount > 0 && widthdrawAmmount < currentBalance()) {
    updateTotalField("total-widthdraw", widthdrawAmmount);
    updateBalance(widthdrawAmmount, false);
  }
});
