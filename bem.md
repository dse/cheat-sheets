# BEM --- Block Element Modifier

## What Is BEM?

-   **Block** — Outermost parent of a component.

-   **Element** — Children or descendents of a component.

-   **Modifier** — A variation on a block or element.

## Class Name Syntax

Class names are as follows:

```
<block-name>
<block-name>__<element-name>
<block-name>--<modifier-name>
<block-name>__<element-name>--<modifier-name>
```

Element classes and modifier classes are optional.

For multi-word block, element, and modifier names, use `multi-word`,
not `multiword`.

## Notes

Modifier classes are designed to **augment** the base classes, not
replace them.

## vs. Plain CSS Classes

BEM is quite verbose.  Consider solutions based on plain CSS class
names.

### Just Blocks and Elements

    <div class="photo-block">
        <div class="photo">
            ...
        </div>
        <div class="text">
            ...
        </div>
    </div>

    .photo-block {
    }
    .photo {
    }
    .text {
    }

The CSS rules for the `photo` and `text` classes apply to *anything*.
You are assuming that the `photo` and `text` classes are only ever to
be used as elements within the `photo-block`, and no vender code you
bring in will define rules on them.

    .photo-block {
    }
    .photo-block .photo {
    }
    .photo-block .text {
    }

`photo` and `text` classes can be used as elements in other blocks
without having `photo-block` related styles applied to them.

However, specificity on rules 2 and 3 increases.

    <div class="photo-block">
        <div class="photo-block-photo">
            ...
        </div>
        <div class="photo-block-text">
            ...
        </div>
    </div>

    .photo-block {
    }
    .photo-block-photo {
    }
    .photo-block-text {
    }

It's a little more to type on the HTML side but it's clearer that
`photo-block-photo` and `photo-block-text` are elements of the
`photo-block`.  At which point there is **no** reason to not use
BEM-style syntax for class names:

    <div class="photo-block">
        <div class="photo-block__photo">
            ...
        </div>
        <div class="photo-block__text">
            ...
        </div>
    </div>

    .photo-block {
    }
    .photo-block__photo {
    }
    .photo-block__text {
    }

### Modifiers on Blocks (and Elements)

    <div class="photo-block">
    </div>

    <div class="photo-block right-side">
    </div>

    .photo-block {
    }
    .right-side {
    }

You're assuming here that `right-side` will ever only be used as an
element in `photo-block` blocks, and no vendor code you bring in will
ever use that class on anything.  And that you won't define an element
called `right-side`.

    <div class="photo-block">
    </div>

    <div class="photo-block with-photo-on-right-side">
    </div>

    .photo-block {
    }
    .with-photo-on-right-side {
    }

Before I started learning about BEM, a CSS class name starting with a
pronoun is one way I've been indicating that the class name is used to
*modify* a block or element.  Which means you're not likely to use it
as the name of a block or element.  However, you're still assuming
that `with-photo-on-right-side` is only ever applied to `photo-block`s
and no vender code will add additional rules.

    .photo-block {
    }
    .photo-block.with-photo-on-right-side {
    }

Better, but the second rule still has an increase in specificity.
Which, IMO, is fine with modifiers, because you want those rules to
override rules on unmodified blocks and elements anyway.

And I'm not going to assume that all modifiers could easily be
described by starting with a pronoun.  I haven't thought this through.

    - in blue
    - with photo on right side

The W3C specification on class names is as follows:

> In CSS, identifiers (including element names, classes, and IDs in
> selectors) can contain only the characters [a-zA-Z0-9] and ISO 10646
> characters U+00A0 and higher, plus the hyphen (-) and the underscore
> (_); they cannot start with a digit, two hyphens, or a hyphen
> followed by a digit. Identifiers can also contain escaped characters
> and any ISO 10646 character as a numeric code (see next item). For
> instance, the identifier “B&W?” may be written as “B\&W\?” or “B\26
> W\3F”.

So `2point` is invalid.  And `--long` is invalid.  And `-3point` is
invalid.

However, `-modifier` is perfectly valid, if a little odd looking:

    <div class="photo-block">
    </div>

    <div class="photo-block -photo-right">
    </div>

    .photo-block {
    }
    .photo-block.-photo-right {
    }

Still, beginning a class name with `-` is an excellent way to indicate
a modifier.

### Modifiers on Elements

## More

-   BEM by Example — <https://seesparkbox.com/foundry/bem_by_example>

-   An alternative to BEM:
    <https://benfrain.com/when-and-where-you-can-use-numbers-in-id-and-class-names/>
