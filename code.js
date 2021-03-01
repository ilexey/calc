$(document).ready(function() {
    $('h1').click(function() {
        $('.hide').toggle();
    });

    $('input').each(function() {
        $(this).change(function() {            
            let price = parseFloat($('#price').val());
            let number = parseFloat($('#number').val());
            let trademargin = 1 + parseFloat($('#trademargin').val()) / 100;

            let vat = 1;
            $('#vat:checked').each(function() {
                vat = 1.1;
            });

            let result = (price * number * trademargin * vat).toFixed(2);

            if (isNaN(result)) {
                $('#result').text('0');
            } else {
                $('#result').text(result);
            }
        });
    });
});
    