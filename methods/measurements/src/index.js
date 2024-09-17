import _ from "lodash";
import {
  //   setupPath,
  //   readAllFiles,
  generateArrWithId
} from "@groceristar/static-data-generator";

import {
  measurementSystem,
  measurementUnits
} from "@groceristar/sd-wrapper";

// const setupPathMeasurements = pathToSrc => {
//     files = require(pathToSrc + '/files');
// };

const getMeasurementSystem = () => {
  // const files = setupPath("../../sd/src");
  const result = [];
  const measurementSystemId = generateArrWithId(measurementSystem, "id");

  _.map(measurementSystemId, system => {
    result.push({
      id: system.id,
      alias: system.alias,
      title: _.capitalize(system.alias)
    });
  });

  return result;
};

const getMeasurementUnits = () => {
  // const files = setupPath("../../sd/src");
  const dirMeasurementUnits = parse(measurementUnits).dir;
  const result = [];

  let measurementUnitsList = readAllFiles(dirMeasurementUnits)[1];

  measurementUnitsList = generateArrWithId(measurementUnitsList, "id");
  measurementUnitsList = generateArrWithId(measurementUnitsList, "system_id");

  _.map(measurementUnitsList, unit => {
    result.push({
      id: unit.id,
      system_id: unit.system_id,
      type: unit.type,
      name: unit.name,
      singular: unit.singular,
      plural: unit.plural,
      short: unit.short,
      pattern: unit.pattern,
      error: "null"
    });
  });
  return result;
};

export {
  // setupPathMeasurements,
  getMeasurementSystem,
  getMeasurementUnits
};
