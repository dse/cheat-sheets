# tar

tar

    cd <root>

    find . -type f \( -name '*.html' \) > ../html-files.txt
    find . -type f \( -name '*.webp' -o -name '*.png' -o -name '*.jpg' -o -name '*.gif' \) > ../image-files.txt
    find . -type f \! \( -name '*.html' -o -name '*.webp' -o -name '*.png' -o -name '*.jpg' -o -name '*.gif' \) | tee ../other-files.txt

    tar -c -v -z -f ../html-files.tar.gz -T ../html-files.txt
    tar -c -v -z -f ../image-files.tar.gz -T ../image-files.txt

