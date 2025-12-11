### Accessibility gotchas

*   If your button does not contain text (an icon only button), then provide alternative text for screen readers to read out loud.
*   Prevent screen readers from trying to read out SVG icons with `aria-hidden=”true”`. I’ve given examples in the demo area earlier in this page.

:::tip
If styling is what makes you hesitate to use a button rather than a link, you can style buttons to look like links. I like to create a Sass mixin or a class to “reset” buttons, and then add my styles after. Here’s an example:
:::

```sass
@mixin remove-btn-defaults() {
  padding: 0; // can remove or set as a parameter
  background: none;
  border: none;
  border-radius: 0;
}
```

:::tip
If you're looking for CSS for text you only want visible to screen readers, here is a Sass mixin example:
:::

```sass
@mixin screen-reader-only {
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}
```