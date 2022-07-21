

const toastifyElement = document.getElementById("alert")



export const toastifyy = (msg) => {

    toastifyElement.style.right = "0%";

    toastifyElement.children[0].innerHTML = msg;

    toastifyElement.children[1].addEventListener("click", () => {

        toastifyElement.style.right = "-100%";

    });

    setTimeout(function () {
        
        toastifyElement.style.right = "-100%";

    }, 3000)
}; 