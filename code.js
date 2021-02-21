function calculate(){
    var price = Number(document.getElementById("price").value);
    var number = Number(document.getElementById("number").value);
    var result = document.getElementById("result");
    var vat = document.getElementById("vat");

    if (price > 0 && number > 0) {
        if (vat.checked) {
            var count = price * number * 1.10;
        } else {
            var count = price * number;
        }
    } else {
        alert("Вводите числа больше ноля")
    }

    result.innerHTML = count.toFixed(2);
    }
    