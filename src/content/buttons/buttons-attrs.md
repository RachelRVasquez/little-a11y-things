### Required attributes & keyboard behavior

| ARIA Attribute    | What it does                                                                                                        |
| ----------- |---------------------------------------------------------------------------------------------------------------------|
| `aria-haspopup`      | Used to link the button to the popup it triggers. Accepted values: menu, listbox, tree, grid, dialog, true          |
| `aria-controls`   | Used to link the button to what it controls, whether that’d be a dialog, a mobile menu, a popover etc.              |
| `aria-pressed`   | Used for toggle buttons. For example, a play/pause button.                                                          |
| `aria-expanded`   | Used to indicate whether a child branch is visible. For example, a button that expands and collapses a mobile menu. |

:::tip
While it’s not required to set the `type` attribute on a button, doing so prevents unintended behavior. For example, if you have a button inside of a form that is not meant to be a submit button, it may trigger form submission anyway if you don’t specify the type as “button.”
:::

#### Keyboard expectations

*   There should always be a visible `:focus` and `:focus-visible` style on buttons. A `:focus-within` style if there are child elements for that button. It can be the same as your `:hover` style, an outline, or something different. Not sure what's the difference between them are? You can read about ["Focus vs focus-within vs focus-visible" on Medium.](https://bharathvaj-ganesan.medium.com/focus-vs-focus-within-vs-focus-visible-2db18593495b)