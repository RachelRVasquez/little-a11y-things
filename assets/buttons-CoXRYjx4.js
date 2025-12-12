const e=`---\r
title: Buttons\r
---\r
\r
### What is it?\r
\r
A \`<button>\` element is used for triggering actions.\r
\r
:::tip\r
A link is for navigation. If it takes you somewhere, it's a link. If it triggers an action, it should be a button.\r
:::\r
\r
### When to use it?\r
\r
*   To trigger dialogs.\r
*   To trigger popovers.\r
*   To expand and collapse a mobile menu.\r
*   To toggle between light and dark themes, like the button on this site!\r
*   To add or remove rows of data within a form before submission.\r
*   To add an item to a shopping cart.\r
*   And more! This is by no means a full-list of what you can use buttons for.\r
\r
### Required attributes & keyboard behavior\r
\r
| ARIA Attribute    | What it does                                                                                                        |\r
| ----------- |---------------------------------------------------------------------------------------------------------------------|\r
| \`aria-haspopup\`      | Used to link the button to the popup it triggers. Accepted values: menu, listbox, tree, grid, dialog, true          |\r
| \`aria-controls\`   | Used to link the button to what it controls, whether that’d be a dialog, a mobile menu, a popover etc.              |\r
| \`aria-pressed\`   | Used for toggle buttons. For example, a play/pause button.                                                          |\r
| \`aria-expanded\`   | Used to indicate whether a child branch is visible. For example, a button that expands and collapses a mobile menu. |\r
\r
:::tip\r
While it’s not required to set the \`type\` attribute on a button, doing so prevents unintended behavior. For example, if you have a button inside of a form that is not meant to be a submit button, it may trigger form submission anyway if you don’t specify the type as “button.”\r
:::\r
\r
#### Keyboard expectations\r
\r
*   There should always be a visible \`:focus\` and \`:focus-visible\` style on buttons. A \`:focus-within\` style if there are child elements for that button. It can be the same as your \`:hover\` style, an outline, or something different. Not sure what's the difference between them are? You can read about ["Focus vs focus-within vs focus-visible" on Medium.](https://bharathvaj-ganesan.medium.com/focus-vs-focus-within-vs-focus-visible-2db18593495b)\r
\r
### Accessibility gotchas\r
\r
*   If your button does not contain text (an icon only button), then provide alternative text for screen readers to read out loud.\r
*   Prevent screen readers from trying to read out SVG icons with \`aria-hidden=”true”\`. I’ve given examples in the demo area earlier in this page.\r
\r
:::tip\r
If styling is what makes you hesitate to use a button rather than a link, you can style buttons to look like links. I like to create a Sass mixin or a class to “reset” buttons, and then add my styles after. Here’s an example:\r
:::\r
\r
\`\`\`sass\r
@mixin remove-btn-defaults() {\r
  padding: 0; // can remove or set as a parameter\r
  background: none;\r
  border: none;\r
  border-radius: 0;\r
}\r
\`\`\`\r
\r
:::tip\r
If you're looking for CSS for text you only want visible to screen readers, here is a Sass mixin example:\r
:::\r
\r
\`\`\`sass\r
@mixin screen-reader-only {\r
  border: 0;\r
  clip-path: inset(50%);\r
  height: 1px;\r
  margin: -1px;\r
  overflow: hidden;\r
  padding: 0;\r
  position: absolute;\r
  width: 1px;\r
  word-wrap: normal !important;\r
}\r
\`\`\`\r
\r
### Further reading:\r
\r
*   [MDN: The button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)\r
*   [The A11y Collective: A web developer's guide to buttons vs links](https://www.a11y-collective.com/blog/button-vs-link/)\r
*   [Karl Groves: Links are not buttons. Neither are divs or spans.](https://karlgroves.com/links-are-not-buttons-neither-are-divs-and-spans/)\r
*   [The Admin Bar: Divs are not buttons.](https://theadminbar.com/accessibility-weekly/divs-are-not-buttons/)`;export{e as default};
