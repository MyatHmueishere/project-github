if(localStorage.getItem('user')){
    document.getElementById("btn").addEventListener("click",()=>{
       const title= document.getElementById("title").value
       const img=document.getElementById("img").value
       const content=document.getElementById("_content").value
       send(title,img,content);

    })
}

const send=(title,img,_content)=>{
    try{
        const time=new Date();
        fetch('data.json',{
            method:"POST",
            cache:"no-cache",
            headers:{
                "Content-type":"application/json"
            
            },
            body:JSON.stringify({
                title,
                img_url:img,
                content:_content,
                created_at:time.toISOString(),
                created_by:localStorage.getItem('user')
            })

            
        })
    }catch(error){
        console.log(error)
    }
}