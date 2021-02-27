$(document).ready(function() {
    $('input').keyup(function() {
        if ($('input').val() >= 0) {
            $('#result').text($('#price').val() * $('#number').val());
        } else {
            alert("Вводите числа больше ноля");
        }
    });
});
    