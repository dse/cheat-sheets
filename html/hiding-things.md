# Hiding Things in HTML

| Method                          | Screen Readers? | Affects Layout? | Box Model Visible? | Click/Focusable? |
|:--------------------------------|:----------------|:----------------|:-------------------|:-----------------|
| `display: none`                 | no              | no              | no                 | no               |
| `visibility: hidden`            | no              | yes             | yes                | no               |
| `opacity: 0`                    | yes             | yes             | yes                | yes              |
| `absolute` and far away         | yes             | no              | yes                | yes              |
| [visually hidden][vh]           | yes             | no              | no                 | yes              |
| `clip-path`                     | 

Also: does `pointer-events: none` exclude things from tabbing?

[Source][src]

## Footnotes

[vh]: https://css-tricks.com/comparing-various-ways-to-hide-things-in-css/#aa-method-5-the-visually-hidden-class
[src]: https://css-tricks.com/comparing-various-ways-to-hide-things-in-css/
