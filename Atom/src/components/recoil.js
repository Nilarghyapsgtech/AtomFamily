import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

// Define the atom family
export const Atomfamily = atomFamily({
  key: 'AtomFamily',
  default: (id) => {
    // Return the atom corresponding to the provided id
    return selectorFamily({
      key: `AtomselectorFamily_${id}`,
      get: async () => {
        const response = await axios.get(`http://localhost:3000`);
        const data = response.data;
        return data;
      }
    });
  }
});
