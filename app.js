 var  backgroungImg ="";

function addPost() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    
    
    if(title.value.trim() && description.value.trim()) {
        var posts = document.getElementById("posts");

        posts.innerHTML += `
        <div class="card mb-2">
        <div class="card-header">
          @post
        </div>
        <div style="background-image: url(${backgroungImg})" class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${title.value}</p>
            <footer class="blockquote-footer">${description.value}</footer>
    </blockquote>
        </div>
      </div>
        `

    title.value = "";
    description.value = "";


    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter the title and description first!',
            
          })
    }

}



function selectImg(src) {

    backgroungImg = src;

 console.log(src)

 var bgImg = document.getElementsByClassName("bd-img");

 for (var i =0; i <bgImg.length; i++) {
    bgImg[i].className = "bd-img"
 }

 event.target.className += " image-list-selected"

}