# URLSearchParams

    new URLSearchParams()
    new URLSearchParams(<string>)   a query string with or without leading "?"
    new URLSearchParams(<sequence of [<name>, <value>]>)
    new URLSearchParams(<iterator of [<name>, <value>]>)
    new URLSearchParams(<object of <name>: <value>>)

    usp.append(<name>, <value>)
    usp.delete(<name>)              delete all parameters with the specified name
    usp.delete(<name>, <value>)     delete all parameters with the specified name and value
    usp.entries()                   returns an iterator of [key, value]
    usp.forEach(<callback(value, key, searchParams)>)
    usp.forEach(<callback(value, key, searchParams)>, <thisArg>)
    usp.get(<name>)                 returns the first value with the specified name
    usp.getAll(<name>)              returns an array of all values with the specified name
    usp.has(<name>)                 returns true iff there's a <name> parameter
    usp.has(<name>, <value>)        returns true iff there's a <name> param with the value
    usp.keys()                      returns an iterator of keys
    usp.set(<name>, <value>)        remove existing <name> parameters; append the one specified
    usp.sort()
    usp.toString()                  returns the query string without a leading "?"
    usp.values()                    returns an iterator of values

# URL

    new URL(<url>)
    new URL(<url>, <base>)          if the resultant URL is not valid, throws an error.

    url.hash                        returns "#fragment", "#", or "" if there's no fragment
    url.host                        returns "domain:port" or "host" if no port is specified
    url.hostname                    returns the domain name
    url.href                        returns a string containing the whole URL.  Assignable.
    url.origin                      Unicode serialization of the origin of the represented URL
    url.password
    url.pathname                    returns "/" followed by the path. no query string or frag.
    url.port
    url.protocol                    returns "http:", "https:", etc.
    url.search                      returns "?foo=bar"; "" on no or empty query string
    url.searchParams                an object for getting and manipulating the parameters.
    url.username
    
    URL.canParse(<url>)
    URL.canParse(<url>, <base>)         returns true if the parameters are parsable and valid.
    URL.createObjectURL(<fileObject>)   returns a new URL representing the supplied object.
    URL.createObjectURL(<blobObject>)
    URL.createObjectURL(<mediaSourceObject>)
    URL.revokeObjectURL(<objectURL>)    reclaim memory (browser reclaims it on unload)
    URL.parse(<url>)
    URL.parse(<url>, <base>)            returns a new URL object, or null if URL not valid.

    url.toString()                      returns a string containing the whole URL.
    url.toJSON()                        same as toString(), but for stringifying.
    
# Request

# Response

# Headers
