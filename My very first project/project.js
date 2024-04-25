const renderPost= ()=>{
  data=fetch("data.json")
      .then(res=>{return res.json()})
      .then(res=>res.posts.reverse())
      .then(posts=>posts.map(post=>{
    
    //create title
    title=document.createElement("h2");
    title.setAttribute("class","post-title");
    title.innerText=post.title;

    //create content
    content=document.createElement("p");
    content.setAttribute("class","post-content");
    content.innerText=post.content;

    //create container
    container=document.createElement("div");
    container.setAttribute("class","post");
 
    // View full content button
    const view = document.createElement("button");
    view.setAttribute("type", "button");
    view.innerHTML = "Show Full Content";
    view.onclick = () => toggleContent(view, content);


    //adding post
    document.querySelector(".container").append(container);
    container.append(title);
    container.append(content);
    container.append(view);
  }))
  
}




function toggleContent(button, content) {
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
      button.innerHTML = 'Show Full Content';
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.innerHTML = 'Hide Content';
  }
}
renderPost()
