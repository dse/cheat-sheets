# CSS Concepts

## Specificity

## Inheritance

## The Cascade

## Classes and Ids

https://www.w3.org/TR/CSS2/

Unescaped, you can use the following when referencing a CSS class in a
stylesheet:

    # case insensitive

    {ident}

        expands to
    
    -?{nmstart}{nmchar}*
    
        expands to
    
    -?
    ([_a-z]|{nonascii}|{escape})
    ([_a-z0-9-]|{nonascii}|{escape})*

        expands to
    
    -?
    ([_a-z]|[\240-\377]|{escape})
    ([_a-z0-9-]|[\240-\377]|{escape})*

        expands to
    
    -?
    ([_a-z\240-\377]|{escape})
    ([_a-z0-9-\240-\377]|{escape})*
    
And you can use the following when referencing an ID in a stylesheet:

    #{name}
    
        expands to
        
    #{nmchar}+
        
        expands to
    
    #
    ([_a-z0-9-]|{nonascii}|{escape})+
        
        expands to
    
    #
    ([_a-z0-9-]|[\240-\377]|{escape})+
        
        expands to
    
    #
    ([_a-z0-9-\240-\377]|{escape})+

An escape:

    {escape}

    {unicode}|\\[^\r\n\f0-9a-f]
    
    (
        {unicode}
        |
        \\[^\r\n\f0-9a-f]
    )

    (
        \\{h}{1,6}(\r\n|[ \t\r\n\f])?
        |
        \\[^\r\n\f0-9a-f]
    )

### Valid CSS Class Examples

You can also use an escape in any place to specify any character.  You
can also enter anything with a high bit directly.

If it starts with a "-" it can only then be followed by letter or low
line.

    _a-ny_th1ng
    a-ny_th1ng
    -_a-ny_th1ng
    -a-ny_th1ng

### Invalid CSS Class Examples

    #a-ny_th1ng
    9a-ny_th1ng
    -#a-ny_th1ng
    -9a-ny_th1ng
    --a-ny_th1ng
