# Pipelines

```
<command1>
<command1> | <command2>             send stdout to command2's stdin
<command1> |& <command2>            send stdout and stderr to command2
                                    |&  =>  2>&1 |
! <pipeline>
time [-p] <pipeline>
time [-p] ! <pipeline>
```

# Redirection

```
<       read                            fd 0 = stdin
>       write, overwriting              fd 1 = stdout
>>      append                          fd 2 = stderr

Redirecting both stdout and stderr
    &> filename     redirect stdout and stderr (preferred)
    >& filename     redirect stdout and stderr
                        equiv. to >filename 2>&1
    &>> filename    append stdout and stderr
                        equiv. to >>filename 2>&1

Here Documents
    <<END           read input from a source document until delimiter is seen
    ...
    END
    
    <<-END          strip all leading tab characters from the document and the end delimiter
    <<"END"         no expansion
    
    3<<END          read fd 3 from heredoc

Here Strings
    <<<string       input is the string with a newline appended

Duplicating File Descriptors
    <&4             read from file descriptor 4
    >&5             write to file descriptor 5
    6<&4            dup fd 4 as fd 6
    7>&5            dup fd 5 as fd 7
    <&-             close stdin
    >&-             close stdout
    6<&-            close fd 6
    7>&-            close fd 7
    
Moving File Descriptors
    <&4-            duplicate fd 4 as stdin then close fd 4
    >&5-            dupilcate fd 5 as stdout then close fd 5
    6<&4-            duplicate fd 4 as fd 6 then close fd 4
    7>&5-            dupilcate fd 5 as fd 7 then close fd 5
    
Opening File Descriptors for Reading and Writing
    <>filename      open filename for both reading and writing on fd 0
    8<>filename     open filename for both reading and writing on fd 8

File Descriptor Variables
    {varname}<...   allocate an fd and set varname to its value
    {varname}>...
    {varname}<&-    close the specified fd
    {varname}>&-

Evaluation Order
    ls >dirlist 2>&1                redirect stdout to dirlist; then dup stdout to stderr
                                        stdout and stderr now both write to dirlist
    ls 2>&1 >dirlist                dup stdout to stderr; then redirect stdout to dirlist
                                        stdout writes to dirlist; stderr writes to stdout

Bash handles special filenames for redirections:
    /dev/fd/<fdnum>
    /dev/stdin
    /dev/stdout
    /dev/stderr
    /dev/tcp/<host>/<port>
    /dev/udp/<host>/<port>
```
