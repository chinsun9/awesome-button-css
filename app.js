const btn = document.querySelectorAll('.btn');

btn.forEach((item) => {
  item.addEventListener(
    'mouseenter',
    function (e) {
      const target_element = e.target;
      let x = e.pageX - target_element.offsetLeft;
      let y = e.pageY - target_element.offsetTop;

      const sapn_element = target_element.children[0];
      sapn_element.style.top = `${y}px`;
      sapn_element.style.left = `${x}px`;
    },
    false
  );
  
  item.addEventListener(
    'mouseleave',
    function (e) {
      const target_element = e.target;
      let x = e.pageX - target_element.offsetLeft;
      let y = e.pageY - target_element.offsetTop;

      const sapn_element = target_element.children[0];
      sapn_element.style.top = `${y}px`;
      sapn_element.style.left = `${x}px`;
    },
    false
  );
});
