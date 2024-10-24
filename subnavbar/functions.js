export const log = (message) => console.log(message);

export const arrowFor = (repeatCount, callback) => {

    if (typeof callback !== "function")
        throw new Error("callback is not a function");

    for (let i = 0; i < repeatCount; i++)
        callback();

};

export const setHiddenClass = (element) => {

    if (!(isHtmlElement(element)))
        throw new Error("element is not a HTMLElement");
    else {
        element.classList.add("hidden");
        element.classList.remove("flex");
    }

}


export const setFlexClass = (element) => {

    if (!(isHtmlElement(element)))
        throw new Error("element is not a HTMLElement");
    else {
        element.classList.remove("hidden");
        element.classList.add("flex");
    }
}


const isHtmlElement = (element) => element instanceof HTMLElement;