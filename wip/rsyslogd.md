# rsyslog.conf

```
# Global Directives
    $<propname>

# Templates

# Output Channels

# Rules (Selector + Action)

## Selectors
    <facility>.<priority>                       that's a selector
    <facility>,...,<facility>.<priority>        that's a selector
    <selector>;...;<selector>                   each can override the previous to exclude some priorities
    =<priority>                                 only this priority
    !<priority>                                 ignore this priority and higher
    !=<priority>                                ignore only this priority
        # facility: auth authpriv cron daemon kern lpr mail news syslog user uucp local0-local7 *=all none=(no priority)
        # priority: debug info notice warning err crit alert emerg *=all none=(no priority)
        # all message of specified priority AND HIGHER are logged accordantly

## Actions
    /<pathname>;<directive>;...
        # use $ActionFileEnableSync (globally or here) to sync
    -/<pathname>
        # disable syncing when $ActionFileEnableSync is default
    |/<pathname>        # named pipe
    /<tty pathname>     # special tty handling
    /dev/console        # "
```
