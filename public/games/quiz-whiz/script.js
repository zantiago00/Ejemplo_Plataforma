console.log("Quiz Whiz game script loaded.");

document.querySelectorAll('.answers-area button').forEach(button => {
    button.addEventListener('click', (e) => {
        alert(`You clicked ${e.target.textContent}!`);
    });
});
