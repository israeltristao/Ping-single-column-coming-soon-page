const email = document.querySelector(".email")
const send = document.querySelector(".submit")
const errorMessage = document.querySelector(".message")

send.addEventListener("click", e => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    e.preventDefault();
    if (email.value.match(pattern)) {
        true;
    } else {
        errorMessage.classList.add("error")
        email.style.border = "1px solid #ff5263";
    }
}
)