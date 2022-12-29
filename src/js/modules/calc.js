const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

      if (sizeBlock.value == '' || materialBlock.value == '') {
          resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
      } else if (promocodeBlock.value === 'IWANTPOPART') {
          resultBlock.textContent = Math.round(sum * 0.7);
      } else {
        
      }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;

// let obj1 = { n: 1 };
// let obj2 = obj1;

// obj1.x = obj1 = { n: 2 };

// console.log(obj1.x);
// console.log(obj2.x);

