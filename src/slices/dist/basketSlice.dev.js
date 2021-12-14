"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectItems = exports.removeFromBasket = exports.addToBasket = exports.basketSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  items: []
};
var basketSlice = (0, _toolkit.createSlice)({
  name: "basket",
  initialState: initialState,
  reducers: {
    addToBasket: function addToBasket(state, action) {},
    removeFromBasket: function removeFromBasket(state, action) {}
  }
});
exports.basketSlice = basketSlice;
var _basketSlice$actions = basketSlice.actions,
    addToBasket = _basketSlice$actions.addToBasket,
    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice

exports.removeFromBasket = removeFromBasket;
exports.addToBasket = addToBasket;

var selectItems = function selectItems(state) {
  return state.basket.items;
};

exports.selectItems = selectItems;
var _default = basketSlice.reducer;
exports["default"] = _default;