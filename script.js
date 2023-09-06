var products = [
  {
    id: "1",
    name: "CR7 Siuuuu",
    price: "3300",
    image: "Images/cr7.jpg"
  },
  {
    id: "2",
    name: "Reboki",
    price: "4500",
    image: "Images/LM.jpg"
  },
  {
    id: "3",
    name: "Adibas",
    price: "7000",
    image: "Images/zidane.jpg"
  },
  {
    id: "4",
    name: "Chettri speed",
    price: "5543",
    image: "Images/chettri.jpg"
  },
  {
    id: "5",
    name: "FF Blast",
    price: "8623",
    image: "Images/s6.jpg"
  },
  {
    id: "6",
    name: "Skechers",
    price: "7689",
    image: "Images/cr7.jpg"
  },
];

console.log("loaded");
const data = document.getElementById("daksh");

for (let i = 0; i < products.length; i++) {
  const hi = document.createElement("div");
  hi.classList.add("dd");
  hi.innerHTML = `<div>
        <img src="${products[i].image}" alt="Image 1" class="w-full h-auto">
        <div class="flex flex-col items-center justify-center pt-2">
            <p class="font-bold">${products[i].name}</p>
            <button class="bg-black text-white rounded-lg px-3 py-1"><a>Buy now</a></button>
            </div>
            </div>
        `;
  data.appendChild(hi);
}

const result=document.getElementById('search-results');

clicked=()=>{
    const searchbar=document.getElementById('search-bar').value;
    console.log(searchbar); 

     const place=document.getElementById('search');
     place.innerHTML=" ";
     for(let i=0;i<products.length;i++){
         if(searchbar==products[i].name){
             const hi = document.createElement("div");
             hi.classList.add("dd");
             hi.innerHTML = `<div>
                   <img src="${products[i].image}" alt="Image 1" class="w-full h-auto">
                   <div class="flex flex-col items-center justify-center pt-2">
                       <p class="font-bold">${products[i].name}</p>
                       <button class="bg-black text-white rounded-lg px-3 py-1"><a>Buy now</a></button>
                       </div>
                       </div>
                   `
             place.appendChild(hi);
             document.querySelector('.laksh').style.display='none';
  }
}
}