#!/usr/bin/env bash

usage () { cat <<EOF; }
usage:
    ${0##*/} [<option> ...] [--] [<arg> ...]
options:
    -h             display this help
    -v             increase verbosity
    -n             dry run
    -W <width>
    -H <height>
EOF

verbose=0
dry_run=0
width=''
height=''

while getopts 'hvnW:H:' OPTION ; do
    case "${OPTION}" in
        'h')
            usage
            exit 0
            ;;
        'v')
            verbose=$((verbose + 1))
            ;;
        'n')
            dry_run=1
            ;;
        'W')
            width="${OPTARG}"
            ;;
        'H')
            height="${OPTARG}"
            ;;
        '?')
            >&2 echo "Type '<progname> --help' for more information."
            exit 1
            ;;
    esac
done
shift $(( OPTIND - 1 ))

cat <<EOF
Verbose level: $verbose
      Dry run: $dry_run
        Width: $width
       Height: $height

Remaining arguments: ${@@Q}
EOF
