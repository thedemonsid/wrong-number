/**
 * Temporary State Management
 *
 * This store serves as a temporary solution during frontend development before API integration.
 *
 * TODO: REMOVE THIS FILE ONCE API IS INTEGRATED
 */
import { create } from "zustand";
import { mockStatements } from "./mock-data";
import { Statement, Person } from "./types";

interface Store {
  statements: Statement[];
  people: Person[];
  addStatement: (statement: Omit<Statement, "id">) => void;
  addPerson: (person: Omit<Person, "id">) => void;
}

export const useStore = create<Store>((set) => ({
  statements: mockStatements,
  people: [], // Initialize as empty array instead of mockPeople since types don't match
  addStatement: (newStatement) =>
    set((state) => ({
      statements: [
        ...state.statements,
        {
          ...newStatement,
          id: state.statements.length + 1,
        },
      ],
    })),
  addPerson: (newPerson) =>
    set((state) => ({
      people: [
        ...state.people,
        {
          ...newPerson,
          id: state.people.length + 1,
        },
      ],
    })),
}));
