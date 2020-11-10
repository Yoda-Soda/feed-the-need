const trunk = (description, trunkNum) => {
  if (description === "") {
    return "";
  }
  let stringWithoutLineBreaks = description.replace(/(\r\n|\n|\r)/gm, " "); //reconstructs string and filters out linebreaks
  return stringWithoutLineBreaks.slice(0, trunkNum) + "..."; //returns truncated string with elipses
};

export default trunk;
