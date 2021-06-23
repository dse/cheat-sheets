# CSS Escapes

https://mathiasbynens.be/notes/css-escapes

```
identifiers
    contain [A-Za-z0-9_-], non-ASCII, and escape sequences
    must contain at least one character
    are used for element names, class names, and IDs in selectors

strings
    can be written in double quotes
                   or single quotes
    " must be escaped (to \" or something else) in double quotes
    ' must be escaped (to \' or something else) in single quotes

unicode escape sequences
    newline => '\a ' or '\0a ' or '\00a ' ... '\00000a'
    if you specify six hexdigits, no following space is needed
    but you can insert one.

for quoted strings, you ONLY need to escape quotes or newlines.

for class names and IDs, you need to use the strict syntax for
identifiers.

strict syntax for identifiers:
    if first char is numeric you must use the unicode escape
    1 => '\31 '

the following are special characters in CSS:
    ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ ` { | } ~
    that's all printable ASCII except spaces, digits, letters, and
    underscores.

the following can be prefixed with \ to escape them:
    that's anything that's not a hexdigit, LF, CR, or FF
    that includes all the symbols listed above

whitespace

the following must be escaped:
    \t => '\9 ' '\000009'
    \n => '\a ' '\00000a'
    \v => '\b ' '\00000b'
    \f => '\c ' '\00000c'
    \r => '\d ' '\00000d'

trailing whitespace after hex escapes

    if a U+0020 space follows a hex escape, it is consumed.
        'foo (c) bar' => 'foo \a9  bar'

    space can ONLY be omitted if next char is neither a space
    nor a hexdigit

JavaScript

    document.getElementById() and
    document.getElementsByClassName()
        can use unescaped ids and class names

    document.querySelector() and
    document.querySelectorAll()
        need escapes in the selectors just like CSS does

NOTES:

    getting mixed messages about whether '\xxxxxx' REQUIRES a space
    to follow if the next character is a space or hexdigit.  The
    majority of messages point to it NOT being required in this
    case.
```
