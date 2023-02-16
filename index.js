function introdu(s)
{
    document.getElementById("expresie").value+=s;
}
function afla()
{
    document.getElementById("expresie").value =eval(document.getElementById("expresie").value) 
}