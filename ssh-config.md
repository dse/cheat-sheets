# ssh-config.md

ssh checks the following, in order:

1.  command-line options
2.  `~/.ssh/config`
3.  `/etc/ssh/ssh_config`

First value obtained for each parameter is used.

Put host-specific declarations near the beginning.  Put general
defaults in a `Host *` section at the end.

Any parameters specified before a `Host` or `Match` section always
apply.

## Host sections

`Host <pattern> [<pattern> ...]`

Section applies when any of the patterns is matched.  Patterns may use
`*` or `?` wildcards.

1.  `Host *` --- Matches all hosts.

2.  `Host example.com *.example.com` --- Matches anything in the domain
    `example.com`.

3.  `Host zippy zippy.example.com` --- Matches the host zippy either via
    its FQDN or its short hostname.

4.  `Host example.com *.example.com !zippy.example.com !test.example.com`

    Same as example #2, except if **any** negated pattern is matched,
    the entire section is ignored, even if any of the non-negated
    patterns match.

## Match sections

`Match <criteria> [<criteria> ...]`

Section applies when all of one or more criteria are matched.

Criteria are as follows:

-   `Match canonical`

    Matches only when the configuration file is being re-parsed after
    hostname canonicalization (`CanonicalizeHostname`).

-   `Match !canonical`

    Matches when the configuration file is **not** being re-parsed
    after hostname canonicalization.

-   `Match all`

    Always matches.  `all` must appear alone or immediately after
    `canonical`.

-   `Match exec "command arg1 arg2 ..."`

    Matches only when the specified command returns a zero exit status.

    The following tokens are accepted:

    ```
    %%  a literal %
    %h  the remote hostname
    %i  the local userid
    %L  the local hostname
    %l  the local hostname including domain name
    %n  the original remote hostname as specified on the command line
    %p  the remote port
    %r  the remote username
    %u  the local username
    ```

-   `Match !exec "command arg1 arg2 ..."`

    Matches only when the specified command returns a **non**-zero
    exit status.

The following criteria accept one argument or a comma-separated list
of multiple arguments, and can use patterns.

-   `Match [!]host *.example.com`

    matched against the target hostname after any substitution via
    `Hostname` or `CanonicalizeHostname`.

-   `Match [!]originalhost zippy,zippy.example.com`

    matched against the target hostname as specified on the command
    line.

-   `Match [!]user dse`

    matched against the target username on the remote host

-   `Match [!]localuser dse`

    matched against the name of the local user running `ssh`
