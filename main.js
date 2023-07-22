
var siteNameInput=document.getElementById('siteNameInput');
var siteUrlInput=document.getElementById('siteUrlInput');

var addBtn=document.getElementById('addBtn');
var tableSite=document.getElementById("tableSite"); 

    var siteContainer;

    if(localStorage.getItem('cartona') !=null)
    {
        siteContainer=JSON.parse(localStorage.getItem('cartona'));
        addSite();
    }
    else
    {
        siteContainer=[];
    }


function visitSite()
{

    var visit =

    {
        sitename:siteNameInput.value,
        siteUrl:siteUrlInput.value,
    }
    siteContainer.push(visit)
    localStorage.setItem('cartona', JSON.stringify(siteContainer))
    // console.log(visit)
    
    addSite();
    clearForm();
    
}
function clearForm()
{
    siteNameInput.value=""
    siteUrlInput.value=""
}

function addSite()
{
   var cartona=``;
    for ( var i=0; i<siteContainer.length ; i++)
    {
        cartona +=
        `
        <tr>
        <td>${i}</td>
        <td>${siteContainer[i].sitename}</td>
        <td> <a href="${siteContainer[i].siteUrl}" target="_blank" > <button class="btn btn-outline-warning btn-sm"> <i class="fa-regular fa-eye"></i>Visit</button></a> </td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>
        `

    }
    document.getElementById('tableSite').innerHTML=cartona;
}

function deleteSite(deletedIndex)
{
    siteContainer.splice(deletedIndex,1);
    localStorage.setItem('visit', JSON.stringify(siteContainer));
    addSite()
}


var nameRegex=/^[A-za-z]{1,}$/
function isNameValid()
{
    if(nameRegex.test(siteNameInput.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}

var urlRegex=/^(https.\/\/)?(www\.)?[A-za-z0-9_\.]{1,}.[a-z]{3}$/

function isUrlValid()
{
    if(urlRegex.test(siteUrlInput.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
siteNameInput.onkeyup=function()
{
    if(isUrlValid() && isNameValid())
    {
        addBtn.removeAttribute("disabled");
    }
    else
    {
        addBtn.disabled='true'
    }
}
siteUrlInput.onkeyup=function()
{
    if(isUrlValid() && isNameValid())
    {
        addBtn.removeAttribute("disabled");
    }
    else
    {
        addBtn.disabled='true'
    }
}
