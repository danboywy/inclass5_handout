// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName('ul')[0]; 
var newli = document.createElement('li'); 
var newtext = document.createTextNode('cream');
newli.appendChild(newtext);
ul.appendChild(newli);

// ADD NEW ITEM START OF LIST
var ftli = document.createElement('li');
var newtop= document.createTextNode('kale');
ftli.appendChild(newtop);
ul.insertBefore(ftli, ul.firstChild); 

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var allitems = document.getElementsByTagName('li');
var i;
for (i = 0; i < allitems.length; i++) {
    allitems[i].className = 'cool'; 
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var totalitems = allitems.length; 
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue; 
heading.innerHTML = headingText + '<span>' + totalitems + '</span>'; 