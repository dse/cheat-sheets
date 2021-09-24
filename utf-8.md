# UTF-8

| First cp | Last cp  | Count   | Byte 1   | Byte 2   | Byte 3   | Byte 4   | x bits | Bytes |
|:---------|:---------|:--------|:---------|:---------|:---------|:---------|:-------|:------|
| U+0000   | U+007F   | 128     | 0xxxxxxx |          |          |          | 7      | 1     |
| U+0080   | U+07FF   | 1920    | 110xxxxx | 10xxxxxx |          |          | 11     | 2     |
| U+0800   | U+FFFF   | 63488   | 1110xxxx | 10xxxxxx | 10xxxxxx |          | 16     | 3     |
| U+10000  | U+10FFFF | 1048576 | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxxx | 21     | 4     |

-   The first byte indicates the number of bytes in the multi-byte
    sequence.

    -   The number of high-order 1's in the first byte is the number
        of bytes in the multi-byte character.

-   Every byte that does not start 10xxxxxx is the start of a
    multi-byte sequence.
    
    

## As Proposed

https://www.cl.cam.ac.uk/~mgk25/ucs/utf-8-history.txt

| Bits | Hex Min  | Hex Max  | Byte Sequence in Binary                               | Bytes |
|:-----|:---------|:---------|:------------------------------------------------------|:------|
| 7    | 00000000 | 0000007F | 0vvvvvvv                                              | 1     |
| 11   | 00000080 | 000007FF | 110vvvvv 10vvvvvv                                     | 2     |
| 16   | 00000800 | 0000FFFF | 1110vvvv 10vvvvvv 10vvvvvv                            | 3     |
| 21   | 00010000 | 001FFFFF | 11110vvv 10vvvvvv 10vvvvvv 10vvvvvv                   | 4     |
| 26   | 00200000 | 03FFFFFF | 111110vv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv          | 5     |
| 31   | 04000000 | 7FFFFFFF | 1111110v 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv | 6     |

OR

| Bits | Hex Min  | Hex Max  | Byte Sequence in Binary                               | Bytes |
|:-----|:---------|:---------|:------------------------------------------------------|:------|
| 7    | 00000000 | 0000007F | 0vvvvvvv                                              | 1     |
| 11   | 00000080 | 000007FF | 110vvvvv 10vvvvvv                                     | 2     |
| 16   | 00000800 | 0000FFFF | 1110vvvv 10vvvvvv 10vvvvvv                            | 3     |
| 21   | 00010000 | 001FFFFF | 11110vvv 10vvvvvv 10vvvvvv 10vvvvvv                   | 4     |
| 26   | 00200000 | 03FFFFFF | 111110vv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv          | 5     |
| 32   | 04000000 | FFFFFFFF | 111111vv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv | 6     |

fails the high-order bytes characteristic, instead being characterized
by the following: The number of high-order 1's, up to 6, is the number
of bytes in the sequence.

## As Could Be Done?

| Bits | Hex Min    | Hex Max     | Byte Sequence in Binary                                                 | Bytes |
|-----:|-----------:|------------:|:------------------------------------------------------------------------|:------|
|    7 |   00000000 |    0000007F | 0vvvvvvv                                                                | 1     |
|   11 |   00000080 |    000007FF | 110vvvvv 10vvvvvv                                                       | 2     |
|   16 |   00000800 |    0000FFFF | 1110vvvv 10vvvvvv 10vvvvvv                                              | 3     |
|   21 |   00010000 |    001FFFFF | 11110vvv 10vvvvvv 10vvvvvv 10vvvvvv                                     | 4     |
|   26 |   00200000 |    03FFFFFF | 111110vv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv                            | 5     |
|   31 |   04000000 |    7FFFFFFF | 1111110v 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv                   | 6     |
|   36 |   80000000 |   FFFFFFFFF | 11111110 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv          | 7     |
|   42 | 1000000000 | 3FFFFFFFFFF | 11111111 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv 10vvvvvv | 8     |

## Notes

-   UTF-16 can never encode beyond U+10FFFF.
