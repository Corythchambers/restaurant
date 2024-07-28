export default function createContact() {
    const contactDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact us';

    const address = document.createElement('p');
    address.textContent = '123 Main St, Anytown, USA';

    const phone = document.createElement('p');
    phone.textContent = '(123) 456-7890';

    const email = document.createElement('p');
    email.textContent = 'info@restaurant.com';

    contactDiv.appendChild(heading);
    contactDiv.appendChild(address);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);

    return contactDiv;
}