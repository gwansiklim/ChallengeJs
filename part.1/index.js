import "./style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const handles = document.querySelector("h2");

const superEventHandler = {
    enter: function () {
        handles.innerText = "The Mouse is here!";
        handles.style.color = colors[0];
    },
    leave: function () {
        handles.innerText = "The Mouse is gone!";
        handles.style.color = colors[1];
    },
    webWidow: function () {
        document.body.innerText = "You just resizde";
        document.body.style.color = colors[3];
    },
    rightClick: function () {
        document.body.innerText = "That was a Right Click";
        document.body.style.color = colors[4];
    }
};
handles.addEventListener("mouseenter", superEventHandler.enter); // 마우스 올렸을때 변형
handles.addEventListener("mouseleave", superEventHandler.leave); // 마우스에 안올렸을때 변형
window.addEventListener("resize", superEventHandler.webWidow); // 화면이 조금이라도 변형이 되면 바뀜
window.addEventListener("contextmenu", superEventHandler.rightClick); // 마우스 우클릭시 변형