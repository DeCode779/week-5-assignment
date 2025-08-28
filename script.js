// Part 1: Variables & Conditional
document.getElementById("checkAgeBtn").addEventListener("click", function () {
    const age = Number(document.getElementById("ageInput").value);
    const result = document.getElementById("ageResult");
    if (age >= 18) {
        result.textContent = "You are an adult.";
    } else {
        result.textContent = "You are a minor.";
    }
});

// Part 2: Functions
function greet(name) {
    return `Hello, ${name} !Welcome to JS.`;
}

document.getElementById("greetBtn").addEventListener("click", function () {
    const greetResult = document.getElementById("greetResult");
    greetResult.textContent = greet("Student");
});

// Part 3: Loops
document.getElementById("loopBtn").addEventListener("click", function () {
    let numbers = "";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    document.getElementById("loopResult").textContent = numbers;
});

// Part 4: DOM Manipulation
document.getElementById("addItemBtn").addEventListener("click", function () {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");
    li.textContent = "New Item " + (ul.children.length + 1);
    ul.appendChild(li);
});