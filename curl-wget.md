# curl/wget

Certain curl/wget use cases I get confused by.

## curl options

```
-D, --dump-header <filename>    Write response headers to <filename>
-D-                             Write response headers to stdout
-I, --head                      HEAD request: show document info only
-H, --header <header/@file>     additional HTTP request headers
-L, --location                  follow redirects
-X, --request <GET|POST|...>    change request method
-d, --data <string>             HTTP POST data
-o, --output <file>             write to <file> instead of stdout
-s, --silent                    silent mode
    --no-progress-meter         disable progress meter; not completely silent
```

## wget options

```
-S, --server-response           print HTTP response headers
    --method <method>
    --header '<name>: <value>'
    --post-data=<string>
    --post-file=<file>
-O, --output-document=<file>
-q, --quiet
    --no-show-progress
```
