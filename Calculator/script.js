const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let output = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            output = "";
        } 
        else if (value === "DEL") {
            output = output.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                output = eval(output).toString();
            } catch {
                output = "Error";
            }
        } 
        else {
            output += value;
        }

        display.value = output;
    });
});