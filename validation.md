# Form Validation

This discusses browser built-in form validation.

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation

## Control Attributes

-   `required`
-   `minlength`
-   `maxlength`
-   `min`
-   `max`
-   `type`
-   `pattern`

## When elements are valid

-   they match the `:valid` pseudoclass.

## When elements are invalid

-   they match the `:invalid` pseudoclass.
-   they sometimes match other pseudoclasses like `:out-of-range`

## Validity States

https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

-   badInput
-   patternMismatch
-   rangeOverflow
-   rangeUnderflow
-   stepMismatch
-   tooLong
-   tooShort
-   typeMismatch
-   valueMissing
-   customError

## Available on the following DOM interaces

-   HTMLButtonElement
-   HTMLFieldSetElement
-   HTMLInputElement
-   HTMLOutputElement
-   HTMLSelectElement
-   HTMLTextAreaElement

## Element Properties

-   validationMessage, a localized message describing invalidation or the empty string
-   validity, a ValidityState object containing validation related priperties
    -   valid
    -   badInput, patternMismatch, etc.
-   willValidate, true if the element will be validated on form submission

## Element Methods

on aforelisted DOM interfaces and <form> elements:

-   `checkValidity()`

    -   checks if element's value has any validity problems
    -   fires an invalid event on the element if necessary
    -   returns true or false

-   `reportValidity()`

    -   report an invalid field using events.
    -   used with preventDefault in an onsubmit handler

-   `setCustomValidity(<message>)`

    -   adds a custom error msg to the element
    -   
