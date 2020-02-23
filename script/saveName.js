let nameInput = document.getElementById("name");
Initialize();

function Initialize()
{
    UpdateName();
    if (document.cookie != "")
        AddS();
}

function SaveName()
{
    SetCookie(nameInput.value);
    UpdateName();
}

function UpdateName()
{
    if (document.cookie == "")
        nameInput.value = "Click to write your name!";
    else
        nameInput.value = document.cookie;
}

function RemoveS()
{
    let val = nameInput.value;
    let extension = val[val.length-2] + val[val.length-1]

    if (extension == "'s")
        val = val.substring(0, val.length-2);

    nameInput.value = val;
}
function AddS()
{ nameInput.value += "'s" }

function SetCookie(cookie)
{
    var expireDate = new Date();
    expireDate = new Date(expireDate.setFullYear(expireDate.getFullYear()+1));
    document.cookie = cookie + "; path=/; expires=" + expireDate.toUTCString() + ";";
}
