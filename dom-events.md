# Common DOM Events

## document.DOMContentLoaded

This event fires when the initial HTML document has been loaded and
parsed into a DOM tree.  The browser does not wait for stylesheets,
images, subframes, and other resources to finish loading before firing
this event.

<https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event>

## window.load

This event fires when the whole page has fully loaded, including all
dependent resources such as stylesheets and images.

<https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event>

## Execute on or after `window.load`

```
if (document.readyState === 'complete') {
    func();
} else {
    window.addEventListener('load', func);
}
```

## Execute on or after `document.DOMContentLoaded`

```
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    func();
} else {
    document.addEventListener('DOMContentLoaded', func);
}
```

## Other Relevant Events

### document.readystatechange

<https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event>

## jQuery's Ready Handler

jQuery's [`ready` handler](https://api.jquery.com/ready/) is
equivalent to `DOMContentLoaded`, with the following exception:

-   If the browser fires `DOMContentLoaded` before `.ready(handler)`
    is called, the `handler` function will still be executed.  (See
    "Execute on `document.DOMContentLoaded` or Immediately", above.)

-   Something involving Internet Explorer versions 10 and earlier.
    You probably don't care about those browsers.

jQuery's currently recommended syntaxes to register a `ready` event
handler are the following.  The former is preferred, as it will work
even if `jQuery.noConflict` has been used.

```
jQuery(function ($) {
    /* ... */
});

$(function () {
    /* ... */
});
```

The following syntaxes are deprecated:

```
$(document).ready(handler);
$('document').ready(handler);
$('img').ready(handler);
$().ready(handler);
$(document).on('ready', handler);       /* removed from jQuery 3.0 */
```

See also:

-   <https://api.jquery.com/jQuery/#jQuery-callback>
