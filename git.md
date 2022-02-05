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

`<file>` must be relative to repository root **or** start with `./`
(or `../` or something).  I think.

# Which files contain conflicts?

    git diff --name-only --diff-filter=U            # I guess

# Manual Merge because You Can't Do It from A Pull Request (GitHub)

You can still create the pull request but you can't do the automatic
merge because, for example, there are merge conflicts.

The following steps are what GitHub (the webapp) does in case of a
merge conflict.

This is for a merge **from** a `<source-branch>` **into** a
`<dest-branch>`.

**This merges both ways.**  Don't do this if `<dest-branch>` has
commits not ready for `<source-branch>`.

Example:

> Let's say you want to merge something that's in `master` into
> `feature-branch-1`.  The following steps would **first** merge
> `feature-branch-1` into `master`, **which you do not want to do**,
> then merge `master` into `feature-branch-1`.


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

# Undoing a Merge

```
git checkout <target-branch>
git revert -m 1 <merge-commit-id>
```

## Re-doing the Merge, i.e., Undoing the Undo, i.e., Reverting the Revert

```
git checkout <target-branch>
git revert <revert-commit-id>
```

lol.

## Copying a repository to elsewhere

    git clone --mirror <old-remote> <dir>
    cd <dir>
    git push <new-remote> --all
    git push <new-remote> --tags
    
    git clone <new-remote>

## Bitbucket

    git@bitbucket.org:<owner>/<repos>.git

## AWS CodeCommit

    codecommit::us-east-1://<repos>
    codecommit::us-east-1://<profile>@<repos>

