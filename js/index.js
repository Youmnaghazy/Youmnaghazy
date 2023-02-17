var BookmarkNameInput = document.getElementById('BookmarkName');
var WebsiteURLInput = document.getElementById('WebsiteURL');

var BookmarkContainer=[];
if (localStorage.getItem("bookmark") !=null){
    BookmarkContainer=JSON.parse( localStorage.getItem("bookmark"))
    displaySubmit(BookmarkContainer);
}
function Submit()
 {
    var Bookmark ={
        name: BookmarkNameInput.value,
        URL: WebsiteURLInput.value
    }

BookmarkContainer.push(Bookmark);
localStorage.setItem("bookmark", JSON.stringify (BookmarkContainer))
displaySubmit(BookmarkContainer);
clearForm();

}   
function clearForm(){
    BookmarkNameInput.value="";
    WebsiteURLInput.value="";
}
function displaySubmit (arr)
{
    var cartoona  =``;
    for(var i=0; i< arr.length; i++){
        cartoona+= `<tr class="">
        <td>${arr[i].name}</td>
        <td><a class="btn btn-primary shadow " href="${BookmarkContainer[i].URL}" target="_blank" role="button">Visit</a></td>
        <td><button onclick="deleteElement(${i})" class="btn btn-danger shadow" type="">Delete</button></td>
    </tr>`;

    }
    document.getElementById('tableBody').innerHTML=cartoona;
}
function deleteElement(elementIndex){
     BookmarkContainer.splice(elementIndex,1);
     localStorage.setItem("bookmark", JSON.stringify (BookmarkContainer))
     displaySubmit(BookmarkContainer);
}

