# npm's syntactically sugary magic commands

## npm init

Installs `create-<package-spec>`, then executes its main executable.

This typically executes initialization operations related to the
specified package.  This includes but is not limited to creating or
changing `package.json`.

`npm init <initializer>` => `create-<initializer>`

-   `npm init <package-spec>`

    `npm exec <package-spec>`

-   `npm init <@scope>/<package-spec>`

    `npm exec <@scope>/create-<package-spec>`

-   `npm init <@scope>`

    `npm exec <@scope>/create`

### Legacy Behavior

If no `<initializer>` is specified, creates or edits `package.json` in
the current working directory.

### To Forward Additional Options

-   `npm init foo ... -- --hello -a`

    `npm exec ... create-foo --hello -a`

## npm exec

Executes the specified command in an execution environment where the
specified packages are installed.

-   `npm exec -- <pkg>[@<version>] [<args> ...]`

    Executes a command determined heuristically from the specified
    package.

-   `npm exec --package=<pkg>[@<version>] -- <cmd> [<args> ...]`

-   `npm exec -c '<cmd> [<args> ...]'`

-   `npm exec --package=<pkg> -c '<cmd> [<args> ...]'`

Executes an interactive shell if no command is specified via
positional arguments of `-c/--call`.

Packages are specified via `--package` or using the first syntax
listed above.  Multiple `--package` options can be specified.

The first syntax above does not specify the `<cmd>` name; the
following heuristic is used:

-   If the package has one `bin` or all entries point to the same
    command, that command.

-   Otherwise, if there's a `bin` entry matching the unscoped portion
    of the package name, that command.

-   Otherwise, exits indicating failure.

### npx

`npx` is mostly the same as `npm exec` but handling of options/flags
and positional arguments is a bit different.

## npm run
