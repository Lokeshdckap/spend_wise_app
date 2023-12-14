const inp1 = document.querySelector(".input1")
const inp2 = document.querySelector(".input2")
const ul = document.querySelector("ul")
const h1 = document.querySelector("h1")
const p = document.querySelector(".trans")
const p1 = document.querySelector(".plus")
const p2 = document.querySelector(".minus")
console.log(h1);
const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(inp1.value == ""){
        alert("Please enter value")
        return;
    }
    else if(inp2.value == ""){
        alert("Please enter value")
        return;
    }
    const div = document.createElement("div")
    div.className = "items"
    const span = document.createElement("span")
    const li = document.createElement("li")
    span.innerText = inp1.value
    inp1.value =""
    li.innerText = inp2.value
    ul.append(div)
    div.append(span)
    div.append(li)

    if(inp2.value > 0){
        h1.innerText = Number(inp2.value)+Number(h1.innerText) 
        p1.innerText = Number(inp2.value)+Number(p1.innerText) 
        li.style.color = "green"
        inp2.value =""
    }
    else if(inp2.value < 0){
        h1.innerText = Number(h1.innerText)+(Number(inp2.value))
        p2.innerText = Number(p2.innerText)+(Number(inp2.value))
        li.style.color = "red"
        inp2.value =""
    }
    const del = document.createElement("span")
    del.className = "del"
    del.innerHTML ='<i class="fa fa-trash" aria-hidden="true"></i>'
    div.append(del)
    del.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.remove()
        h1.innerText = Number(h1.innerText)-Number(li.innerText)
        if(li.innerText >"0"){
            p1.innerText = Number(p1.innerText)-Number(li.innerText) 
        }
        else if (li.innerText < "0"){
            p2.innerText = Number(p2.innerText)-Number(li.innerText)
        }
         if(h1.innerText =="0"){
       p.innerText = "No Transaction"
         }
        else if(h1.innerText < "0"){
            p.innerText = ""
        } 
        else{
            p.innerText =""
        }
    })
//     if(h1.innerText =="0"){
//         p.innerText = "No Transaction"
//           }
//          else if(h1.innerText < "0"){
//              p.innerText = ""
//          } 
//          else{
//              p.innerText =""
//          }
})
