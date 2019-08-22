# Git Revisions

[gitrevisions(7)](https://git-scm.com/docs/gitrevisions)

Some Git commands allow you to specify revision parameters that denote
commits.

Other Git commands can also take revision parameters that denote
objects other than commits.

## Specifying Revisions

To specify a commit object:

    <sha1>
    e.g., dae86e1950b1277e545cee180551750029cfe735
          dae86e

Output from `git describe`.  Either the name of a tag, or the name of
a tag followed by the number of additional commits and the abbreviated
object name of the most recent commit:

    <describeOutput>
    i.e., <closestTag>
          <closestTag>-<numberOfCommits>-g<objectName>
    e.g., v1.7.4.2-679-g3bee7fb

To specify a symbolic reference name:

    <refname>
    e.g., master
          heads/master
          refs/heads/master

    See gitrevisions(7) for disambiguation.

A shortcut for `HEAD`:

    @ => HEAD

To specify a reference at a prior point in time:

    <refname>@{<date>}
    e.g., master@{yesterday}
          HEAD@{5 minutes ago}

To specify the `<n>`th prior revision of a reference:

    <refname>@{<n>}
    e.g., master@{1}

To get to a reflog entry on the current branch:

    @{<n>}
    e.g., @{1}

To get to the `<n>`th branch/commit checked out before the current
one:

    @{-<n>}
    e.g., @{-1}

To refer to the branch that `<branchname>` builds on top of:

    <branchname>@{upstream}
    e.g., master@{upstream}

To refer to the branch that the current branch builds on top of:

    @{u}

To refer to where "we would push to" if `git push` were run while
`<branchname>` was checkout:

    <branchname>@{push}
    e.g., master@{push}
          @{push}

To refer to the first parent of the commit object `<rev>`:

    <rev>^
    e.g., HEAD^

To refer to the `<n>`th parent of the commit object `<rev>`:

    <rev>^<n>
    e.g., HEAD^3
          v1.5.1^2

To refer to a commit object a tag is referring to, instead of the tag:

    <tag>^0
    e.g., v1.5.1^0

To refer to the commit object that is the `<n>`th generation ancesor
of the commit object `<rev>`, following only the first parents.

    <rev>~<n>
    e.g., master~3    equivalent to master^^^ or master^1^1^1

To dereference an object at `<rev>` until an object of a particular
type is found (or the object cannot be referenced anymore):

    <rev>^{<type>}
    e.g., v0.99.8^{commit}

          <rev>^{commit}    equivalent to <rev>^{0}
          <rev>^{tree}
          <rev>^{tag}

          <rev>^{object}    make sure an object exists
                            without requiring it to be a tag
                            or derefencing it

To dereference a tag until a non-tag object is found:

    <rev>^{}
    e.g., v0.99.8^{}

Return the most recently matching commit from `<rev>` whose
commit message matches a regex:

    <rev>^{/<text>}
    e.g., HEAD^{/fix nasty bug}

Return the most recently matching commit from any ref including
`HEAD`:

    :/<text>
    e.g., :/fix nasty bug

To name a blob or tree at the given `<path>` in the tree object
named by `<rev>`:

    <rev>:<path>
    e.g., HEAD:README
          :README
          master:./README

To refer to a blob object in the index at the given `<path>` at stage
`<n>`:

    :<n>:<path>
    e.g., :0:README
          :README

    stage 0
    stage 1 during a merge, the common ancestor
    stage 2                 the target branch's version
    stage 3                 the version from branch being merged

## Specifying Ranges

TBD

## Examples

Here is an illustration, by Jon Loeliger. Both commit nodes B and C are
parents of commit node A. Parent commits are ordered left-to-right.

    G   H   I   J
     \ /     \ /
      D   E   F
       \  |  / \
        \ | /   |
         \|/    |
          B     C
           \   /
            \ /
             A

    A =      = A^0
    B = A^   = A^1     = A~1
    C = A^2  = A^2
    D = A^^  = A^1^1   = A~2
    E = B^2  = A^^2
    F = B^3  = A^^3
    G = A^^^ = A^1^1^1 = A~3
    H = D^2  = B^^2    = A^^^2  = A~2^2
    I = F^   = B^3^    = A^^3^
    J = F^2  = B^3^2   = A^^3^2

Here are a handful of examples using the Loeliger illustration above,
with each step in the notation's expansion and selection carefully
spelt out:

    Args   Expanded arguments    Selected commits
    D                            G H D
    D F                          G H I J D F
    ^G D                         H D
    ^D B                         E I J F B
    ^D B C                       E I J F B C
    C                            I J F C
    B..C   = ^B C                C
    B...C  = B ^F C              G H D E B C
    B^-    = B^..B
           = ^B^1 B              E I J F B
    C^@    = C^1
           = F                   I J F
    B^@    = B^1 B^2 B^3
           = D E F               D G H E F I J
    C^!    = C ^C^@
           = C ^C^1
           = C ^F                C
    B^!    = B ^B^@
           = B ^B^1 ^B^2 ^B^3
           = B ^D ^E ^F          B
    F^! D  = F ^I ^J D           G H D F
