/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const currentPage = () => {
  const elements = document.getElementsByClassName("checked-item");
  for (const element of elements) {
    if (element.classList.contains("currentPage")) {
      element.classList.remove("currentPage");
      return element;
    }
  }
};

const getTarget = (targetId) => {
  const elements = document.getElementsByClassName("checked-item");
  for (const element of elements) {
    if (parseInt(element.innerHTML, 10) === targetId) {
      return element;
    }
  }
};
const getPreviousPage = () => {
  const elements = document.getElementsByClassName("checked-item");
  for (const element of elements) {
    if (element.classList.contains("currentPage")) {
      const previousPage = parseInt(element.innerHTML, 10) - 1;
      return previousPage;
    }
  }
};
const getNextPage = () => {
  const elements = document.getElementsByClassName("checked-item");
  for (const element of elements) {
    if (element.classList.contains("currentPage")) {
      const page = parseInt(element.innerHTML, 10) + 1;
      return page;
    }
  }
};

const selectFirstpage = () => {
  const element = getTarget(1);
  element.classList.add("currentPage");
};

const paginationUtils = {
  currentPage,
  getTarget,
  getPreviousPage,
  getNextPage,
  selectFirstpage,
};

export default paginationUtils;
