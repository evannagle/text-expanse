import rtfTranslator from "./rtf";
import v from "voca";
import _ from "underscore";

function translate(text) {
  text = rtfTranslator.stripHtml(text);
  const lines = _.compact(v.split(text, /\n/));
  let chunks = _.chunk(lines, 3);
  _.map(chunks, (chunk) => {
    chunk[0] = rtfTranslator.translateYears(chunk[0]);
    chunk[1] = `\t[[${chunk[1]}]]`;
    chunk[2] = `\t\t${chunk[2]}`;
  });
  chunks = _.flatten(chunks);
  return chunks.join("\n");
}

export default {
  translate: translate,
};
