# XPath Cheat Sheet

XPath is a W3c standard query language for finding and selecting nodes
in an XML document.

In XPath, to specify the set of nodes you need, you supply what is
called a **location path**.

A location path consists of a sequence of **location steps**.  Each
location step consists of three components:

-   an axis,
-   a location step, and
-   zero or more predicates.

## Axis

An **axis** is a navigation step from the previous location step.
    
-   `ancestor`
-   `ancestor-or-self`
-   `attribute`
-   `child`
-   `descendant`
-   `descendant-or-self`
-   `following`
-   `following-sibling`
-   `namespace`
-   `parent`
-   `preceding`
-   `preceding-sibling`
-   `self`
    
Some axes have shorthand syntaxes.

## Node test

A **node test**, specifying the types and/or names of nodes to select.
    
-   an element name, e.g., `enquiry`
-   an element name prefixed by a namespace, e.g., `gs:enquiry`
-   all elements: `*`
-   all elements in the supplied namespace: `gs:*`
-   `comment()`
-   `text()`
-   `processing-instruction()`
-   `node()`

## Predicate

A predicate is an additional filter to limit the resultant set of
nodes.  Common predicates:

-   The node must have an attribute having a value, e.g.,
    `[@href='help.php']`

-   The node must be a certain position in the node set, e.g.,
    `[position()=3]` or `[3]`.

## Path Syntax

### Start of XPath

An XPath can be based at the document's outermost element, in which
case it starts with a slash.

An XPath can also be based at the current context element, in which
case it starts with a location step without a preceding slash.

The first location step navigates from one of the aforementioned
bases.

### Location Steps

Each XPath is a sequence of location steps separated by slashes.

In the full XPath syntax, each location step is formed thusly:

-   _axis_::_node-test_[_predicate_]...

Examples of the full XPath syntax:

-   attribute::abc
-   child::tbody

