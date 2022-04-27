import JSSoup from "jssoup";
import v, { trim } from "voca";
import _ from "underscore";

function despace(text) {
  return v.replaceAll(text, /\s+/g, " ").trim();
}

function deline(text) {
  return despace(stripHtml(v.replaceAll(text, /\n+/g, " ")));
}

function stripHtml(text) {
  return v.stripTags(text).trim();
}

function translateLinks(text) {
  const soup = new JSSoup(text);
  const anchors = soup.findAll("a");
  const links = anchors.map((anchor) => {
    const href = anchor.attrs.href;
    const text = anchor.text;
    return { href, text };
  });
  return links;
}

function translateYears(text) {
  text = v.replaceAll(text, /\b(19|20)\d{2}\b/g, (s) => {
    return `[${s}]([[Year: ${s}]])`;
  });
  return text;
}

function translate(text) {
  const links = translateLinks(text);
  text = stripHtml(text).trim();
  text = translateYears(text);

  _.forEach(links, (link) => {
    const title = v.titleCase(link.text);
    text = v.replaceAll(text, link.text, `[[${title}]]`);
  });

  return text;
}

export default {
  deline: deline,
  despace: despace,
  translate: translate,
  translateYears: translateYears,
  trim: trim,
  stripHtml: stripHtml,
};
