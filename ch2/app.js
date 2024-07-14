function comboboxUI() {
  const $combobox = Array.from(document.querySelectorAll(".combobox_wrap"));
  if (!$combobox.length) return;

  document.body.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".combobox_wrap")) {
      $combobox.forEach((el) => el.children[1].classList.remove("is_shown"));
    }
  });

  function focusHandler(e, optionsWrap) {
    const value = e.target.value;
    optionsWrap.classList.add("is_shown");
    if (value.trim() !== "")
      filterOptions(value, optionsWrap.children[0].children);
  }

  function inputHandler(e, options) {
    const value = e.target.value;
    filterOptions(value, options.children);
  }

  function optionHandler(e, input, optionsWrap) {
    const { optionValue } = e.target.dataset;
    input.value = optionValue;
    optionsWrap.classList.remove("is_shown");
  }

  function filterOptions(value, options) {
    Array.from(options).forEach((option) => {
      const [button] = option.children;
      const { optionLabel } = button.dataset;
      if (optionLabel.indexOf(value) === -1) {
        option.classList.add("is_hidden");
      } else {
        option.classList.remove("is_hidden");
      }
    });
  }

  $combobox.forEach((item) => {
    const [input, optionsWrap] = item.children;
    const [options] = optionsWrap.children;
    if (!options.children) return;

    input.autocomplete = "off";
    input.addEventListener("input", (e) => {
      inputHandler(e, options);
    });
    input.addEventListener("focus", (e) => {
      focusHandler(e, optionsWrap);
    });

    Array.from(options.children).forEach((option) => {
      const [button] = option.children;
      button.addEventListener("click", (e) => {
        optionHandler(e, input, optionsWrap);
      });
    });
  });

  function clickSide(e) {
    if (
      !e.target.closest(".combobox_wrap") &&
      !document.activeElement.closest(".combobox_wrap") &&
      !e.target.matches(".option_btn")
    ) {
      $combobox.forEach((el) => el.children[1].classList.remove("is_shown"));
    }
  }

  window.addEventListener("click", clickSide);
  window.addEventListener("touchstart", clickSide);
}

comboboxUI();
