import v from "voca";
import TextExpander from "./index";

const { translate } = TextExpander.expanse;

test("translate rtf", () => {
  const clipped = `
    <meta charset='utf-8'><div class="title font-18 font-weight-bold mb-10" style="box-sizing: border-box; font-size: 18px; font-weight: 700; margin-bottom: 10px; color: rgb(26, 26, 26); font-family: -apple-system, &quot;system-ui&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Roboto, Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Lou Gehrig's 2,130-game streak ended</div><div class="description font-serif" style="box-sizing: border-box; font-family: Georgia, serif; color: rgb(26, 26, 26); font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">On this day in 1939,<span> </span><a href="https://www.britannica.com/topic/New-York-Yankees" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">New York Yankee</a><span> </span>great<span> </span><a href="https://www.britannica.com/biography/Lou-Gehrig" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">Lou Gehrig</a>, the “Iron Horse” of American<span> </span><a href="https://www.britannica.com/sports/baseball" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">baseball</a>, ended his streak of consecutive games played (2,130), setting a record that stood until 1995, when it was broken by<span> </span><a href="https://www.britannica.com/biography/Cal-Ripken-Jr" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">Cal Ripken, Jr.</a></div>
  `;
  const text = translate.rtf(clipped);
  expect(text).toBe(
    "[[Lou Gehrig]]'s 2,130-game streak endedOn this day in [1939]([[Year: 1939]]), [[New York Yankee]] great [[Lou Gehrig]], the “Iron Horse” of American [[Baseball]], ended his streak of consecutive games played (2,130), setting a record that stood until [1995]([[Year: 1995]]), when it was broken by [[Cal Ripken, Jr.]]"
  );
});

test("deline rtf", () => {
  const clipped = "line 1\nline 2\nline 3\n\n";
  const text = translate.deline(clipped);
  expect(text).toBe("line 1 line 2 line 3");
});

test("despace rtf", () => {
  const clipped = "part 1    part  2 part 3  part 4   ";
  const text = translate.despace(clipped);
  expect(text).toBe("part 1 part 2 part 3 part 4");
});

test("trim rtf", () => {
  const clipped = "A line with a line break\n\n";
  const text = v.trim(clipped);
  expect(text).toBe("A line with a line break");
});

test("strip rtf", () => {
  const clipped = `
    <meta charset='utf-8'><div class="title font-18 font-weight-bold mb-10" style="box-sizing: border-box; font-size: 18px; font-weight: 700; margin-bottom: 10px; color: rgb(26, 26, 26); font-family: -apple-system, &quot;system-ui&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Roboto, Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Lou Gehrig's 2,130-game streak ended</div><div class="description font-serif" style="box-sizing: border-box; font-family: Georgia, serif; color: rgb(26, 26, 26); font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">On this day in 1939,<span> </span><a href="https://www.britannica.com/topic/New-York-Yankees" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">New York Yankee</a><span> </span>great<span> </span><a href="https://www.britannica.com/biography/Lou-Gehrig" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">Lou Gehrig</a>, the “Iron Horse” of American<span> </span><a href="https://www.britannica.com/sports/baseball" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">baseball</a>, ended his streak of consecutive games played (2,130), setting a record that stood until 1995, when it was broken by<span> </span><a href="https://www.britannica.com/biography/Cal-Ripken-Jr" class="md-crosslink" style="box-sizing: border-box; color: rgb(20, 89, 157); text-decoration: none;">Cal Ripken, Jr.</a></div>
  `;
  const text = translate.stripHtml(clipped);
  expect(text).toBe(
    "Lou Gehrig's 2,130-game streak endedOn this day in 1939, New York Yankee great Lou Gehrig, the “Iron Horse” of American baseball, ended his streak of consecutive games played (2,130), setting a record that stood until 1995, when it was broken by Cal Ripken, Jr."
  );
});

test("birthdays", () => {
  const clipped = `
1933
James Brown
American singer
1921
Sugar Ray Robinson
American boxer
1919
Pete Seeger
American singer
1906
Mary Astor
American actress
1903
Bing Crosby
American singer, actor, and songwriter
`;

  const text = translate.birthdaysTable(clipped);
  expect(text).toBe(
    `[1933]([[Year: 1933]])\n\t[[James Brown]]\n\t\tAmerican singer\n[1921]([[Year: 1921]])\n\t[[Sugar Ray Robinson]]\n\t\tAmerican boxer\n[1919]([[Year: 1919]])\n\t[[Pete Seeger]]\n\t\tAmerican singer\n[1906]([[Year: 1906]])\n\t[[Mary Astor]]\n\t\tAmerican actress\n[1903]([[Year: 1903]])\n\t[[Bing Crosby]]\n\t\tAmerican singer, actor, and songwriter`
  );

  // console.log(text);
});
