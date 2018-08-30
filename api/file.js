function getSuccessOutput() {
    $.ajax({
        url:'http://www.mocky.io/v2/5b7d39953300006d004a01e9',
        complete: function (response) {
            $('#output').html(response.responseText);
            // document.getElementById('output').innerHTML = response.responseText;
            // document.getElementById('id2').innerHTML = JSON.parse(response.responseText)[0].id;
            // var table = document.getElementById('mytable');
            
            var str = '';
            length = JSON.parse(response.responseText).length;
            for ( i = 0; i< length; i++) {
                
            
                    str+= "<td>" + JSON.parse(response.responseText)[i].id + "</td>" ;
                    str+= "<td>" + JSON.parse(response.responseText)[i].name + "</td>" ;
                    str+= "<td>" + JSON.parse(response.responseText)[i].comp + "</td>" ;

               
            }
            document.getElementById('tddata').innerHTML = str;
            // for ( var i = 0; i <length; i++ ){
            //     document.getElementById('id'+i).innerHTML = JSON.parse(response.responseText)[i].id;
            //     document.getElementById('name'+i).innerHTML = JSON.parse(response.responseText)[i].name;
            //     document.getElementById('company'+i).innerHTML = JSON.parse(response.responseText)[i].comp;
            // }
        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        },
    });
    return false;
}

function getFailOutput() {
    $.ajax({
        url:'myAjax.php',
        success: function (response) {
            console.log(data, response);
            $('#output').html(response);
        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        },
    });
    return false;
}

