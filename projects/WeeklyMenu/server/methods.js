const { times } = require("lodash");
const {mkdir} = require("fs");
const {
  generateID,
  generateDate
} = require("@groceristar/static-data-generator");

// "@groceristar/sd-wrapper"
const getMenuGenerator = numberOfWeeks => {
  const result = times(numberOfWeeks, index => ({
    id: generateID(),
    title: `Weekly menu ${index}`,
    date: generateDate(),
    description: `description for Weekly menu ${index}`,
    notes: `This is a chef notes for wm ${index}`
  }));
  return result;
};

// Create output directory 
const createOutputFolder = async() => {
  await mkdir('./output',(error,result)=>{
    if(error){
        return console.log('Could not create directory');
    }
    console.log('Directory succesfully created');
  });
};

module.exports = {
  getMenuGenerator,
  createOutputFolder
};
