import modals from "./modules/modals";
import sliders from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextinputs from './modules/checkTextinputs';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  
  modals();
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', 3000);
  sliders(".main-slider-item", "vertical");
  forms();
  mask("[name='phone']");
  checkTextinputs('[name="name"]');
  checkTextinputs('[name="message"]');
  showMoreStyles(".button-styles", ".styles-2");
});