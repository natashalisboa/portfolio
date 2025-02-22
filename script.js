function showExperience(index) {
    let items = document.querySelectorAll(".carousel__item");
    let buttons = document.querySelectorAll(".menu button");

    items.forEach(item => item.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    items[index].classList.add("active");
    buttons[index].classList.add("active");
}