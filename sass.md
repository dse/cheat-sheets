# Sass

## `to` vs. `through`

    @for $i from 1 to 12 {
        // ...
    }
    // 12 is EXCLUDED
    
    @for $i from 1 through 12 {
        // ...
    }
    // 12 is INCLUDED

WHAT THE ACTUAL FUCK, Sass?  Why?
