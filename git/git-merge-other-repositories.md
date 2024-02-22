# Merging From Another Repository

Let's suppose you want to take all the history from `old`
and put it into `current` in the form of a subdirectory within
`current`.

-   `sudo apt-get -y install git-filter-repo`

    `git-filter-repo` is a tool that will make things a lot easier.

-   `git clone <old-URL> old-TEMP`

    A temporary clone you won't push.

-   `git clone <current-URL> current` but only if it's not already
    there.  You might want to use a fresh clone for this, anyway.

-   `cd old-TEMP`

-   `git-filter-repo --path-rename :PREDECESSORS/old/`

    **The trailing slash is REQUIRED.**

    This rewrite the repository's entire history as if all the files
    were in a subdirectory called `PREDECESSORS/old`.  Commit ids will
    change.

-   `git branch -m old-master`

    This is to avoid conflicts with the main/master branch in the
    merge target repository, `current`.

-   `git branch -av`

    If there're any other branches you care about, you'll probably
    need to rename those too.  This is to avoid conflicts with
    branches in the target repository.
    
    You **should not** have to run `git-filter-repo` again, as it
    **should** rewrite all branches in the repository.

-   `cd ../current`

-   `git fetch ../old-TEMP <branch-name-in-old-repos>:<branch-name-in-new-repos>`

-   `git checkout master && git merge --allow-unrelated-histories <branch-name-in-new-repos>`

-   `git push`

It _should_ now be safe to remove all traces of the old
repository.
