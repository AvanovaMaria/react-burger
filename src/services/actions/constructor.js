import { v4 as uuidv4 } from 'uuid';

export const CONSTRUCTOR_ADD = "CONSTRUCTOR_ADD";
export const CONSTRUCTOR_DELETE = "CONSTRUCTOR_DELETE";
export const CONSTRUCTOR_REORDER = "CONSTRUCTOR_REORDER";
export const CONSTRUCTOR_RESET = "CONSTRUCTOR_RESET";

export const addToConstructor = (ingredient) => {
    return {
        type: "CONSTRUCTOR_ADD",
        payload: {
            ...ingredient,
            id: uuidv4(),
        }
    }
}