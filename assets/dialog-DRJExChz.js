const e=`---\r
title: Dialog\r
---\r
\r
### What is it?\r
\r
A \`<dialog>\` element creates a modal or non-modal-dialog. You may be more familiar with it as a "popup." It provides\r
built-in methods (\`show(), showModal()\` ) to control visibility, automatic handling of certain attributes out of the\r
box, and even a backdrop that can be styled with CSS (for modal-dialogs).\r
\r
### When to use it?\r
\r
A "modal" and a "dialog" are not the same thing. Surprised? Same! Blew my mind when I learned about it.\r
\r
The [A11y Collection](https://www.a11y-collective.com/blog/modal-vs-dialog/) has a nice in-depth review of the\r
differences, but here's the gist of it:\r
\r
#### Modal-dialogs\r
\r
Modal-dialogs block interaction with the rest of the page. A translucent full-screen background color will usually\r
appear behind the modal-dialog to emphasize this. This is why we should only use this dialog type for informing people\r
of critical information and/or confirming critical actions.\r
\r
Here are a few examples of when to use a modal-dialog.\r
\r
* Confirming destructive actions like before deleting data permanently.\r
* Collecting required payment details for checkout.\r
* For critical warnings and alerts.\r
* To acknowledge or agree to legal terms before proceeding.\r
* A login form to view content only accessible to those who are logged in.\r
\r
:::tip\r
Use the \`showModal()\` function so that the dialog displays on the top layer along with a \`::backdrop\` pseudo-element.\r
:::\r
\r
#### Non-modal-dialog\r
\r
Non-modal-dialogs provide optional info or options without preventing interaction with the content behind it. Here are a\r
few examples of when to use a non-modal-dialog:\r
\r
* Newsletter signups.\r
* Help text or tool tips.\r
* Optional settings and preferences.\r
* To advertise a product or sale.\r
\r
:::tip\r
Use the \`show()\` function to allow interaction outside of the dialog. Does not apply the \`::backdrop\` pseudo-element.\r
:::\r
\r
### Required attributes & keyboard behavior\r
\r
| ARIA Attribute                                  | What it does                                                                                                                                                                                                   |\r
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| \`aria-haspopup\` on the button (dialog trigger). | Set to “dialog” on the button that triggers the dialog.                                                                                                                                                        |\r
| \`aria-controls\` on the button (dialog trigger). | Use it with the ID that is on your dialog. It’s how we “connect” our button to the dialog it triggers.                                                                                                         |\r
| \`aria-labelledby\` on the dialog element.        | If your dialog has a heading or title, use its ID for this ARIA attribute. This links the dialog to its visible title, which is then read aloud by assistive technologies when the dialog appears.             |\r
| \`aria-describedby\` on the dialog element.       | If your dialog has a description or content, use its ID for this ARIA attribute. This links the dialog to its descriptive content, which is then read aloud by assistive technologies when the dialog appears. |\r
| \`autofocus\` within the dialog's content.        | Should be added to the first interactive element.                                                                                                                                                              |\r
\r
:::tip\r
The \`aria-modal\` attribute is automatically handled out of the box for modal-dialogs. This attribute informs\r
assistive technology that the content underneath the dialog is not interactive.\r
:::\r
\r
:::tip\r
The \`open\` attribute is also handled out of the box, but for non-modal dialogs only.\r
:::\r
\r
#### Keyboard expectations\r
\r
Keyboard behavior differs between the two kinds of dialogs. Here is how each differ and where both dialogs should have\r
the same keyboard behavior:\r
\r
* **Modal-dialog:** Maintains keyboard focus. None of the content behind the dialog is focusable unless the dialog is\r
  closed.\r
* **Modal-dialog:** When the dialog is opened, the \`autofocus\` attribute should be added to the element we expect people\r
  to interact with first.\r
* **Non-modal dialog:** Does not maintain keyboard focus. We can focus between the content behind it and the dialog.\r
* **Non-modal dialog:** Once the dialog loses focus, it should automatically close.\r
* **Non-modal dialog:** The Esc key should close the dialog. This might be appropriate for modal-dialogs too. Consult a\r
  UX expert.\r
* **Both:** When the dialog opens, focus moves into it.\r
* **Both:** When the dialog is closed, focus returns to the button that triggered the dialog.  \r
  If there isn't an element that serves as a trigger, then focus should return to the previously focused element from\r
  before the dialog was opened.\r
\r
:::tip\r
Handling Esc key functionality is handled out of the box for non-modal dialogs.\r
:::\r
\r
### Accessibility gotchas\r
\r
* Don’t trap focus if using a non-modal dialog.\r
* Make sure the first interactive element is focusable. This is usually the close button or if there’s a form in the\r
  dialog, the first field in the form.\r
* Don’t disable scrolling unless it’s a modal-dialog.\r
* Don’t use \`role="dialog"\` on a \`<dialog>\` element. It’s redundant. Only use if for some reason you’re not using the\r
  dialog element.\r
* Do not use \`tab-index\` on the dialog element. The dialog itself is not an interactive element, and does not receive\r
  focus.\r
* Trying to place something that isn't already inside the \`<dialog>\` element on top using CSS \`z-index\` will not work.\r
\r
### Further reading:\r
\r
* [MDN: Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)\r
* [WAI-ARIA: modal-dialog example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)\r
* [DEV Community: Dialogs vs Modals — Is there a difference?](https://dev.to/iam_timsmith/dialogs-vs-modals-is-there-a-difference-210k)\r
* [A11y Collective: When to use Modal vs Dialog components](https://www.a11y-collective.com/blog/modal-vs-dialog/)`;export{e as default};
