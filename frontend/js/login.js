function check(result){
    if(result.msg == "success"){
        sessionStorage.setItem("sessionUser", result.data.username);
        console.log(sessionStorage.username);
        window.location = '/dashboard';
    }
}
console.log("Hello");

     function logme()
       {
        console.log("ajax call");
        data={username:$("#username").val(),password:$("#password").val()}
       //console.log($("#log").serialize());
        $.ajax({
            url : '/api/login',
            type: 'POST',
            data :data,
            dataType : "json",
            success:(result)=>{
               
                console.log(result)
                
                check(result);
            },
            error : (e)=>{console.log(e);}
        }
        )};
