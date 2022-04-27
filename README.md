## TextExpanse

TextExpanse is a helper library for JavaScript [TextExpander](https://textexpander.com/) snippets. There is a specific focus on translating clipboard data into usable [Markdown](https://daringfireball.net/projects/markdown/) and [Roam Research](https://roamresearch.com/) syntax. Be forewarned-- this project is under active development.

## Installation

Start by cloning the repo.

```bash
git clone git@github.com:evannagle/text-expanse.git
cd text-expanse
npm i
```

Now you can build and copy the JS library.

```bash
npm run build
cat dist/bundle.js | pbcopy
```

In TextExpander, create a new **Plain Text** snippet and paste the contents of the JavaScript file (which are now congregating on your clipboard) into the body of the snippet. Give the Snippet a label of **TextExpanse** and set the abbreviation to _expanse_.

## Usage

Once you've created your _expanse_ snippet, you can use the functionality provided by the library in your own **JavaScript snippets**.

```
%snippet:expanse%

const { clipboard, translate } = TextExpander.expanse;

translate.rtf(clipboard);
```
