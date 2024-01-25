import { InitialData, serverClient } from 'oc-server';
import styles from './styles.css';
import { getSettings } from 'oc-server';
import img1 from "../img/bag1.jpeg";
import img2 from "../img/bag2.jpg";


const handleAddToCart = async (element, itemId) => {
  console.log(`Item with ID ${itemId} added to cart`);
};

const onRender = (cb: (element: HTMLElement) => void) => {
  const { id } = getSettings();
  window.oc.events.on('oc:rendered', (e, data) => {
    if (data.id === id) {
      cb(document.querySelector(`[id="${id}"]`)!);
    }
  });
};

export default ({ firstName, lastName, hobbies, born }: InitialData) => {
  onRender((element) => {
    element.querySelectorAll(`.${styles.button}`).forEach((button, index) => {
      button.addEventListener('click', async () => {
        const itemId = index === 0 ? 'item1' : 'item2';
        await handleAddToCart(element, itemId);
      });
    });
  });

  return /* html */ `
    <div class="${styles.container}">
      <h1 style="margin: 0 0 20px 0;">
        Welcome to Shopping Center
      </h1>
      <div class="${styles.product}">
      <div class="${styles.card}">
      <img width="200" height="200" style="padding: 20px;" src="${img1}" alt="Bag" />
      <button class="${styles.button}">Add To Cart</button>
      </div>
      <div class="${styles.card}">
          <img width="200" height="200" style="padding: 20px;" src="${img2}" alt="Bag" />
          <button class="${styles.button}">Add To Cart</button>
    </div>
    </div>
  `;
};
