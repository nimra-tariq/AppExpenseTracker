import { useReducer } from "react";
export const myReducer = (state, action) => {
    switch (action.type) {
        case 'addIncome':
            return {
                ...state,
                income: state.income + +action.value
            };

        case 'addExpense':
            return {
                ...state,
                expense: state.expense - +action.value
            };

        default:
            break;
    }
}