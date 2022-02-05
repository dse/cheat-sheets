# MySQL

    mysql [<option> ...] [<dbname>]
        -h, --host=<name>
        -P, --port=<num>
        -u, --user=<name>
        -p, --password[=<pass>]
        -C, --compress

            --show-warnings             after every stmt

            --verbose

    mysqldump [<option> ...] <dbname> [<tablename> ...]
    mysqldump [<option> ...] --databases <dbname> ...
    mysqldump [<option> ...] --all-databases
        -h, --host=<name>
        -P, --port=<num>
        -u, --user=<user>
        -p, --password[=<pass>]
        -C, --compress

        -A, --all-databases
        -Y, --all-tablespaces           ?
            --add-drop-database
            --add-drop-table
            --add-drop-trigger
            --flush-privileges          use with --all-databases
            --ignore-database=<name>
            --ignore-table=<name>
        -d, --no-data
        -R, --routines                  dump stored routines (funcs and procs)

            --verbose
