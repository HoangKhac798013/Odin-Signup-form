document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));
    let passwordInput = document.querySelector('input[name="password"');
    let passwordConfirm = document.querySelector('input[name="confirm-password"');
    let leftDiv = document.querySelector("div #left-input");

    if(formData.password !== formData['confirm-password']) {
        passwordInput.className = "error";
        passwordConfirm.className = "error";
        

        let errorPhrase = document.createElement("p");
        errorPhrase.textContent="Password did not match";
        errorPhrase.style.fontSize = "10px";
        errorPhrase.style.color = "red";
        errorPhrase.id = "errorPhrase";
        if(leftDiv.lastElementChild.id !== "errorPhrase") {
            leftDiv.appendChild(errorPhrase);
        }
    }
    else {
        passwordInput.classList.remove("error");
        passwordConfirm.classList.remove("error");
        if(leftDiv.lastElementChild.id === "errorPhrase") {
            leftDiv.removeChild(leftDiv.lastElementChild);
        }
    }
}) 