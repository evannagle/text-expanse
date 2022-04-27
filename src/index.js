import _ from "underscore";
import JSSoup from "jssoup";
import v from "voca";
import rtfTranslator from "./translators/rtf";
import birthdaysTranslator from "./translators/birthdays";

// jQuery
// const jsdom = require("jsdom");
// $ = require("jquery")({});

TextExpander = TextExpander || {};

_.extend(TextExpander, {
  expanse: {
    _: _,
    v: v,
    Soup: JSSoup,
    translate: {
      deline: rtfTranslator.deline,
      despace: rtfTranslator.despace,
      rtf: rtfTranslator.translate,
      trim: rtfTranslator.trim,
      stripHtml: rtfTranslator.stripHtml,
      birthdaysTable: birthdaysTranslator.translate,
    },
    clipboard: TextExpander.pasteboardText || "",
  },
});

export default TextExpander;
