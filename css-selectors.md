# CSS Selectors

## Attribute Selectors

    [<attr>]                has the specified attribute.
    [<attr>=<value>]        specified attribute has specified value.
    [<attr>~=<value>]       specified attribute has specified value as one of many space-separated values.
    [<attr>|=<value>]       specified attribute has specified value, or its value starts with <value> followed by a hyphen.
    [<attr>^=<value>]       specified attribute starts with specified value.
    [<attr>$=<value>]       specified attribute ends with specified value.
    [<attr>*=<value>]       specified attribute contains specified value as a substring.
    [<attr><op><value> i]   above is checked case-**in**sensitively
    
## Whatever

```
selector list           <selector>, ...
type selectors          <elementName>
                        <namespace>|<elementName>
class selectors         .<className>
id selectors            #<idName>
universal selectors     *
                        <namespace>|*
                        *|*
                        |*
attribute selectors     [<attr>]                        [aria-role]
                        [<attr>=<value>]                [tabindex="1"]
                        [<attr>~=<value>]               [class~="foo"]
                        [<attr>|=<value>]               [lang|="en"]
                        [<attr>^=<value>]
                        [<attr>$=<value>]
                        [<attr>*=<value>]
                        [<attr> <op> <value> i]
                        [<attr> <op> <value> s]
combinators             +
                        ~
                        >
                        <space>
pseudo-classes  forms   :checked
                        :default
                        :disabled, :enabled
                        :in-range, :out-of-range
                        :invalid, :valid
                        :optional, :required
                        :read-only, :read-write
                        :indeterminate
                        :placeholder-shown
                states  :active, :focus, :focus-within, :hover
                @page   :first, :left, :right
                other   :defined
                        :empty
                        :first-child, :first-of-type,
                            :last-child, :last-of-type,
                            :only-child, :only-of-type,
                            :nth-child(), :nth-of-type(),
                            :nth-last-child(), :nth-last-of-type()
                        :fullscreen
                        :lang(...)
                        :link, :visited
                        :not(...)
                        :root
                        :scope
                        :target
pseudo-elements         ::after, ::before
                        ::first-letter
                        ::first-line
                        ::placeholder
                        ::selection
```
