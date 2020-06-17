
const carList = document.querySelector('#Main-Content');

const sort = document.querySelector('#rightblogMenyBox');
var Cardb = db.collection('Car-base').get();

var sortering = 'Name'
var cars =[];
var count=0;

var bit= 0

db.collection('Car-base').orderBy(sortering).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
               cars.push(doc);
    }      

  );      getdatabase();
});

  function fetchmoredata(){
    db.collection('Car-base').orderBy(sortering).get().then((snapshot) => {
        let count=0;
        snapshot.docs.forEach(doc => {
            if(count <3){
            ph(doc);
            count++;
        }
        else{
            }
    
    
      })});
  }
  function getdatabase(){
      let maxpost=count+3;
      for(count;count!=maxpost;count++){ 
        if(count>=cars.length){
         bit=1;
        }
        else{
          ph(cars[count]);}
      }
  }
  
  function ph(doc){

    let div = document.createElement('div'); 
    div.id=doc.id;
    doc = doc.data();
    let header = document.createElement('h5');
    let img = document.createElement('img');
    let flavor = document.createElement('p');
    let numbers = document.createElement('p');
    let ahref = document.createElement('a');
    let score = document.createElement('div');
    let like = document.createElement('div');
    let likeText = document.createElement('span');
    let likeButtton = document.createElement('input');
    likeButtton.type = "image";
    likeButtton.src = "Bilder/like.png";

    likeButtton.addEventListener("click", function(){
        let likes=parseInt(this.nextSibling.textContent);
        likes++;
        this.nextSibling.textContent = likes.toString(10);
        updateLike(this.parentElement.parentElement.parentElement,likes);
      });
    likeButtton.classList.add("like_img");
    var link = document.createTextNode("read more"); 
                  
    ahref.appendChild(link);  
      
    // Set the title. 
    ahref.title = "more car reviews";  
      
    // Set the href property. 
    ahref.href = "placeholder doc.data().link";  
      
    // Append the anchor element to the body. 
    div.classList.add("card");
    header.textContent = doc.Name;
    img.src = doc.carImg;
    flavor.textContent = doc.flavorText;
    score.textContent = doc.score;
    likeText.textContent = doc.likes;
    numbers.classList.add("review_text");
    score.classList.add("score_text");
    like.classList.add("like_text");
    
    like.appendChild(likeButtton);
    like.appendChild(likeText);

    numbers.appendChild(score); 
    numbers.appendChild(ahref);
    numbers.appendChild(like);
    div.appendChild(header);
    div.appendChild(img);
    div.appendChild(flavor);
    div.appendChild(numbers);

    carList.appendChild(div);
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-20) { 
        if(bit==0){
        setTimeout(() => { getdatabase(); 
; }, 2000);

}
            else{
                console.log("end");
            }

        }
 
};

function updateLike(updates,num){
    event.preventDefault();
console.log(updates.id);
    db.collection("Car-base").doc(updates.id).update({
        likes: num
      }).then(function() {
        console.log(" likes updated");
      });}