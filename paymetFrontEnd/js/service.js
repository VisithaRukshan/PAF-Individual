function apiConfig(){
	return "http://localhost:8080/";
};


//Controlling part begin
//Insert
function saveNewRecord(obj){
    $.ajax({	
        headers: { 
            "Content-Type": "application/json"
        },
        type: 'POST',
        url: apiConfig()+ 'payment/webapi/payment/add',
        dataType: 'json',
        data : JSON.stringify(obj),
        
        success: function(){
            //$( "#feeds" ).load( "doctor.html" );
            console.log("Added"); 
            $("#alertSuccess").text("Inserted Successfully!");
            $("#alertSuccess").show();
            $("#formPayment")[0].reset();
            fetchResult();

        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}


//View
function fetchResult(){
    var $details = $('#tbl');
    $("#tbl").empty();
    $.ajax({	
        headers: { 
            "Content-Type": "application/json"
        },
        type: 'GET',
        url:apiConfig() +'payment/webapi/payment/viewall',
        dataType: 'json',
        success: function(result){
            console.log("fetched");
            //console.log(result);
            
            var data = JSON.parse(JSON.stringify(result));
            $.each(data, function(i, item) {

                $details.append('<tr>'+
							'<td>' + item.payID + '</td>' 
							+ '<td>' + item.pname + '</td>' 
							+ '<td>' + item.apno + '</td>' 
                            + '<td>' + item.dname + '</td>'	
                            + '<td>' + item.location + '</td>'
                            + '<td>' + item.date + '</td>'
                            + '<td>' + item.time + '</td>'
                            + '<td>' + item.amount + '</td>'
                            + '<td>' + item.cardNo + '</td>'
							+ '<td><button type="button" class="btn btn-info" onclick="View('+ item.payID +' )"  data-toggle="modal" data-target="#myModal">Edit</button></td>'
						    + '<td><button type="button" class="btn btn-danger" onclick="myFunction2('+ item.payID +' )" data-toggle="modal" data-target="#exampleModal" >Delete</button></td>'
							+ '</tr>')

                console.log(item);
            });
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}


//Update
function UpdateResult(){
	var no = $('#editBox1').text();
	console.log(no);
	var obj = {
		
			 	apno: no,
		        apno:  $('#editBox1').val(),
		        cardNo:  $('#editBox2').val(),
		        cvv:  $('#editBox3').val()
	};
	$.ajax({	
		 headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
		type: 'PUT',
			url:apiConfig()+ 'payment/webapi/payment/update',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
                fetchResult();
				alert("Updated Successfully!");
				
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}


//Delete
function DeleteResult() {
	var no = $('#payID').text();
	console.log(no);
	$.ajax({	
		type: 'DELETE',
			url: apiConfig()+'payment/webapi/payment/delete/'+no,
			dataType: 'json',			
			success: function(){
                fetchResult();
                console.log("Deleted");
                alert("Deleted Successfully!");
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}