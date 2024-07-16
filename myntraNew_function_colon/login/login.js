console.log("hello world");
$(document).ready(function(){
    $("#submit").click(function(e){	
        e.preventDefault();
        text_error();
        password_error()
        
    });
    function text_error(){
        var data=$("#text").val();
		if(data.length<3){
	    	$(".errorMsgText").html("****user name must be 3 char.");
			$(".errorMsgText").css("color","rgb(240, 91, 91)");
			$("#text").css("border-color", "red");
			return false;
		}
		else{
	    	$(".errorMsgText").html(" ");
			$('#text').css('border-color','black');
			return true;
		}
    }
    function password_error(){
        var data=$("#password").val();
        if(data.length<=7){
            $(".errorMsgPassword").html("****password must be 7 char..")
            $(".errorMsgPassword").css("color","rgb(240, 91, 91)");
            $("#password").css("border-color","red");
            return false;
        }
        
        else{
            $(".errorMsgPassword").html(" ");
			$('#password').css('border-color','black');
			return true;
        }
    }
});