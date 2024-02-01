


  
    const btn= document.querySelector(".addbtn");
    btn.onclick=function(){
        let txt= document.querySelector(".txt").value;
        
       let result = ` 
       <div class="task">
       <input type="checkbox" class="checkbox" />
       <span class="task-title">${txt}</span>
         </div> `

    document.querySelector(".tasks").innerHTML += result;

  
   
    const checkboxs= document.querySelectorAll(".checkbox");
    const spans= document.querySelectorAll(".task-title");
  
    for( let i=0;i<checkboxs.length;i++ ){
     for(let j=0;j<spans.length;j++ ){
        checkboxs[i].onclick=function(){
            console.log(checkboxs[i]);
            if(checkboxs[i].checked){
                console.log(spans[i]);
              spans[i].classList.add('task-title-checked');
            }else{
                spans[i].classList.remove('task-title-checked');
            }
        }
    }
}
    document.querySelector(".txt").value="";

}

