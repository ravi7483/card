var cl = console.logl;
let cards =document.getElementById('cards')

let cardsData = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://media.istockphoto.com/photos/programming-for-a-system-using-a-programming-language-picture-id1340232198",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://media.istockphoto.com/photos/hand-typing-keyboard-with-laptop-computer-with-social-media-love-picture-id1299526547?s=612x612",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://media.istockphoto.com/photos/word-nodejs-on-wood-planks-picture-id519044380?s=612x612",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-an-attractive-businesswoman-using-a-laptop-picture-id1322201800?s=612x612",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://media.istockphoto.com/photos/business-woman-with-finger-pressing-angular-button-on-virtual-screens-picture-id1396316752?s=612x612",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
];

var result ='';

cardsData.forEach(element => {
    result +=`<div class="col-sm-5 offset-1">
    <div class="card">
        <div class="card-body">
        <figure class="mycard">
            <img src="${element.url}" alt="" class="img-fluid imgcard" >
            <figcaption>
            <p class="title">
                <span>
                      ${element.title}
                </span>
            </p>
              <span class="id">
                  id : ${element.id}
              </span>
              <span class="albumId">
                  album Id : ${element.albumId}
              </span>
        </figcaption>
        </figure>
       
      </div>
    </div>
  </div>`
})

cards.innerHTML = result;