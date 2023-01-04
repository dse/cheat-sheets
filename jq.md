# jq

https://stedolan.github.io/jq/manual/

## filters

    .               identity
    .foo            value at key or null
    .foo.bar
    .foo|.bar       equiv. to above
        .foo?           no error if . is neither an array nor an object
    .[<string>]     returns value at key or null
    .[2]            returns integer-indexed array item
    .[10:15]        returns array SLICE
    .[]             returns each array item, separately
        .[]?            no error
    <filter>,<filter>   return all outputs from left filter then all inputs from right filter

    <filter>|<filter>   pipe: feed output of left filter to input of right filter
    
    parentheses
        1                           (. + 2) * 5             15

    array construction
        {user:A,projects:[B,C]}     [.user,.projects[]]     [A, B, C]
        [ .[] | . * 2 ]             [1, 2, 3]               [2, 4, 6]
        
    object construction
        {user:A,titles:[B,C]}       {user,title:.titles[]}  {user:A,title:B}
                                                            {user:A,title:C}
                                    {(.user):.titles}       {A:[B,C]}
    recursive descent
        ..|.a?                      [[{a:1}]]               1
        produces every value
    
