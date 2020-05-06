var $details = $('#tbl');

var apno1 =  $('#apno');
var date1 =  $('#date');
var time1 =  $('#time');
var cardNo1 =  $('#cardNo');
var cvv1 = 	 $('#cvv');


function validateForm()
{
    if($("#apno").val().trim() == "")
    {
        return "Enter Appointment Number !";
    }

    if($("#date").val().trim() == "")
    {
        return "Enter Date !";
    }

    if($("#time").val().trim() == "")
    {
        return "Enter Time !";
    }

    if($("#cardNo").val().trim() == "")
    {
        return "Enter Card Number !";
	}
	
	var card =  $("#cardNo").val().trim();
    if(!$.isNumeric(card))
    {
        return "Please Enter valid Card Number !";
	}
	
	if($("#cvv").val().trim() == "")
    {
        return "Enter CVV !";
	}

    var cvv = $("#cvv").val().trim();
    if(!$.isNumeric(cvv))
    {
        return "Please Enter valid CVV !";
    }

    

    return true;
}




/* Internal API methods */

//updating
	
function View( no) {
	console.log(no);
	$('#editBox1').text(no);
	
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8080/payment/webapi/payment/viewall'+no,
			 dataType: "json",
			success: function(data){
				console.log(data);
				$('#editBox1').val(data.apno);
                $('#editBox2').val(data.cardNo);
				$('#editBox3').val(data.cvv);
				
			}
	});
		
}

//deleting

function myFunction2( no) {
	$('#payID').text(no);
		
}


