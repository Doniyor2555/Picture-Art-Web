import { getResource } from "../services/requets";

const showMoreStyles = (trigger, wrapper) =>  {
  const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //   card.classList.add("animated", 'fadeInUp');
    // }); 

    // btn.addEventListener("click", () => {
    //   cards.forEach(card => {
    //     card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
    //     card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    //   });
    //   btn.remove();
    // });

    btn.addEventListener("click", function() {
      getResource("http://localhost:3000/styles")
      .then(res => {
        createCards(res);
      })
      .catch(error => {
        console.log(error);
        const errorModal = document.createElement("div");
        errorModal.innerHTML = `
          <div class="errorModalShow" style="width: 500px; height=300px; background-color: #fff; box-shadow: -3px 3px 10px rgb(110, 105, 105);  position: absolute; left: 50%; transform: translateX(-50%);">
            <div class="wrapperError" style="position: relative;">
              <div class="close" style="font-size: 50px; position: absolute; right: 20px; top: -17px; color: red; ">&times;</div>
              <h1 class="errorH1" style="color: red; text-align: center;">Error</h1>
            </div>
          </div>
        `;
        document.querySelector(wrapper).appendChild(errorModal);
        const errorModalShow = document.querySelector(".errorModalShow");
        const closeModalError = document.querySelector(".close");
        closeModalError.addEventListener("click", () => {
          errorModalShow.style.display = 'none';
        });
        setTimeout(() => {
          errorModalShow.remove();
          btn.style.display = 'block';
        }, 5000);
      }); 
      this.style.display = 'none';
    });

    function createCards (response) {
      response.forEach(({src, title, link}) => {
        let card = document.createElement("div");
        card.classList.add("animated", 'fadeInUp',  "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");

        card.innerHTML = `
        <div class="styles-block">
          <img src=${src} alt="style">
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
        `;

        document.querySelector(wrapper).appendChild(card);
      });
    }


    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
					// <div class=styles-block>
					// 	<img src=assets/img/styles-5.jpg alt>
					// 	<h4>Пастелью</h4>
					// 	<a href="#">Подробнее</a>
					// </div>
		// 		</div>

};

export default showMoreStyles;