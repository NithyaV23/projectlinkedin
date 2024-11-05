var popupbox=document.querySelector(".popup-box")
// var popupoverlay=document.querySelector("#header1")
// var a=document.getElementById("popup")

// popup.addEventListener("click",function(){
//     popupoverlay.style.display="block"
//     popupbox.style.display="block"
// })
var cancelbutton=document.getElementById("cancel")
 cancel. addEventListener("click",function(event){
    event.preventDefault()
   //  popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 var container=document.querySelector("#container")
 var add=document.getElementById("add")
 var Name=document.getElementById("input-name")
 var role=document.getElementById("input-role")
 var Email=document.getElementById("input-email")
 var number=document.getElementById("input-number")
 var course=document.getElementById("input-course")
 var place=document.getElementById("input-place")

 add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${Name.value}</h1>
    <p>${role.value}</p>
    <p>${Email.value}</p>
    <p>${number.value}</p>
    <p>${course.value}</p>
    <p>${place.value}</p>
    <button onclick="deletebook(event)">cancel</button>`
    container.append(div)
    //popup box is none
   //  popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 function deletebook(event)
 {

    event.target.parentElement.remove()
 }
