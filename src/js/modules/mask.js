const mast = (selector) => {
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if(def.length >= val.length) {
        val = def;
      }
      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a);
      });
  }
};  