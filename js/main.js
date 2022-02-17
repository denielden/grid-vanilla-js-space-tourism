// fetch json data
let data = {};
fetch('./js/data.json')
   .then(response => response.json())
   .catch(err => console.log(err))
   .then(json => data = json)

//tabs
const tabsList = document.querySelector('[role="tablist"]'),
      tabs = tabsList.querySelectorAll('[role="tab"]');

tabsList.addEventListener('keydown', changeTabFocus);
tabs.forEach(tab => tab.addEventListener('click', changeTabContent));

let tabFocus = 0;
function changeTabFocus(e){
   const keyLeftArrow = 37,
         keyRightArrow = 39;

   if(e.keyCode === keyLeftArrow || e.keyCode === keyRightArrow) {
      tabs[tabFocus].setAttribute('tabindex', -1);

      if(e.keyCode === keyRightArrow){
         tabFocus++;
         if(tabFocus >= tabs.length){
            tabFocus = 0;
         }
      } else {
         tabFocus--;
         if(tabFocus < 0){
            tabFocus = tabs.length - 1;
         }
      }
   
      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
   }
}

function changeTabContent(e) {
   const firstLetterUpper = str => str.charAt(0).toUpperCase() + str.slice(1);
   const ele = e.target,
         eleName = ele.getAttribute('aria-controls'),
         prevActive = ele.parentNode.querySelector('[aria-selected="true"]'),
         page = ele.parentNode.getAttribute('aria-label');

   const [objData] = data[page].filter(ele => ele.name === firstLetterUpper(eleName)),
         [objCrewData] = data[page].filter(ele => ele.role === firstLetterUpper(eleName));

   prevActive.setAttribute('aria-selected', false);
   ele.setAttribute('aria-selected', true);

   switch (page) {
      case 'destinations':
         changeContent(objData, page);
         break;
      case 'crew':
         changeContent(objCrewData, page);
         break;
      default:
         changeTechnology(objData, page);
         break;
   }
}

const changeContent = (data, page) => {
   if(page === 'destinations') {
      idsFields = ['name', 'image', 'description', 'distance', 'travel'];
   } else {
      idsFields = ['name', 'image', 'role', 'bio'];
   }
   idsFields.forEach(idField => {
      const eleId = document.getElementById(idField);
      if(idField === 'image') {
         eleId.src = data[idField];
         eleId.setAttribute('alt', `${data.name} - ${page}`);
      } else {
         eleId.textContent = data[idField];
      }
   });
}
const changeTechnology  = (data, page) => {
   idsFields = ['name', 'portrait', 'landscape', 'description'];
   idsFields.forEach(idField => {
      const eleId = document.getElementById(idField);
      if(idField === 'portrait') {
         eleId.srcset = data.images[idField];
      } else if (idField === 'landscape') {
         eleId.src = data.images[idField];
         eleId.setAttribute('alt', `${data.name} - ${page}`);
      } else {
         eleId.textContent = data[idField];
      }
   });
}