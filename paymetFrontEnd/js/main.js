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




/*<!--API methods-->*/
	
function View( no) {
	console.log(no);
	$('#editBox1').text(no);
	
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8080/payment/webapi/payment/viewall'+no,
			 dataType: "json",
			success: function(data){
                //$('.modal-backdrop').remove();
				console.log(data);
				$('#editBox1').val(data.apno);
                $('#editBox2').val(data.cardNo);
				$('#editBox3').val(data.cvv);
				
			}
	});
		
}


/*function Update(){
	var no = $('#editBox1').text();
	console.log(no);
	var obj = {
		
			 	docID: no,
		        docID:  $('#editBox1').val(),
		        docName:  $('#editBox2').val(),
		        specialization:  $('#ddlSpecialization').val(),
		        contactNo:  $('#editBox3').val()
	};
	$.ajax({	
		 headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
		type: 'PUT',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors/update',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
				//$( "#feeds" ).load( "feeds.html" );
				alert("Updated Successfully!");
				
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}*/


function myFunction2( no) {
	$('#payID').text(no);
		
}


/*function Delete() {
	var no = $('#docID').text();
	console.log(no);
	$.ajax({	
		type: 'DELETE',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors/delete/'+no,
			dataType: 'json',			
			success: function(){
				//$( "#feeds" ).load( "feeds.html" );
				console.log("Deleted");
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}*/