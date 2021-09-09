#

```
--pretty                --pretty=medium
--pretty=<format>
--format=<format>
    oneline, short, medium, full, fuller, reference, email, raw,
    format:<string>, tformat:<string>

oneline
    <hash> <title line>
short
    commit <hash>
    Author: <author>
    
    <title line>
others: see git-log(1).

--format=reference      --pretty='format:%C(auto)%h (%s, %ad)'

escapes
    %n      newline
    %%      raw %
    %x00    hex byte
colors
    %Cred                   colors
    %Cgreen
    %Cblue
    %Creset
    %C(...)                 see git-config(1) "CONFIGURATION FILE" section
    %C(auto,...)            red, --color=auto
    %C(always,...)
?
    %m                      left < or right > or boundary - mark
line wrapping
    %w()                    switch line wrapping, see git-shortlog(1) -w option
    %w(<w>)
    %w(<w>,<i1>)
    %w(<w>,<i1>,<h2>)
formatting for next placeholder
    %<(<N>)                 take at least N columns, pad right
    %<(<N>,trunc)               if output >N columns, truncate end
    %<(<N>,ltrunc)                                             left
    %<(<N>,mtrunc)                                             middle
    %<|(<N>)                take at least until the Nth column, pad right
    %>(<N>)     %>|(<N>)    %<(<N>) but pad left, pad right
    %>>(<N>)    %>>|(<N>)   %>(<N>), %>|(<N>) but use spaces on left 
    %><(<N>)    %><|(<N>)   %<(<N>), %<|(<N>) but centered
hash
    %H          %h          commit hash, full or abbreviated
    %T          %t          tree hash
    %P          %p          parent hashes
author and committer
    %an   %cn   %aN   %cN   author or committer name, regular or respecting .mailmap
    %ae   %ce   %aE   %cE   author or committer email
    %al   %cl   %aL   %cL   author or committer local part
    %ad   %cd   %aD   %cD   author or committer date, --date= format or RFC822 style
    %ar   %cr               author or committer date, relative
    %at   %ct               author or committer date, Unix timestamp
    %ai   %ci               author or committer date, ISO-like format
    %aI   %cI               author or committer date, strict ISO format
    %as   %cs               author or committer date, YYYY-MM-DD
    %ah   %ch               author or committer date, human
ref names
    %d          %D          ref names, with or without " (...)" wrapper
    %S                      ref name specified on cmd line (git log only)
    %(describe[:options])
commit info
    %e                      encoding
    %s                      subject
    %f                      sanitized subject line for filenames
    %b          %B          body, cooked or raw
    %N                      commit notes
GPG
    %GG %G? %GS %GK %GF %GP %GT         GPG related
reflogs
    %gD         %gd         reflog sector, regular or shortened
    %gn   %gN               reflog identity name
    %ge   %gE               reflog identity email
    %gs                     reflog subject
?
    %(trailers[:options])
insertion
    %+...                   prepend LF iff non-empty string
    %-...                   delete all consecutive LFs leading, iff empty string
    % ...                   prepend space iff non-empty string
--tformat=<format>
    provides terminator instead of separator semantics



```
