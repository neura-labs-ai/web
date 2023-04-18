import { JsonSearchData } from "@/lib/data/index";
import { SupportedLanguage } from "@prisma/client";

const data: JsonSearchData = [
  {
    id: "643de5c0ac8c1d3a72951dae",
    name: "NumPy",
    lang: SupportedLanguage.Python,
  },
  {
    id: "643de5c1ac8c1d3a72951dba",
    name: "Pandas",
    lang: SupportedLanguage.Python,
  },
  {
    id: "643de5c0ac8c1d3a72951db2",
    name: "Django",
    lang: SupportedLanguage.Python,
  },
  {
    id: "643de5c1ac8c1d3a72951db8",
    name: "Flask",
    lang: SupportedLanguage.Python,
  },
  {
    id: "643de5c1ac8c1d3a72951db4",
    name: "TensorFlow",
    lang: SupportedLanguage.Python,
  },
];

export default data;
