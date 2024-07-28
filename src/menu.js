export default function createMenu() {
    const menuDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const list = document.createElement('ul');

    const items = ['Dish 1', 'Dish 2', 'Dish 3']; 
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    menuDiv.appendChild(heading);
    menuDiv.appendChild(list);

    return menuDiv;
}