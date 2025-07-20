# DBI

    ($scheme, $driver, $attr_string, $attr_hash, $driver_dsn) = DBI->parse_dsn($dsn) or die "...";
    $dbh = DBI->connect('dbi:Pg:dbname=___;host=___;port=___;options=___', $username, $password)
        or die $DBI::errstr;
    $dbh = DBI->connect($dsn, $username, $password, \%attr)
        or die $DBI::errstr;
    $dbh = DBI->connect_cached(...);
    
    @driver_array = 
    

# All Handles

    $rv = $h->err;          # 
    $str = $h->errstr;
    $str = $h->state;
    
    
# DSN parameters

    host
    hostaddr
    port
    dbname
    username
    password
    options
    service
    sslmode
