
const dialog_box = document.querySelector(".dialog-box");
const dialog_action_ok = document.querySelector(".dialog-action-ok");
const open_dialog_button = document.querySelector(".open-dialog-button");

open_dialog_button.addEventListener("click", () => {
    dialog_box.showModal();
    // dialog_box.setAttribute("open", "");

    open_dialog_button.setAttribute("style", "display:none")
})


dialog_action_ok.addEventListener("click", () => {
    dialog_box.close();
    open_dialog_button.removeAttribute("style", "display:none");
});


var h1_element = document.createElement("h1");
h1_element.innerText = "emircan";
dialog_box.appendChild(h1_element);

