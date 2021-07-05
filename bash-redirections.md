# Redirections

Filehandles can be:
-   duplicated
-   opened
-   closed
-   referred to different files
-   change files the command reads from
-   change files the command writes to

```
<file   0<file  stdin
>file   1>file  stdout
        2>file  stderr

fdnumber<file
fdnumber>file

{varname}<...   allocate fd >= 10, assign to varname
{varname}>...
{varname}<&-    close previously assigned fd
{varname}>&-
```

# Order of Redirections

```
ls >dirlist 2>&1        redirects both stdout and stderr to the file dirlist
ls 2>&1 >dirlist        directs only stdout to the file dirlist
                        stderr is duplicated from stdout before stdout is redirected
```

# Coprocesses
