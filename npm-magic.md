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

### npx

## npm run
