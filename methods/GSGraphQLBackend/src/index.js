import _ from "lodash";
import {
  generateID,
  generateDate,
  getFileKey
} from "@groceristar/static-data-generator" ;

// const {
//   generateID,
//   generateDate,
//   getFileKey
// } = require("@groceristar/static-data-generator");

// it should be grabbed from sd
import {
  favorites,
  departments,
  userGrocery,
  items,
  users,
  ingredients,
  grocery
} from "@groceristar/sd-wrapper";

// const {
//   favorites,
//   departments,
//   userGrocery,
//   items,
//   users,
//   ingredients,
//   grocery
// } = require("@groceristar/sd-wrapper");

// @TODO as we may need to be able to call this function from the
// outside of this project - we should move this method outside

// const getFileKey = file =>
//   _.map(file, (item, index) => ({
//     key: generateID(),
//     ...item
//   }));

const getFavoritesKey = () => getFileKey(favorites);

const getDepartmentsKey = function() {
  const results = departments;
  return results.map((item, index) => ({
    departmentId: generateID(),
    name: item.name,
    desc: "description for department1", // @TODO this was a blank field, but it cannot look like this all the time
    created_at: generateDate(),
    updated_at: generateDate()
  }));
};

const getUserGroceryKey = () => getFileKey(userGrocery);

const getItemsKey = () => getFileKey(items);

const getUsersKey = function() {
  // let results = users

  return users.map((item, index) => ({
    userId: generateID(),
    favs: false,
    ingredientId: 1,
    groceryId: 1
  }));
};

const getIngredientsKey = function(limit = false) {
  let results = ingredients;

  if (limit) {
    results = _.slice(results, 100);
  }

  return results.map((item, index) => ({
    ingredientId: generateID(),
    favs: "",
    name: item.name,
    description: "description", // @TODO this was a blank field before, but it cannot be as it is all the time
    custom: false,
    created_at: generateDate(),
    updated_at: generateDate(),
    id: 1, // @TODO this method should be extended, in order to get connection with ingredients and departments
    department_id: 1
  }));
};

const getGroceryKey = function() {
  // let results = grocery

  return grocery.map((item, index) => ({
    groceryId: generateID(),
    name: item.name,
    img: item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: generateDate(),
    updated_at: generateDate(),
    id: 1,
    favs: false
  }));
};

export {
  getFavoritesKey,
  getDepartmentsKey,
  getUserGroceryKey,
  getItemsKey,
  getUsersKey,
  getIngredientsKey,
  getGroceryKey
};
