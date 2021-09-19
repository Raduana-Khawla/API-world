// //1.2.
function searchResult(){
    const url  = `https://jsonplaceholder.typicode.com/comments`
fetch(url)
.then(res => res.json())
.then(data => loadData(data));
}
const loadData = data =>{
    // console.log(data);
    const display = document.getElementById('display');
   for(const comments of data){
            // console.log(data);
        const h3 = document.createElement('h3');
    h3.innerText=`
    ${comments.name}
    ${comments.id}
 `;

 display.appendChild(h3); 
    };

}
// const showId = id =>{

// }
//3.
// function twoProperty(){
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayData(data));
//     }
//     twoProperty();
   
// const twoProperty = () =>
// {
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayData(data));
//     }

//     twoProperty();
//     const displayData = data=>{
//         // console.log(data.results);
//         const buddies = data.results;
//         const createElement = document.getElementById('display-property');
//         buddies.forEach(buddy => {
//             const div = document.createElement('div');
//             div.innerHTML=`
//             <h3>${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h3>
//             <p>${buddy.gender}</p>
//             <p>${buddy.location.street.number}</p>
//             <p>${buddy.location.street.name}</p>

//             `;
//             createElement.appendChild(div);
//         });
       
//      }


     //5.
    //  const clickComment = () =>{
    //    const showValue = document.getElementById('search');
    //    const showText = showValue.value;
    //    showValue.value='';
    //    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata}`;
    //      console.log(url);
      
    //    const displayId =document.getElementById('catchID');
    //    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      
// console.log(url);
     



    //6.
    const twoProperty = () =>
{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayData(data));
    }

    twoProperty();
    const displayData = data=>{
        // console.log(data.results);
        const buddies = data.results;
        const createElement = document.getElementById('display-property');
        buddies.forEach(buddy => {
            const div = document.createElement('div');
            div.innerHTML=`
            <img src=" ${buddy.picture.medium}"  alt="...">
            <p>${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</p>
            <p>${buddy.location.street.number} ${buddy.location.street.name} </p>
            <p>${buddy.location.city}</p>
            <p>${buddy.location.state} </p>
            
            `;
            createElement.appendChild(div);
        });
       
     }
     


















    // const loadCountries = () =>{
    //     fetch('https://restcountries.eu/rest/v2/all') 
    //     .then(res => res.json())
    //     .then(data => displayCountries(data));
    //  }
    //  //loadCountries();
     
    //  //   for(const country of countries){
    //  //       console.log(country);
    //  //   }
     
    //  //return na lagle forEach dea call kora jay array ar opor
    //  const displayCountries = countries => {
    //  const countriesDiv =document.getElementById('countries');
    //  countries.forEach(country => {
    //      // console.log(country);
    //      const div =document.createElement('div');
    //      div.classList.add('country');
    //      div.innerHTML=`
    //      <h3>${country.name}</h3>
    //      <p>${country.capital}</p>
    //      <button onclick="loadCountryByName('${country.name}')">Details</button>
    //      `
    //      // const h3 =document.createElement('h3');
    //      // h3.innerText=country.name;
    //      // div.appendChild(h3);
    //      // const p =document.createElement('p');
    //      // p.innerText=country.capital;
    //      // div.appendChild(p);
     
    //      countriesDiv.appendChild(div);
    //  });
    //  }
    //  const loadCountryByName = name => {
    //     const url = `https://restcountries.eu/rest/v2/name/${name}`
    //      // console.log(url);
    //      // fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    //      fetch(url)
    //      .then(res => res.json())
    //      .then(data=>displayCountryDetail(data[0]))
    //  }
     
    //  const displayCountryDetail = country =>{
    //      console.log(country);
    //      const countryDiv = document.getElementById('country-detail');
    //      countryDiv.innerHTML=`
    //      <h4>${country.name}</h4>
    //      <p>population: ${country.population}</p>
    //      <img width="200px" src="${country.flag}">
    //      `
    //  }
