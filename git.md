# Git Config

-   `--local` (default)
    -   repository `.git/config`
-   `--global`
    -   `~/.gitconfig` or `$XDG_CONFIG_HOME/git/config`
-   `--system`
    -   `$(prefix)/etc/gitconfig`

## Set

-   default behavior is to replace at most one line.
-   `--replace-all` replaces all lines matching key and optional value_regex.
-   `--add` adds a new line without altering existing values

## Unset

-   `--unset` removes the first line matching the key
-   `--unset-all` removes all lines matching the key

# Merge Conflict Style

-   `git config --global --unset merge.conflictStyle` (default)

    ```
    <<<<<<<
        ours
    =======
        theirs
    >>>>>>>
    ```

-   `git config --global merge.conflictStyle diff3`

    ```
    <<<<<<<
        ours
    |||||||
        original
    =======
        theirs
    >>>>>>>
    ```

# Branch Surgery

    * A                   * B
    |                    /
    |                   /
    * origin/A   ==>   * A

    git checkout A
    git checkout -b B
    git branch -f A origin/A

# Cat a file in another branch

    git show <branch>:<file>

# Which files contain conflicts?

    git diff --name-only --diff-filter=U

# Manual Merge because You Can't Do It from A Pull Request (GitHub)

This is for a merge **from** a `<source-branch>` **into** a `<dest-branch>`.

```
git checkout <source-branch>
git pull
git merge --no-ff <dest-branch>
# you may need to resolve conflicts here then run `git commit`
git push
```

```
git checkout <dest-branch>
git pull
git merge --no-ff <source-branch>
# you may need to resolve conflicts here then run `git commit`
git push
```
