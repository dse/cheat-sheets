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
