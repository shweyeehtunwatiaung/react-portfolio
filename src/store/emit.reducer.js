import portfolios from "../data/portfolios";

const initialState = {
  switch_theme: "dark-theme",
  nav_toggle: false,
  menu_item: portfolios,
  isModal: false,
  modalApi_data: null,
};

const emit = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        switch_theme: action.payload,
      };
    case "NAV_TOGGLE":
      return {
        ...state,
        nav_toggle: action.payload,
      };
    case "MENU_ITEM":
      return {
        ...state,
        menu_item: action.payload,
      };
    case "IS_MODAL":
      return {
        ...state,
        isModal: action.payload,
      };
    case "IS_MODAL_API":
      return {
        ...state,
        modalApi_data: action.payload,
      };

    default:
      return state;
  }
};

export default emit;
