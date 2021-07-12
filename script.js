//consts
const buttons = document.querySelectorAll('.btn')
const box = document.querySelectorAll('.box')
const searchBox = document.getElementById("search")
const bookName = document.querySelectorAll('.bookname')
const add = document.querySelectorAll(".add")
const numofbook = document.getElementById("numofbook")
//const prizeofbookfull = document.getElementById("prizeofbookfull")
//const prizeofbook = document.querySelectorAll(".prizeofbook")

//click on chategory shows speific books
function chategoryChange (){
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
             e.preventDefault()
            const filter = e.target.dataset.filter
            
            box.forEach((item)=>{
              if(filter == "all") {
                item.style.display = 'block'
              } else {
                if(item.classList.contains(filter)){
                   item.style.display = "block"
                   } else {
                     item.style.display = "none"
                   }
              }
            })
        })
    })
};
chategoryChange();

//search for books
function search(){
 
 searchBox.addEventListener('keyup', (e)=>{
   const input = e.target.value.toLowerCase().trim()
   box.forEach((item)=>{
     if(item.textContent.includes(input)){
       item.style.display = 'block'
     } else {
       item.style.display = 'none'
     }
   })
 })
};
search();
//number of book order change
function changeNumber () {
 let num = 0;
add.forEach(function(addbutton){
 addbutton.addEventListener("click", () => {
   //store book number update
   if(addbutton.value === "Add") {
     num++
     numofbook.innerText = num;
     addbutton.value = "Delete"
   } else {
     num--
     numofbook.innerText = num;
     addbutton.value = "Add"
   }
   //end of store book number update
 })
})
};
changeNumber();
