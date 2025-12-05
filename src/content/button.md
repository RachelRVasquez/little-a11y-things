<section>

### What is it?

A `<button>` element is used for triggering actions.

<p class="tip"><b>Tip:</b> A link is for navigation. If it takes you somewhere, it's a link. If it triggers an action, it should be a button.</p>

</section>
<section>

### When to use it?

*   To trigger dialogs.
*   To trigger popovers.
*   To expand and collapse a mobile menu.
*   To toggle between light and dark themes, like the button on this site!
*   To add or remove rows of data within a form before submission.
*   To add an item to a shopping cart.
*   And more! This is by no means a full-list of what you can use buttons for.

</section>
<section>

### Required attributes & keyboard behavior


| ARIA Attribute    | What it does                                                                                                        |
| ----------- |---------------------------------------------------------------------------------------------------------------------|
| `aria-haspopup`      | Used to link the button to the popup it triggers. Accepted values: menu, listbox, tree, grid, dialog, true          |
| `aria-controls`   | Used to link the button to what it controls, whether that’d be a dialog, a mobile menu, a popover etc.              |
| `aria-pressed`   | Used for toggle buttons. For example, a play/pause button.                                                          |
| `aria-expanded`   | Used to indicate whether a child branch is visible. For example, a button that expands and collapses a mobile menu. |

<p class="tip"><b>Tip:</b> While it’s not required to set the <code>type</code> attribute on a
                    button,
                    doing so prevents unintended behavior. For example, if you have a button inside of a
                    form that is not meant to be a submit button, it may trigger form submission anyway if
                    you don’t specify the type as “button.”</p>
</section>