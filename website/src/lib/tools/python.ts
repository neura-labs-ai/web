import { SupportedLanguages } from "@prisma/client";
import { JsonSearchData } from ".";

const data: JsonSearchData = [
  {
    id: "643de5c0ac8c1d3a72951dae",
    name: "NumPy",
    lang: SupportedLanguages.Python,
  },
  {
    id: "643de5c1ac8c1d3a72951dba",
    name: "Pandas",
    lang: SupportedLanguages.Python,
  },
  {
    id: "643de5c0ac8c1d3a72951db2",
    name: "Django",
    lang: SupportedLanguages.Python,
  },
  {
    id: "643de5c1ac8c1d3a72951db8",
    name: "Flask",
    lang: SupportedLanguages.Python,
  },
  {
    id: "643de5c1ac8c1d3a72951db4",
    name: "TensorFlow",
    lang: SupportedLanguages.Python,
  },
];

export default data;
