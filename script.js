function getDetails () {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => showDetails(data) )
}

const showDetails = names => {
    const sport = names.sports
    const mainDiv = document.getElementById('row')
    console.log(names);

    sport.forEach(name => {
      if(name.idSport <= 133 ){
       const div = document.createElement('div')
       div.innerHTML =`
       <div class="col h-100">
       <div class="card h-100">
         <img src="${name.strSportThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <img src="${name.strSportIconGreen}" class="card-img-top width" alt="...">
           <h5 class="card-title">${name.strSport}</h5>
           <p class="card-text">${name.strSportDescription.slice(0,250)}</p>
         </div>
       </div>
     </div>
       `
       mainDiv.appendChild(div)
      }
    });
}
getDetails()