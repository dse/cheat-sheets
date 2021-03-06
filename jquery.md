# jQuery Stuff

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

## `slideDown`, `slideUp`, and `slideToggle`

TBD

```
jQuery.fn.slideDown = function (speed, easing, callback) {
    return this.animate(genFx('show'), speed, easing, callback);
};
jQuery.fn.slideUp = function (speed, easing, callback) {
    return this.animate(genFx('hide'), speed, easing, callback);
};
jQuery.fn.slideToggle = function (speed, easing, callback) {
    return this.animate(genFx('toggle'), speed, easing, callback);
};
function genFx(type) {
    return {
        height: type,
        marginTop: type,
        marginBottom: type,
        paddingTop: type,
        paddingBottom: type
    };
};
jQuery.fn.animate = function(prop, speed, easing, callback) {
    var optall = {
        duration: speed ?? 400,
        easing: easing ?? undefined,
        queue: 'fx',
        old: false,
        complete: function () { jQuery.dequeue(this, 'fx'); }
    };
    var doAnimation = function() {
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );
        if (jQuery._data(this, "finish")) {
            anim.stop( true );
        }
    };
    doAnimation.finish = doAnimation;
    return this.queue(optall.queue, doAnimation);
};

jQuery.speed = (speed, easing) => {
    return {
        duration: speed ?? 400,
        easing: easing ?? undefined,
        queue: 'fx',
        old: false,
        complete: function () { jQuery.dequeue(this, 'fx'); }
    };
}
```
