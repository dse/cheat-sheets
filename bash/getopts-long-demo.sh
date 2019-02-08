#!/usr/bin/env bash

usage () { cat <<EOF; }
usage:
    ${0##*/} [<option> ...] [--] [<arg> ...]
options:
    -h, --help
    -v, --version
    -n, --dry-run
    -W, --width=<width>
    -H, --height=<height>
EOF

verbose=0
dry_run=0
width=''
height=''

while getopts 'hvnW:H:-:' OPTION ; do
    if [[ "${OPTION}" = "-" ]] ; then
        if [[ "${OPTARG}" == "" ]] ; then
            # argument is '--' by itself; terminate option parsing
            break
        fi
        OPTION="${OPTARG}"
        unset OPTARG
        case "${OPTION}" in
            *=*)
                OPTARG="${OPTION#*=}"
                OPTION="${OPTION%%=*}"
                ;;
        esac
    fi
    case "${OPTION}" in
        'h'|'help')
            usage
            exit 0
            ;;
        'v'|'verbose')
            verbose=$((verbose + 1))
            ;;
        'n'|'dry-run')
            dry_run=1
            ;;
        'W'|'width')
            if [[ ! -v OPTARG ]] ; then
                if (( OPTIND > $# )) ; then # long option missing argument
                    >&2 echo "<progname>: option requires an argument -- width"
                    >&2 echo "Type '<progname> --help' for more information."
                    exit 1
                fi
                OPTARG="${@:OPTIND:1}"
                OPTIND=$((OPTIND + 1))
            fi
            width="${OPTARG}"
            ;;
        'H'|'height')
            if [[ ! -v OPTARG ]] ; then
                if (( OPTIND > $# )) ; then # long option missing argument
                    >&2 echo "<progname>: option requires an argument -- height"
                    >&2 echo "Type '<progname> --help' for more information."
                    exit 1
                fi
                OPTARG="${@:OPTIND:1}"
                OPTIND=$((OPTIND + 1))
            fi
            height="${OPTARG}"
            ;;
        '?')
            # short option invalid or missing argument
            >&2 echo "Type '<progname> --help' for more information."
            exit 1
            ;;
        *)
            # invalid long option
            >&2 echo "<progname>: unknown option -- ${OPTION}"
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
