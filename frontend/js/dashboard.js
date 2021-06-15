if(sessionStorage.length==0)
{
    window.location="/login";
}
$('#user').html(sessionStorage.getItem("sessionUser"));
function logout()
{
    sessionStorage.clear();
    window.location="/login";
}
