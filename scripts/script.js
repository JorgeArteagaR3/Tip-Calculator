function discount(bill, discount, people) {
    if (people === 0) return;
    if (discount === 0) return;
    if (bill === 0) return;
    let tip = (bill * discount) / 100;
    let total = tip / people;
    return total;
}
function totalPayment(bill, discount, people) {
    if (people === 0) return;
    if (discount === 0) return;
    if (bill === 0) return;
    let tip = (bill * discount) / 100;
    let total = (tip + bill) / people;
    console.log(tip);
    console.log(typeof people);
    console.log(typeof total);
    console.log(typeof bill);
    return total;
}
function handleChange() {
    const numberOfPeople = document.getElementById("PeopleInput").value;
    if (numberOfPeople == 0) {
        document.getElementById("error-text").style.display = "block";
        document.getElementById("PeopleInput").style.border =
            "2px solid #e36f52";
    } else {
        document.getElementById("error-text").style.display = "none";
        document.getElementById("PeopleInput").style.border = "none";
    }
    console.log("raaa");
}
function calculateDiscount(button) {
    const billInput = document.getElementById("BillAmount");
    const billValue = billInput.value;
    const buttonValue = parseInt(button);
    const peopleInput = document.getElementById("PeopleInput");
    const peopleValue = peopleInput.value;

    const tipamount = discount(billValue, buttonValue, peopleValue).toFixed(2);

    const totalAmount = totalPayment(
        Number(billValue),
        buttonValue,
        Number(peopleValue)
    ).toFixed(2);

    const resultTip = document.getElementById("TipAmountResult");
    resultTip.innerHTML = "$" + tipamount;

    const resultTotal = document.getElementById("TotalAmountResult");
    resultTotal.innerHTML = "$" + totalAmount;
}
function clearAll() {
    document.getElementById("BillAmount").value = "";
    document.getElementById("PeopleInput").value = "";
    const resultTip = document.getElementById("TipAmountResult");
    resultTip.innerHTML = "$0.00";
    const resultTotal = document.getElementById("TotalAmountResult");
    resultTotal.innerHTML = "$0.00";
    document.getElementById("PeopleInput").style.border = "none";
    document.getElementById("error-text").style.display = "none";
    document.getElementById("ButtonCustom").value = "";
}
