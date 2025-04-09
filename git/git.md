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

## Mirroring a Repository

-   best instrns

        git clone --mirror <old-remote> <temp-dir>
        cd <temp-dir>
        git remote add new <new-remote>
        git push --mirror new

-   don't remember whence, probably atlassian instructions

        git clone --mirror <old-remote> <dir>
        cd <dir>
        git push <new-remote> --all
        git push <new-remote> --tags

        git clone <new-remote>
    
-   https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository

        git clone --bare <old-remote>
        # --mirror does more.
        cd <dir>.git
        git checkout master
        git push --mirror <new-remote>
        
-   https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-in-another-location

        git clone --mirror <old-remote>
        cd <dir>
        git remote set-url --push origin <new-remote>
        git fetch -p origin
        git push --mirror

-   https://medium.com/cloud-native-the-gathering/how-to-mirror-copy-an-entire-existing-git-repository-into-a-new-one-3bb8faefad9e

    Good instructions if you already have a clone of the repos, maybe.
    
        cd <dir>
        git checkout master
        git push --mirror <new-remote>

## Bitbucket

    git@bitbucket.org:<owner>/<repos>.git

## AWS CodeCommit

    codecommit::us-east-1://<repos>
    codecommit::us-east-1://<profile>@<repos>

## Cool Things in Git

https://www.youtube.com/watch?v=aolI_Rz0ZqY

### Old Shit

    git blame
    
    git blame -L 15,26:<pathname>           blame a "little" portion of the file
    git log -L 15,26:<pathname>
    git log -L :<function>:<pathname>
    git log -L :<class>:<pathname>
        ...
    
    git blame -w            ignores whitespace
        -w -C               detect lines moved/copied
        -w -C -C                or commit that created file
        -w -C -C -C             or any commit

    git log -S              the pickaxe
        -S <regexp> -p      any change with that regexp in it
    
    git reflog              a log of references
    
    git diff --word-diff
    
    git config --global rerere.enabled true     no reason not to do this
            REuse REcorded REsolution --- stores how conflicts get resolved
            for when you have the same merge conflicts often
    
### New Shit

    git branch --column
        git config --global column.ui auto
    
    git config --global branch.sort -committerdate
        (list branches in order of which ones have last commit first)
        
    git column --mode=column --padding=5
        (for anything)
        
    git push --force-with-lease
        a safer `git push --force`
    
        does a git fetch
        checks if reference stays the same
        then pushes
    
    signing commits with ssh (which has a signing feature now)
    (so you can use instead of gpg)
    
    git push --signed
        you can sign your pushes (kernel.org supports it)
        
    git maintenance start
        # adds a cron job to do hourly maintenance tasks
        # makes your shit faster
    
### bigrepo/monorepo stuff

    windows added a bunch of stuff
    -   vfs for git
    -   scalar
    -   git
    prefetching
    commit-graph
    -   for large repositories, makes git log --graph faster
        -   git config --global fetch.writeCommitGraph true
    -   filesystem monitor
        -   git config core.fsmonitor true
            -   watch for inode events
        -   git config core.untrackedcache true
            -   makes git status operations fast
    -   partial cloning
        -   git clone --filter=blob:none
            -   git will get as needed
        -   git clone --filter=tree:0
            -   not useful except for ci stuff
        -   blame becomes much slower
    -   multipack indexes, reachability bitmaps, geometric repacking
    -   github.blog/2021-04-09
    
    sparse-checkout
    -   give me only these three directories

### new shit github

    -   allowed merge types
        -   you can decide to allow/disallow squash merging, base merging, merge commits
    -   auto merge
        -   merge if passes CI
    -   merge queue
    -   linear history
    -   require signed commits
    
    
