const getHTMLFromTemplate = (htmlcode, id) => {
  let newElem = document.createElement(`template`);
  newElem.innerHTML = htmlcode;
  newElem.id = id;
  return newElem;
};
export default getHTMLFromTemplate;
