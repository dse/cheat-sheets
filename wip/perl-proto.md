# Perl Prototypes

    sub NAME(PROTO);
    sub NAME(PROTO) :ATTRS;
    sub NAME(PROTO) BLOCK
    sub NAME(PROTO) :ATTRS BLOCK
    sub NAME :prototype(PROTO)

Prototypes only affect new-style calls, i.e., those that don't use an
`&` prefix.

    \<char>     represents actual argument must start with <char>
    \$          accept any scalar lvalue expression
                    value in @_ will be a reference to the actual argument

    \[]         specify more than one allowed argument type
    
    @ or %      eats all remaining arguments; forces list context
    $           forces scalar context
    &           requires an anonymous subroutine
    *           accept bareword/constant/scalar/typeglob/typeglobref
    +           acts like \[@%] when given an array or hash variable
                otherwise forces scalar context
    ;           separates mandatory arguments from optional arguments
    _           scalar argument defaulting to $_
                    if last char of prototype or followed by ; or @ or %

Different Ways to Call Subroutines

    NAME(LIST);
    NAME LIST;
    &NAME(LIST);
    &NAME;

    @_ is a local array, each element is an alias to the argument.

    &NAME; calls inherit @_ from caller if:
        argument list is optional
        if argument list is omitted, no @_ is set up for the sub
