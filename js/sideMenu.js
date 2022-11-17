const links = document.querySelector(".side_menu > ul > li");
const firstList = document.querySelector(".side_menu > ul > li:first-child");
const line = document.querySelector(".line");
const contents__list = document.querySelector(".content");
const width = document.querySelector(".container").clientWidth;

const clickLink = (e, index) => {
  contents__list.style.transform = `translateX(${-index * width}px)`;
  line.style.hight = `${e.currentTarget.offsetHeight}px`;
  line.style.top = `${e.currentTarget.offsetTop}px`;
  line.style.left = `${
    e.currentTarget.offsetLeft + e.currentTarget.offsetRight
  }px`;
  contentsIndex = index;
};
links.forEach((link, index) => {
  link.addEventListener("click", (e) => clickLink(e, index));
});

line.style.hight = `${firstList.offsetHeight}px`;
line.style.top = `${firstList.offsetTop}px`;
line.style.left = `${firstList.offsetLeft + firstList.offsetWidth}`;
