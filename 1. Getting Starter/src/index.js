import _ from 'lodash';

document.getElementById('button1').addEventListener('click', function(){
    const el = document.getElementById('header');
    el.innerHTML = "I have been clicked!";

    const listItems = ["Apple", "Orange", "Banana"]
    const ul = document.getElementById('shoppingList');
    _.forEach(listItems,(item) => {
        const tempEl = document.createElement('li');
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});