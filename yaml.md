# YAML Cheat Sheet

```
---                             # sequence
- Mark McGwire
- Sammy Sosa
- Ken Griffey

---                             # mapping (colon must be followed by space)
hr:  65
avg: 0.278
rbi: 147

---                             # mapping of sequences
american:
  - Boston Red Sox
  - Detroit Tigers
  - New York Yankees
national:
  - New York Mets
  - Chicago Cubs
  - Atlanta Braves

---                             # sequence of mappings
-
  name: Mark McGwire
  hr:   65
  avg:  0.278
-
  name: Sammy Sosa
  hr:   63
  avg:  0.288

---                             # inline syntax for sequences
- [name        , hr, avg  ]
- [Mark McGwire, 65, 0.278]
- [Sammy Sosa  , 63, 0.288]

---                             # inline syntax for mappings
Mark McGwire: { hr: 65, avg: 0.278 }
Sammy Sosa: { hr: 63, avg: 0.288 }

---                             # inline syntaxes spanning multiple lines
players: [
  Mark McGwire,
  Sammy Sosa
]
hr: {
  Mark McGwire: 65,
  Sammy Sosa: 63
}
```

## Document Start/End Markers

```
# Ranking of 1998 home runs             # comment
---                                     # start of document
- Mark McGwire
- Sammy Sosa
- Ken Griffey

# Team ranking                          # comment
---                                     # start of document
- Chicago Cubs
- St Louis Cardinals
...                                     # end of document without starting new one

```

## Repeated Nodes

```
---
hr:
  - Mark McGwire
  - &SS Sammy Sosa                      # node labeled SS.  `&SS` is an anchor.
rbi:
  - *SS                                 # Subsequent occurance.  `*SS` is an alias.
  - Ken Griffey
avg: &avg                               # an anchor for a sequence or mapping.
  - 0.278
  - 0.288
```

## Mapping Between Sequences

```
? # PLAY SCHEDULE
  - Detroit Tigers
  - Chicago Cubs
:
  - 2001-07-23

? [ New York Yankees,
    Atlanta Braves ]
: [ 2001-07-02, 2001-08-12,
    2001-08-14 ]
```

## Scalars

```
# ASCII Art                             # literal scalar
--- |
  \//||\/||
  // ||  ||__

---                                     # plain scalar, newlines treated as spaces
  Mark McGwire's
  year was crippled
  by a knee injury.

--- >                                   # folded scalar
 Sammy Sosa completed another
 fine season with great stats.

   63 Home Runs                         # newlines preserved for lines indented furhter
   0.288 Batting Average

 What a year!

unicode: "Sosa did fine.\u263A"         # quoted scalars
control: "\b1998\t1999\t2000\n"
hexesc:  "\x13\x10 is \r\n"

single: '"Howdy!" he cried.'
quoted: ' # not a ''comment''.'
tie-fighter: '|\-*-/|'

plain:                                  # multi-line flow scalars
  This unquoted scalar
  spans many lines.

quoted: "So does this
  quoted scalar.\n"
```

## Types, Implicit

```
canonical:           12345                              # integer
decimal:             +12,345
sexagecimal:         3:25:45
octal:               014
hexadecimal:         0xC

canonical:           1.23015e+3                         # floating-point
exponential:         12.3015e+02
sexagecimal:         20:30.15
fixed:               1,230.15
negative infinity:   (-inf)
not a number:        (NaN)

null:                ~                                  # miscellaneous
true:                y
false:               n
string:              '12345'

canonical:           2001-12-15T02:59:43.1Z             # timestamp
iso8601:             2001-12-14t21:59:43.10-05:00
spaced:              2001-12-14 21:59:43.10 -05:00
date:                2002-12-14
```

## Tags

```
not-a-date: !str 2002-04-28

picture: !binary |
 R0lGODlhDAAMAIQAAP//9/X
 17unp5WZmZgAAAOfn515eXv
 Pz7Y6OjuDg4J+fn5OTk6enp
 56enmleECcgggoBADs=

application specific tag: !!something |
 The semantics of the tag
 above may be different for
 different documents.

# Establish a tag prefix
--- !clarkevans.com,2002/graph/^shape
  # Use the prefix: shorthand for
  # !clarkevans.com,2002/graph/circle
- !^circle
  center: &ORIGIN {x: 73, y: 129}
  radius: 7
- !^line
  start: *ORIGIN
  finish: { x: 89, y: 102 }
- !^label
  start: *ORIGIN
  color: 0xFFEEBB
  value: Pretty vector drawing.

```

## Unordered Sets

```
--- !set                                        # unordered set
? Mark McGwire
? Sammy Sosa
? Ken Griff

--- !omap                                       # ordered mapping
- Mark McGwire: 65
- Sammy Sosa: 63
- Ken Griffy: 58
```

## Double-Quoted Escapes

```
\\  \'  \"  \a  \b  \e  \f  \n  \r  \t  \v
\^              literal caret
\0              null
\               \ followed by space => literal space
\N              unicode next line
\L              unicode line separator
\P              unicode paragraph separator
\xff            8-bit character
\u2014          16-bit character
\U0001f4a9      32-bit character
```
