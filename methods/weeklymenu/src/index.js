import { times } from "lodash";
import {
  generateID,
  generateDate
} from "@groceristar/static-data-generator";

// import { recipes } from '@groceristar/sd-wrapper'

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

export {
  getMenuGenerator
};
