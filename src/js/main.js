import modals from "./modules/modals";
import sliders from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextinputs from './modules/checkTextinputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import checkSelectionState from "./modules/checkSelectionState";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";



window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  
  let modalState = {};

  checkSelectionState(modalState);
  modals();
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', 3000);
  sliders(".main-slider-item", "vertical");
  forms(modalState);
  mask("[name='phone']");
  checkTextinputs('[name="name"]');
  checkTextinputs('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureSize(".sizes-block");
  accordion(".accordion-heading");
  burger(".burger-menu", ".burger");
  scrolling(".pageup");
});