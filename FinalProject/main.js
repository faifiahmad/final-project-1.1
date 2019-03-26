$(function(){
    
    let db = firebase.firestore().collection('memeCollection')

    let memeUrl = "https://api.imgflip.com/get_memes"

    $.get(memeUrl, function(data){
        console.log(data.data.memes)
        data.data.memes.forEach(element => {
        //`<div id ="main">${element.data}</div>`
        //$("#main").append(`<div>${element.name}</div>`);
        // $(".memeMenu").append(`<div><img src="${element.url}"></div>`);
        $(".dropdown-content").append(`<a href="${element.url}" class="active">${element.name}</a>`);
        
        
       
        });

        
    })


    $(".dropdown-content").on("click", ".active" ,function(event){ 
        event.preventDefault()
        let gottenURL = $(this).attr("href")
        $(".container").empty()
        $(".container").append(`<div class="container"><img src="${gottenURL}"></div>`)

        
      });

      function init () {
        // Initialize variables
        topTextInput = document.getElementById('top-text').gottenURL
        bottomTextInput = document.getElementById('bottom-text').gottenURL
        topTextSizeInput = document.getElementById('top-text-size-input').gottenURL
        bottomTextSizeInput = document.getElementById('bottom-text-size-input').gottenURL
        //imageInput = document.getElementById('image-input');
        generateBtn = document.getElementById('generate-btn').gottenURL
      }

})

