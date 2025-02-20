# emacs tags

1.  Generate your tags:

        find . -name "*.[chCH]" -print | etags -

2.  https://www.gnu.org/software/emacs/manual/html_node/emacs/Xref.html

        M-.             xref-find-definitions
        M-?             xref-find-references
                                use identifier at point, or prompt for identifier

        C-M-.           xref-find-apropos
        C-x 4 .         xref-find-definitions-other-window
        C-x 5 .         xref-find-definitions-other-frame
        M-,             xref-go-back (to previous invocation of M-. etc.)
        C-M-,           xref-go-forward
                    M-x xref-etags-mode
                                have xref use etags backend

        customize xref-prompt-for-identifier to t if you want M-. to always prompt.
