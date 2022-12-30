const dragAndDrop = () => {
  const filesInputs = document.querySelectorAll("[name='upload']");

  ["dragenter", "dragleave", "dragover", "drop"].forEach(event => {
    filesInputs.forEach(input => {
      input.addEventListener(event, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest(".file_upload").style.border = '5px solid yellow';
    item.closest(".file_upload").style.backgroundColor = 'rgba(0, 0, 0, .7)';
  }

  function unhighlight(item) {
    item.closest(".file_upload").style.border = 'none';
    if(item.closest(".calc_form")) {
      item.closest(".file_upload").style.backgroundColor = '#fff';
    } else {
      item.closest(".file_upload").style.backgroundColor = '#ededed';
    }
  }

  ["dragenter", "dragover"].forEach(event => {
    filesInputs.forEach(input => {
      input.addEventListener(event, () => highlight(input), false);
    });
  });

  ["dragleave", "drop"].forEach(event => {
    filesInputs.forEach(input => {
      input.addEventListener(event, () => unhighlight(input), false);
    });
  });

  filesInputs.forEach(input => {
    input.addEventListener("drop", (e) => { 
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split('.');

      arr[0].length > 6 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });

};

export default dragAndDrop;