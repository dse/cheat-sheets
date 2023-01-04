Rather have a damn query language, Mongo decided on convoluted JSON objects.

Actually, two or three different kinds of JSON objects, depending on
what you're using them for.

# AGGREGATION PIPELINES

    db.xxx.aggregate([
        <AGGREGATION STAGE>,
        ...
    ]);

# QUERY FILTER DOCUMENTS

    db.find(
        QUERY,
        OPTIONS
    )
    
# QUERY

    { <field>: <value>, ... }
    
    { status: 'D' }
    
    { <field>: { <operator>: <value> } }
    { <field>: { $eq: <value> } }
    
# QUERY OPERATORS

    $eq
    $gt
    $gte
    $in
    $lt
    $lte
    $ne
    $nin

    $and
    $not
    $nor
    $or
    
    $exists
    $type
    
    $expr
    $jsonSchema
    $mod
    $regex
    $text
    $where
    
    $geoIntersects
    $geoWithin
    $near
    $nearSphere
    
    $all
    $elemMatch
    $size
    
    $bitsAllClear
    $bitsAllSet
    $bitsAnyClear
    $bitsAnySet

# AGGREGATION STAGES

    { $addFields: { <field name>: <aggregation expression>, ... } }
    
    $bucket
    $bucketAuto
    $collStats
    $count
    $facet
    $geoNear
    $graphLookup
    $group
    $indexStats
    $limit
    $listSessions
    $lookup
    $match
    $merge
    $out
    $planCacheStats
    $project
    $redact
    $replaceRoot
    $replaceWith
    $sample
    $search
    $set
    $setWindowFields
    $skip
    $sort
    $sortByCount
    $unionWith
    $unset
    $unwind
    
    { $addFields: { <new field>: <expression>, ... } }

    { $unwind: <field path> }
    { $unwind: { path: <field path>,
                 includeArrayIndex: <string>,
                 preserveNullAndEmptyArrays: <boolean> } }
                 
    <new field> is a field path without the '$' prefix.

# EXPRESSIONS

    Expressions can be:
    -   field paths
    -   literals
    -   system variables
    -   expression objects
    -   expression operators

# FIELD PATHS

    Examples:

        '$sizes'
        '$items.tags'

# LITERALS

    Examples:

        null
        'three dollars and fifty cents'
        { $literal: true }
        { $literal: 3.59 }
        { $literal: '$3.59' }

    You can specify a literal of any type.  BUT...
    -   A string starting with a '$' is a FIELD PATH.
    -   Numeric and boolean literals become PROJECTION FLAGS.
    
    Specify a { $literal: <value> } expression to specify
    a string literal starting with a '$' or a number or boolean.
    
# SYSTEM VARIABLES

    '$$NOW'
    '$$CLUSTER_TIME'
    '$$ROOT'
    '$$CURRENT'
    '$$REMOVE'
    '$$DESCEND'
    '$$PRUNE'
    '$$KEEP'
    
# EXPRESSION OBJECTS

    { <field name>: <expression>, <field name>: <expression>, ... }

    <expressions> have the same caveat as literals.
    
    To specify a string starting with '$', a number, or a boolean,
    you must specify { $literal: <value> }
    
    Examples:
    
        { cdfi: { $literal: true }, mdi: { $literal: false }, name: 'Bank of Podunk' }

# EXPRESSION OPERATORS

    Arithmetic Expression Operators
        $abs
        $add
        $ceil
        $divide
        $exp
        $floor
        $ln
        $log
        $log10
        $mod
        $multiply
        $pow
        $round
        $sqrt
        $subtract
        $trunc

    Array Expression Operators
        $arrayElemAt
        $arrayToObject
        $concatArrays
        $filter
        $first
        $in
        $indexOfArray
        $isArray
        $last
        $map
        $objectToArray
        $range
        $reduce
        $reverseArray
        $size
        $slice
        $zip
    
    Boolean Expression Operators
        $and
        $not
        { $or: [ <expr1>, <expr2>, ... ] }
    
    Comparison Expression Operators
        $cmp
        { $eq: [ <expr1>, <expr2> ] }
        $gt
        $gte
        $lt
        $lte
        $ne
    
    Conditional Expression Operators
        $cond
        $ifNull
        $switch
    
    Custom Aggregation Expression Operators
        $accumulator
        $function
    
    Data Size Expression Operators
        $binarySize
        $bsonSize
    
    Date Expression Operators
        $dateAdd
        $dateDiff
        $dateFromParts
        $dateFromString
        $dateSubtract
        $dateToParts
        $dateToString
        ...
    
    Literal Expression Operator
        $literal
    
    Miscellaneous Operators
        $getField
        $rand
        $sampleRate
    
    Object Expression Operators
        $mergeObjects
        $objectToArray
        $setField
    
    Set Expression Operators
        $allElementsTrue
        $anyElementTrue
        $setDifference
        $setEquals
        $setIntersection
        $setIsSubset
        $setUnion
    
    String Expression Operators
        $concat
        $dateFromString
        $dateToString
        $indexOfBytes
        $indexOfCP
        $ltrim
        $regexFind
        $regexFindAll
        $regexMatch
        $replaceOne
        $replaceAll
        $rtrim
        $split
        $strLenBytes
        $strLenCP
        $strcasecmp
        $substr
        $substrBytes
        $substrCP
        $toLower
        $toString
        $trim
        $toUpper

    Text
        $meta
        
    Trigonometry
        $sin
        $cos
        $tan
        $asin
        $acos
        $atan
        $atan2
        $asinh
        $acosh
        $atanh
        $sinh
        $cosh
        $tanh
        $degreesToRadians
        $radiansToDegrees

    Type
        $convert
        $isNumber
        $toBool
        $toDate
        $toDecimal
        $toDouble
        $toInt
        $toLong
        $toObjectId
        $toString
        $type

    Accumulators
        $accumulator
        $addToSet
        $avg
        $count
        $first
        $last
        $max
        $mergeObjects
        $min
        $push
        $stdDevPop
        $stdDevSamp
        $sum

    Variable Expression Operators
        $let
    
    Window Operators
