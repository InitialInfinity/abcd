


function submit() {
    var data = {
        sUserName: $('#sUserName').val(),
        sPassword: $('#sPassword').val()
    };

    $.ajax({
        type: 'POST',
        url: '/Login/ValidateLogin',
        contentType: 'application/json', // Set the correct content type
        dataType: 'json',
        data: JSON.stringify(data),
        success: function (response) {
            // Handle success
        },
      
    });
}