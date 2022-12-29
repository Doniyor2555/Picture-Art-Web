const scrolling = (upSelector) => {

  const upElem = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  const elem = document.documentElement,
        body = document.body;

    const calcScroll = () => {
      upElem.addEventListener('click', function(event) {
          let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

          if (this.hash !== '') {
              event.preventDefault();
              let hashElement = document.querySelector(this.hash),
                  hashElementTop = 0;

              while (hashElement.offsetParent) {
                  hashElementTop += hashElement.offsetTop;
                  hashElement = hashElement.offsetParent;
              }

              hashElementTop = Math.round(hashElementTop);
              smoothScroll(scrollTop, hashElementTop, this.hash);
          }
      });
    };

  const smoothScroll = (from, to, hash) => {
      let timeInterval = 1,
          prevScrollTop,
          speed;

      if (to > from) {
          speed = 30;
      } else {
          speed = -30;
      }
      
      let move = setInterval(function() {
          let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

          if (
              prevScrollTop === scrollTop ||
              (to > from && scrollTop >= to) ||
              (to < from && scrollTop <= to)
          ) {
              clearInterval(move);
              history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
          } else {
              body.scrollTop += speed;
              elem.scrollTop += speed;
              prevScrollTop = scrollTop;
          }
      }, timeInterval);
  };

  calcScroll();
};

export default scrolling;