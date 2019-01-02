# CDATA sections

## For a `<script>` element

````
<script>
    // <![CDATA[
    ...
    // ]]>
</script>
````

## For a `<style>` element

````
<style>
    /* <![CDATA[ */
    ...
    /* ]]> */
</style>
````

## `]]>` within a CDATA section

````
]]]]><![CDATA[>
````

That's:

-   `]]` - the first part of `]]>`
-   `]]>` - to end a CDATA section
-   `<![CDATA[` - to start a new CDATA section
-   `>` - the last part of `]]>`
