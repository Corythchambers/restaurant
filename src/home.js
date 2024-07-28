import restaurantImage from './images/restaurant.jpg';

export default function createHome() {
    const homeDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to El Pato';

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Restaurant Image';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'We have the best enchilada plate. It\'s amazing to finish your enchiladas then mix your rice and beans in the enchilada sauce. We used to get the chicken and cheese tacos in the beginning, I miss those. I think the last taco I used to get the most was an avocado taco';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(image);
    homeDiv.appendChild(paragraph);

    return homeDiv;
}
