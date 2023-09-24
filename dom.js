//ELEMENT INSPECTION
 //console.dir(document);
 //console.log(document.domain);
// console.log(document.title);
 //console.log(document.doctype);
 //console.log(document.head);
 //console.log(document.body);
 //console.log(document.all);
 //document.title = suletha;
 //document.all[10].textContent = 'Hello';
 //console.log(document.forms);
 //console.log(document.links);
 //console.log(document.forms[1]);
 //console.log(document.images);

 //GET ELEMENT BY ID
 //console.log(document.getElementById('header-title'));

 //var headerTitle = document.getElementById('header-title');
  //console.log(headerTitle);
 //headerTitle.textContent = 'Hello'
 //headerTitle.textContent = 'Suletha'
 //console.log(headerTitle.innerText);
 //headerTitle.innerHTML = '<h3>Hello</h3>';
 //headerTitle.style.borderBottom = 'solid 3px #000';

 //var header = document.getElementById('main-header');
 //header.style.borderBottom = 'solid 3px #000';
 

 GET ELEMNT BY CLASS NAME
 
 var item = document.getElementsByClassName('list-group-item');
 console.log(item);
 console.log(item[1]);
 item[1].textContent = 'Hello 2';
 //item[1].style.fontWeight = 'bold';
 


for(var i = 0;i < item.length;i++){
    item[i].style.fontWeight = 'bold';

}

for(var i = 0;i < item.length;i++){
    item[i].style.backgroundColor = '#f4f4f4';

}

item[2].style.backgroundColor = 'green';



GET BY TAG NAME
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
 

// for(var i = 0;i < li.length;i++){
//     li[i].style.fontWeight = 'bold';

// }

for(var i = 0;i < li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';

}



