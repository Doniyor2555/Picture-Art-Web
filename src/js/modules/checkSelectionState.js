const checkSelectionState = (state) =>  {
  const selection = document.querySelectorAll("select");
  function bindActionToElems(event, elem, prop) { 
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case "SELECT" : 
            state[prop] = item.value;
          break;
        }
        console.log(state);
      });
    });
  }
  bindActionToElems("change", selection, "selection");
};

export default checkSelectionState;