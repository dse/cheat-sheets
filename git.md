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
