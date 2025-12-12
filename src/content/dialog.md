---
title: Dialog
---

### What is it?

A `<dialog>` element creates a modal or non-modal-dialog. You may be more familiar with it as a "popup." It provides
built-in methods (`show(), showModal()` ) to control visibility, automatic handling of certain attributes out of the
box, and even a backdrop that can be styled with CSS (for modal-dialogs).

### When to use it?

A "modal" and a "dialog" are not the same thing. Surprised? Same! Blew my mind when I learned about it.

The [A11y Collection](https://www.a11y-collective.com/blog/modal-vs-dialog/) has a nice in-depth review of the
differences, but here's the gist of it:

#### Modal-dialogs

Modal-dialogs block interaction with the rest of the page. A translucent full-screen background color will usually
appear behind the modal-dialog to emphasize this. This is why we should only use this dialog type for informing people
of critical information and/or confirming critical actions.

Here are a few examples of when to use a modal-dialog.

* Confirming destructive actions like before deleting data permanently.
* Collecting required payment details for checkout.
* For critical warnings and alerts.
* To acknowledge or agree to legal terms before proceeding.
* A login form to view content only accessible to those who are logged in.

:::tip
Use the `showModal()` function so that the dialog displays on the top layer along with a `::backdrop` pseudo-element.
:::

#### Non-modal-dialog

Non-modal-dialogs provide optional info or options without preventing interaction with the content behind it. Here are a
few examples of when to use a non-modal-dialog:

* Newsletter signups.
* Help text or tool tips.
* Optional settings and preferences.
* To advertise a product or sale.

:::tip
Use the `show()` function to allow interaction outside of the dialog. Does not apply the `::backdrop` pseudo-element.
:::

### Required attributes & keyboard behavior

| ARIA Attribute                                  | What it does                                                                                                                                                                                                   |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `aria-haspopup` on the button (dialog trigger). | Set to “dialog” on the button that triggers the dialog.                                                                                                                                                        |
| `aria-controls` on the button (dialog trigger). | Use it with the ID that is on your dialog. It’s how we “connect” our button to the dialog it triggers.                                                                                                         |
| `aria-labelledby` on the dialog element.        | If your dialog has a heading or title, use its ID for this ARIA attribute. This links the dialog to its visible title, which is then read aloud by assistive technologies when the dialog appears.             |
| `aria-describedby` on the dialog element.       | If your dialog has a description or content, use its ID for this ARIA attribute. This links the dialog to its descriptive content, which is then read aloud by assistive technologies when the dialog appears. |
| `autofocus` within the dialog's content.        | Should be added to the first interactive element.                                                                                                                                                              |

:::tip
The `aria-modal` attribute is automatically handled out of the box for modal-dialogs. This attribute informs
assistive technology that the content underneath the dialog is not interactive.
:::

:::tip
The `open` attribute is also handled out of the box, but for non-modal dialogs only.
:::

#### Keyboard expectations

Keyboard behavior differs between the two kinds of dialogs. Here is how each differ and where both dialogs should have
the same keyboard behavior:

* **Modal-dialog:** Maintains keyboard focus. None of the content behind the dialog is focusable unless the dialog is
  closed.
* **Modal-dialog:** When the dialog is opened, the `autofocus` attribute should be added to the element we expect people
  to interact with first.
* **Non-modal dialog:** Does not maintain keyboard focus. We can focus between the content behind it and the dialog.
* **Non-modal dialog:** Once the dialog loses focus, it should automatically close.
* **Non-modal dialog:** The Esc key should close the dialog. This might be appropriate for modal-dialogs too. Consult a
  UX expert.
* **Both:** When the dialog opens, focus moves into it.
* **Both:** When the dialog is closed, focus returns to the button that triggered the dialog.  
  If there isn't an element that serves as a trigger, then focus should return to the previously focused element from
  before the dialog was opened.

:::tip
Handling Esc key functionality is handled out of the box for non-modal dialogs.
:::

### Accessibility gotchas

* Don’t trap focus if using a non-modal dialog.
* Make sure the first interactive element is focusable. This is usually the close button or if there’s a form in the
  dialog, the first field in the form.
* Don’t disable scrolling unless it’s a modal-dialog.
* Don’t use `role="dialog"` on a `<dialog>` element. It’s redundant. Only use if for some reason you’re not using the
  dialog element.
* Do not use `tab-index` on the dialog element. The dialog itself is not an interactive element, and does not receive
  focus.
* Trying to place something that isn't already inside the `<dialog>` element on top using CSS `z-index` will not work.

### Further reading:

* [MDN: Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
* [WAI-ARIA: modal-dialog example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)
* [DEV Community: Dialogs vs Modals — Is there a difference?](https://dev.to/iam_timsmith/dialogs-vs-modals-is-there-a-difference-210k)
* [A11y Collective: When to use Modal vs Dialog components](https://www.a11y-collective.com/blog/modal-vs-dialog/)