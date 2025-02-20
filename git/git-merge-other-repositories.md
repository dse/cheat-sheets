# Merging From Another Repository

Let's suppose you want to take all the history from `old`
and put it into `current` in the form of a subdirectory within
`current`.

-   Install the `git-filter-repo` package, a tool that will make
    things a lot easier for you:

        sudo apt-get -y install git-filter-repo

-   Create a temporary clone that you won't push:

        git clone [-b <branch>] <old-URL> old-TEMP

    You specify a `<branch>` if the content you want to copy is in
    that branch and it's not `master` or `main` or something.

-   Create a fresh clone to integrate the old repository into:

        git clone <current-URL> current

-   Rewrite the project's entire history to put everything in a
    subdirectory:

        cd old-TEMP && git-filter-repo --path-rename :sub/directory/
        
    **The trailing slash is REQUIRED.  Commit ids will change.**

-   List any and all branches:

        git branch -av

    Move any and all branches out of the way by renaming them,
    in order to avoid conflicts:

        git checkout master && git branch -m old-master
        #OR#
        git checkout main && git branch -m old-main
        
        git checkout development && git branch -m old-development
        ...

-   Go into the new repository:

        cd ../current

-   Fetch the old repository into the current one:

        # Command format:
        git fetch ../old-TEMP <branch-name-in-old-repos>:<branch-name-in-new-repos>
        
        git fetch ../old-TEMP old-master:old-master
        #OR#
        git fetch ../old-TEMP old-main:old-main
        
        git fetch ../old-TEMP old-development:old-development
        ...

-   Merge:

        git checkout master && git merge --allow-unrelated-histories old-master
        #OR#
        git checkout main && git merge --allow-unrelated-histories old-main

        git checkout development && git merge --allow-unrelated-histories old-development

-   Finally:

        git push

    It _should_ now be safe to remove all traces of the old
    repository.
