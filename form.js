$(document).ready(function(){
    $('#applicationForm').on('submit', function(e){
        e.preventDefault(); // prevent page reload

        $.ajax({
            type: 'POST',
            url: 'form.php',
            data: $(this).serialize(),
            success: function(response){
                $('#result').html(response);
                $('#applicationForm')[0].reset();
            }
        });
    });
});
