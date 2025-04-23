// fecth categories
const loadCategories= () =>{
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then((res)=> res.json())
   .then(data => displayCategories(data.categories))
   .catch((error) => console.log(error))
}

loadCategories()

const displayCategories= (categories) =>{
    categories.forEach((item) => {
      console.log(item)
      const button=  document.createElement("button");
      button.classList ="btn";
      button.innerText = item.category

    });
 }
 
 displayCategories()