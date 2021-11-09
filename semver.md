# Semantic Versioning

https://semver.org/

A version number looks like the following:

    <major>.<minor>.<patch>

A new `<major>` release hsa backwards-incompatible API changes.

A new `<minor>` release adds functionality in a backwards-compatible
manner.

A new `<patch>` release is for backwards-compatible bug fixes.

## Pre-release versions

    <major>.<minor>.<patch>-<x>
    <major>.<minor>.<patch>-<x>.<y>
    <major>.<minor>.<patch>-<x>.<y>.<z>
    ...

`<x>`, `<y>`, `<z>`, *etc.*, are identifiers, either numeric or
alphanumeric.  No leading zeroes when numeric.  `[0-9A-Za-z-]+`

Pre-releases have lower precedence than normal versions where
major, minor, and patch are equal.

## Build metadata

    <major>.<minor>.<patch>+<metadata>
    <major>.<minor>.<patch>-<x>.<y>...<z>+<metadata>

`[0-9A-Za-z-]+`

When determining precedence, ignore metadata entirely.

## Precedence

Major, minor, and patch levels are always compared numerically.

    1.9.3 < 1.2.10
    1.9.3 < 1.10.0
    1.9.3 < 2.0.0

When major, minor, and patch are equal, pre-release versions have
lower precedence normal versions.

    1.0.0-alpha < 1.0.0

For pre-release identifiers:
    
-   two only containing digits are compared numerically

        1.0.0-beta.2 < 1.0.0-beta.11

-   other identifiers are compared in ASCII sort order

        1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-rc.1

-   numeric has lower precedence than non-numeric

        1.0.0-alpha.1 < 1.0.0-alpha.beta

-   larger set of pre-release fields has higher precedence than
    smaller set when all smaller-set identifiers are equal
    
        1.0.0-alpha.beta < 1.0.0-alpha.beta.1.0.0

Example:

    1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta
          ________________________________________________|
         |
    1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0
