var baseUrl = "http://127.0.0.1:8000/";
$('#submitbtn').click(function(){
	debugger
	var first_name = $('#fname').val();
	var last_name = $('#lname').val();
	var email = $('#email').val();
	var mobile = $('#mobile').val();
	var password = $('#password').val();
	var password1 = $('#password1').val();
	var URL = baseUrl + "auth/user/";
	$.ajax({
		method: "POST",
		url: URL,
		data: {first_name:first_name,last_name:last_name,email:email,mobile:mobile,password:password,password1:password1},
		success: function(res){
			// $('#full_name').val('');
			// $('#mobile_number').val('');
			$.notify("Successfully added", "success");
		}
	});
});