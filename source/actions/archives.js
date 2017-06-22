import { createAction } from "redux-actions";
import {
    ARCHIVES_ADD_LOCKED_SOURCE,
    ARCHIVES_ADD_UNLOCKED_SOURCE,
    ARCHIVES_TOGGLE_IS_UNLOCKING,
    ARCHIVES_TOGGLE_UNLOCK_PASS_PROMPT,
    ARCHIVES_UNLOCK_SOURCE
} from "./types.js";

export const addLockedSource =                  createAction(ARCHIVES_ADD_LOCKED_SOURCE);
export const addUnlockedSource =                createAction(ARCHIVES_ADD_UNLOCKED_SOURCE);
export const setIsUnlocking =                   createAction(ARCHIVES_TOGGLE_IS_UNLOCKING);
export const setSourceUnlocked =                createAction(ARCHIVES_UNLOCK_SOURCE);
export const showUnlockPasswordPrompt =         createAction(ARCHIVES_TOGGLE_UNLOCK_PASS_PROMPT);