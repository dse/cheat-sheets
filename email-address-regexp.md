# The Email Address Regular Expression

https://github.com/dse/cheat-sheets/blob/master/email-address-regexp.md

The following regular expression, [from the WHATWG HTML
specification][standard], is used by all modern web browsers to
determine whether what you've typed in is a valid email address.

```
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
```

It is compatible with JavaScript and Perl.

## Just Copy and Paste It As-Is.

There is no reason to use another regular expression.  Especially not
[that four-thousand-character one from hell][longregex].

This regular expression might accept some email addresses that you or
someone you care about think are invalid.  They are, in fact, valid.
This regular expression has been vetted thoroughly and agreed on by
software engineering teams from every browser vendor.

## "Someone might type in `username@gmail` and forget the `.com`."

It's still valid.

`gmail` is a top-level domain.  So are `apple`, `hotmail`, `aol`,
`yahoo`, and surely plenty of others.

An email address with **only** the top-level domain is still valid.

Additionally, accounts on `@gmail` could conceivably be different from
ones on `@gmail.com`.

People are going to type in their email addresses incorrectly in a web
form, no matter what validation you use.  You do not need to implement
an overly complex solution just to catch a few rare edge cases.

## Use In HTML

You do not even need to write JavaScript code to use it:

```
<input type="email" name="emailAddress">
```

## Other Formats

In the form of escaped strings in various programming languages:

```
C       "/^[a-zA-Z0-9.!#\$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\$/"
JAVA    "/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
JS"     "/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
JS'     '/^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/'
JSON    "\/^[a-zA-Z0-9.!#$%&'*+\\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\/"
PERL"   '/^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/'
PERL'   "/^[a-zA-Z0-9.!#\$%&'*+\\/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\$/"
PHP"    "/^[a-zA-Z0-9.!#\$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\$/"
PHP'    '/^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/'
PYTHON" "/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
PYTHON' '/^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/'

## Footnotes

[standard]: https://html.spec.whatwg.org/#email-state-(type=email)
[longregex]: http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html
