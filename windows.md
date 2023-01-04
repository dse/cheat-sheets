# Windows Cheats

## Which Process Has That File Open?

-   `Win+R`
-   `resmon.exe`
-   "CPU" tab
-   "Associated Handles"
-   Search box on its right

## Filenames

A filename in Windows cannot contain the following characters:

    \   /   :   *   ?   "   <   >   |

Notice none of those characters are

    &   #   ;   $

Proposed encoding scheme:

https://www.w3.org/2003/entities/2007doc/bycodes.html

    \   $5c$    $bsol$      %5c
    /   $2f$    $sol$       %2f
    :   $3a$    $colon$     %3a
    *   $2a$    $ast$       %2a
    ?   $3F$    $quest$     %3f
    "   $22$    $quot$      %22
    <   $3C$    $lt$        %3c
    >   $3E$    $gt$        %3e
    |   $7C$    $verbar$    %7c
    $   $24$    $dollar$    %24
    %   $25$    $percnt$    %25
