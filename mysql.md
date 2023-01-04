# mysql

Usage: mysql [OPTIONS] [database]

  -h, --host=name     Connect to host.
  -P, --port=#        Port number to use for connection or 0 for default to, in
                      order of preference, my.cnf, $MYSQL_TCP_PORT,
                      /etc/services, built-in default (3306).
  -u, --user=name     User for login if not current user.
  -p, --password[=name]
                      Password to use when connecting to server. If password is
                      not given it's asked from the tty.

  -v, --verbose       Write more. (-v -v -v gives the table output format).
  -V, --version       Output version information and exit.

  -B, --batch         Don't use history file. Disable interactive behavior.  (Enables --silent.)
  --column-type-info  Display column type information.
  -C, --compress      Use compression in server/client protocol.
  -D, --database=name Database to use.
  -e, --execute=name  Execute command and quit. (Disables --force and history file.)
  --column-names      Write column names in results.
                      (Defaults to on; use --skip-column-names to disable.)
  -N, --skip-column-names
                      Don't write column names in results.
  -o, --one-database  Ignore statements except those that occur while the
                      default database is the one named at the command line.
  -r, --raw           Write fields without conversion. Used with --batch.
  -s, --silent        Be more silent. Print results with a tab as separator,
                      each row on new line.
  -t, --table         Output in table format.

# mysqldump

Usage: mysqldump [OPTIONS] database [tables]
OR     mysqldump [OPTIONS] --databases [OPTIONS] DB1 [DB2 DB3...]
OR     mysqldump [OPTIONS] --all-databases [OPTIONS]

  -h, --host=name     Connect to host.
  -P, --port=#        Port number to use for connection.
  -u, --user=name     User for login if not current user.
  -p, --password[=name] 
                      Password to use when connecting to server. If password is
                      not given it's solicited on the tty.

  -v, --verbose       Print info about the various stages.
  -V, --version       Output version information and exit.

  -A, --all-databases Dump all the databases. This will be same as --databases
                      with all databases selected.
  --add-drop-database Add a DROP DATABASE before each create.
  --add-drop-table    Add a DROP TABLE before each create.
                      (Defaults to on; use --skip-add-drop-table to disable.)
  --add-drop-trigger  Add a DROP TRIGGER before each create.
  -C, --compress      Use compression in server/client protocol.
  -B, --databases     Dump several databases. Note the difference in usage; in
                      this case no tables are given. All name arguments are
                      regarded as database names. 'USE db_name;' will be
                      included in the output.
  --flush-privileges  Emit a FLUSH PRIVILEGES statement after dumping the mysql
                      database.  This option should be used any time the dump
                      contains the mysql database and any other database that
                      depends on the data in the mysql database for proper
                      restore. 
  --ignore-database=name 
                      Do not dump the specified database. To specify more than
                      one database to ignore, use the directive multiple times,
                      once for each database. Only takes effect when used
                      together with --all-databases|-A
  --ignore-table=name Do not dump the specified table. To specify more than one
                      table to ignore, use the directive multiple times, once
                      for each table.  Each table must be specified with both
                      database and table names, e.g.,
                      --ignore-table=database.table.
  -x, --lock-all-tables 
                      Locks all tables across all databases. This is achieved
                      by taking a global read lock for the duration of the
                      whole dump. Automatically turns --single-transaction and
                      --lock-tables off.
  -l, --lock-tables   Lock all tables for read.
                      (Defaults to on; use --skip-lock-tables to disable.)
  --no-autocommit     Wrap tables with autocommit/commit statements.
  -n, --no-create-db  Suppress the CREATE DATABASE ... IF EXISTS statement that
                      normally is output for each dumped database if
                      --all-databases or --databases is given.
  -t, --no-create-info 
                      Don't write table creation info.
  -d, --no-data       No row information.
  --opt               Same as --add-drop-table, --add-locks, --create-options,
                      --quick, --extended-insert, --lock-tables, --set-charset,
                      and --disable-keys. Enabled by default, disable with
                      --skip-opt.
  --skip-opt          Disable --opt. Disables --add-drop-table, --add-locks,
                      --create-options, --quick, --extended-insert,
                      --lock-tables, --set-charset, and --disable-keys.
  --tables            Overrides option --databases (-B).
  --triggers          Dump triggers for each dumped table.
                      (Defaults to on; use --skip-triggers to disable.)
