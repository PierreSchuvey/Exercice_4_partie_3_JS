function border()
{
   if(document.getElementById('confirm').value != document.getElementById('password').value)
   {
    document.getElementById('password').style.border = "red 2px solid";
    document.getElementById('confirm').style.border = "red 2px solid";
   }
   else
   {
    document.getElementById('password').style.border = "green 2px solid";
    document.getElementById('confirm').style.border = "green 2px solid";
   }
}
