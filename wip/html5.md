# HTML5

## Block Vertical Margins

The following elements have vertical margins of roughly 1rem by default:

| Element      | Blink, WebKit | Gecko | IE6–9 | IE11? |
|:-------------|:--------------|:------|:------|:------|
| `blockquote` | *             | *     | *     |       |
| `dir`        | *             | *     |       |       |
| `dl`         | *             | *     | *     |       |
| `figure`     | *             | *     |       |       |
| `h1`         | *             | *     | *     |       |
| `h2`         | *             | *     | *     |       |
| `h3`         | *             | *     | *     |       |
| `h4`         | *             | *     | *     |       |
| `h5`         | *             | *     | *     |       |
| `h6`         | *             | *     | *     |       |
| `hr`         | ½             | ½     | ½     |       |
| `listing`    | *             | *     |       |       |
| `menu`       | *             | *     | *     |       |
| `multicol`   |               | *     |       |       |
| `ol`         | *             | *     | *     |       |
| `p`          | *             | *     | *     |       |
| `plaintext`  | *             | *     |       |       |
| `pre`        | *             | *     | *     |       |
| `ul`         | *             | *     | *     |       |
| `xmp`        | *             | *     |       |       |

Blink, WebKit:

-   Nested `ol` and `ul` elements have zero vertical margin.

Gecko:

-   Nested `dir`, `dl`, `menu`, `ol`, and `ul` elements have zero vertical margin.

## Browser Defaults

-   [Blink](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css) — Google Chrome, Chromium
-   [WebKit](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css) — Safari
-   [Gecko](https://searchfox.org/mozilla-central/source/layout/style/res) — Firefox
-   [Trident](http://web.archive.org/web/20170122223926/http://www.iecss.com/) — IE6–9
-   W3C Normative examples:
    -   [HTML4](https://www.w3.org/TR/CSS2/sample.html)
    -   [HTML5](https://www.w3.org/TR/html5/rendering.html)

[Browser-Default-Styles on GitHub](https://github.com/UncaughtTypeError/Browser-Default-Styles)

## <blockquote> and <cite>

http://html5doctor.com/blockquote-q-cite/

```
<blockquote cite="{{ url }}">
    <p>{{ text }}</p>
</blockquote>

<p>
    <cite>{{ author }}</cite>
</p>

<figure>
    <blockquote>
        <p>{{ text }}</p>
    </blockquote>
    <figcaption>
        ... <cite>...</cite>
    </figcaption>
</figure>

<blockquote>
    <p>{{ text }}</p>
    <p>&mdash; <cite>{{ author }}</cite></p>
</blockquote>

<blockquote>
    {{ text }}<br>
    <cite>{{ author }}</cite>
</blockquote>
```
