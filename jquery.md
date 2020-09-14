# jQuery Stuff

## `slideDown`, `slideUp`, and `slideToggle`

TBD

## `getScript`

Something that's not obviously translatable to vanilla JS is:

```
$.getScript(url, successCallback);
```

`success` is a callback, invoked thusly:

```
successCallback(script, textStatus, jqXHR);
```

Here we'll figure out what's eventually done in vanilla JS:

```
jQuery.getScript(url, successCallback);
jQuery.get(url, undefined, successCallback, 'script');
jQuery.ajax({
    url: url,
    type: 'get',
    dataType: 'script',
    data: undefined,
    success: successCallback
});
```

```
var xhr = new window.XMLHttpRequest();
xhr.open('GET', url, /* async */ true);
xhr.setRequestHeader('Accept', 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // not for cross-domain
xhr.onload = function () {
    if (!(xhr.status === 0 || xhr.status === 200)) {
        return;
    }
    var script = document.createElement('script');
    script.text = xhr.responseText;
    document.head.appendChild(script).parentNode.removeChild(script);
};
xhr.send(null);
```
