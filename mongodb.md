# Mongo

Rather have a damn query language, Mongo decided on convoluted JSON
objects.

Actually, two or three different kinds of JSON objects, depending on
what you're using them for.

## Operators

-   Query and Projection https://www.mongodb.com/docs/manual/reference/operator/query/
    -   Comparison    https://www.mongodb.com/docs/manual/reference/operator/query-comparison/
    -   Logical       https://www.mongodb.com/docs/manual/reference/operator/query-logical/
    -   Element       https://www.mongodb.com/docs/manual/reference/operator/query-element/
    -   Evaluation    https://www.mongodb.com/docs/manual/reference/operator/query-evaluation/
    -   Geospatial    https://www.mongodb.com/docs/manual/reference/operator/query-geospatial/
    -   Array         https://www.mongodb.com/docs/manual/reference/operator/query-array/
    -   Boolean       https://www.mongodb.com/docs/manual/reference/operator/query-boolean/
    -   Projection    https://www.mongodb.com/docs/manual/reference/operator/projection/
    -   Miscellaneous https://www.mongodb.com/docs/manual/reference/operator/query-miscellaneous/
-   Update
    -   Field Update   https://www.mongodb.com/docs/manual/reference/operator/update-field/
    -   Array Update   https://www.mongodb.com/docs/manual/reference/operator/update-array/
    -   Bitwise Update https://www.mongodb.com/docs/manual/reference/operator/update-bitwise/
-   Aggregation
    -   Stages    https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/
    -   Operators https://www.mongodb.com/docs/manual/reference/operator/aggregation/

## Types of Operations

-   Read Operations

    ```
    coll.find(query, [options]);
    coll.findOne(query, [options]);
    coll.findOneAndDelete(query, [options]);
    coll.findOneAndUpdate(query, [options]);
    call.findOneAndReplace(query, [options]);
    ```

-   Queries
    
    -   Literal Value Queries

        Queries for documents that match exactly what you specify.

            { title: 'The Room' }                   { title: { $eq: 'The Room' } }
            { type: 'fruit', name: 'orange' }       { type: { $eq: 'fruit' },
                                                      name: { $eq: 'orange' } }

    -   Comparison Operators

        Queries for documents based on comparisons of values.

            { qty: { $gt: 5 } }

    -   Logical Operators

        Queries for documents based on logic applied to comparison and literal operators.

            { qty: { $not: { $gt: 5 } } }

    -   Element Operators

        Queries based on the present, absence, or type of a field.

            { microsieverts: { $exists: true } }

    -   Evaluation Operators

        Queries based on higher level logic such as regex and text searches.

            { qty: { $mod: [3, 0] } }   // get records whose qty are multiples of three

-   Aggregation Operations

        coll.aggregate(pipeline, [options])
        
    An aggregation pipeline is an array of aggregation stages.
    
        coll.aggregate([
            stage1,
            stage2,
            ...
        ], [options]);
        
    Types of aggregation stages include, but are not limited to:
    
        $match
        $group
        $sort
        $limit
    
    An example pipeline:
    
        const pipeline = [
            { $match: { categories: 'Bakery' } },
            { $group: { _id: '$stars', count: { $sum: 1 } } },
            { $sort: { count: -1 } },       // decreasing order of count
        ];
        coll.aggregate(pipeline);
    
    

## Types of Objects

### Query Documents

https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/

### Query Operations

https://www.mongodb.com/docs/manual/reference/operator/query/

    Comparison Expression Operators     $cmp
                                        $eq $gt $gte $lt $lte $ne
    Logical                             $and $not $nor $or
    Evaluation                          $expr       // use of aggregation expressions
                                        $jsonSchema $mod $regex $text $where
    ...

### Aggregation Pipelines and Aggregation Stages

https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/

    { $addFields: { <field-name>: <expression>, ... } }
    { $bucket: { } }
    { $bucketAuto: { } }
    { $changeStream: { } }
    { $collStats: { } }
    { $count: { } }
    { $densify: { } }
    { $documents: { } }
    { $facet: { } }
    { $fill: { } }
    { $geoNear: { } }
    { $graphLookup: { } }
    { $group: { } }
    { $indexStats: { } }
    { $limit: { } }
    { $listSessions: { } }
    { $lookup: { } }
    { $match: <query> }
    { $merge: { } }
    { $out: { } }
    { $planCacheStats: { } }
    { $project: { } }
    { $redact: { } }
    { $replaceRoot: { } }
    { $replaceWith: { } }
    { $sample: { } }
    { $search: { } }
    { $searchMeta: { } }
    { $set: { } }
    { $setWindowFields: { } }
    { $skip: { } }
    { $sort: { } }
    { $sortByCount: { } }
    { $unionWith: { } }
    { $unset: { } }
    { $unwind: { } }

### Aggregation Expressions

https://www.mongodb.com/docs/manual/meta/aggregation-quick-reference/#std-label-aggregation-expressions

Expressions can include:

    -   field paths
    -   literals
    -   system variables
    -   expression objects
    -   expression operators

Field paths are dotted field names prefixed with `$`.

    $user                       $$CURRENT.user
    $user.name                  $$CURRENT.user.name
    $users.1                    $$CURRENT.users.1

Aggregation variables, aka system variables:

https://www.mongodb.com/docs/manual/reference/aggregation-variables/#std-label-agg-system-variables

    $$NOW
    $$CLUSTER_TIME
    $$ROOT
    $$CURRENT
    $$REMOVE
    $$DESCEND
    $$PRUNE
    $$KEEP

Literals:

    { literal: '$PATH' }        // not a field path
    { literal: true }           // not a projection flag (expression objects)
    { literal: 5 }              // not a projection flag (expression objects)

Expression Objects:

    { <field>: <expression>, ... }

Operator Expressions:

    { <operator>: <argument> }
    { <operator>: [ <argument> ] }
    { <operator>: [ <argument>, ... ] }

    Arithmetic Expression Operators     $abs
                                        $add $divide $mod $multiply $subtract
                                        $ceil $floor $round $trunc
                                        $exp $ln $log $log10 $pow
                                        $sqrt
    Array Expression Operators          $arrayElemAt $slice
                                        $arrayToObject $objectToArray
                                        $concatArrays $zip
                                        $filter $map $reduce
                                        $first $firstN $last $lastN
                                        $maxN $minN
                                        $in $indexOfArray
                                        $isArray
                                        $range
                                        $reverseArray $sortArray
                                        $size
    Boolean Expression Operators        $and $not $or
    Comparison Expression Operators     $cmp
                                        $eq $gt $gte $lt $lte $ne
    Conditional Expression Operators    $cond
                                        $ifNull
                                        $switch
    Custom Aggregation Expression Operators         $accumulator
                                                    $function
    Data Size Expression Operators      $binarySize $bsonSize
    Date Expression Operators           $dateAdd $dateSubtract $dateDiff
                                        $dateFromParts $dateFromString
                                        $dateToParts $dateToString
                                        $dateTrunc
                                        $dayOfMonth $dayOfWeek $dayOfYear $isoDayOfWeek 
                                        $isoWeek $week
                                        $isoWeekYear $year
                                        $month
                                        $hour $millisecond $minute $second
                                        $toDate
    Literal Expression Operator         $literal
    Miscellaneous Operators             $getField
                                        $rand
                                        $sampleRate
    Object Expression Operators         $mergeObjects
                                        $objectToArray
                                        $setField
    Set Expression Operators            $allElementsTrue $anyElementTrue
                                        $setDifference $setIntersection $setUnion
                                        $setEquals $setIsSubset
    String Expression Operators         $concat
                                        $dateFromString $dateToString
                                        $indexOfBytes $indexOfCP
                                        $ltrim $rtrim $trim
                                        $regexFind $regexFindAll $regexMatch
                                        $replaceOne $replaceAll
                                        $split
                                        $strlenBytes $strlenCP
                                        $strcasecmp
                                        $substr $substrBytes $substrCP
                                        $toLower $toUpper
                                        $toString
    Text Expression Operator            $meta
    Trigonometry                        $sin $cos $tan $asin $acos $atan $atan2
                                        $sinh $cosh $tanh $asinh $acosh $atanh
                                        $degreesToRadians $radiansToDegrees
    Type Expression Operators           $convert $type $isNumber
                                        $toBool $toDate $toDecimal $toDouble $toInt
                                        $toLong $toObjectId $toString $type
    Accumulators                        $accumulator
                                        $addToSet
                                        $avg $count $max $min $stdDevPop $stdDevSamp $sum
                                        $bottom $bottomN $top $topN
                                        $first $firstN $last $lastN
                                        $mergeObjects
                                        $push
                                        # some but not all can be used in non-$group stages
    Variable Expression Operators       $let
    Window Operators                    $addToSet
                                        $avg $bottom $bottomN $count $covariancePop $covarianceSamp
                                        $denseRank $derivative $documentNumber $expMovingAvg
                                        $first $integral $last $linearFill $locf $max $min $minN $push $rank $shift $stdDevPop $stdDevSamp
                                        $sum $top $topN 

    Aggregation Commands
        aggregate
        count
        distinct
        mapReduce
    Aggregation Methods
        coll.aggregate()
        coll.mapReduce()
