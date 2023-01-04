# The Structure of an AWS ARN

    [1]     [2]        [3]       [4]       [5]         [6]            [7]

    arn:<partition>:<service>:<region>:<accountid>:<resourceid>
    arn:<partition>:<service>:<region>:<accountid>:<resourcetype>/<resourceid>
    arn:<partition>:<service>:<region>:<accountid>:<resourcetype>:<resourceid>

        usually     s3        us-east-1  omitted
        aws         iam                  for S3
                    etc.                 buckets
