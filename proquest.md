# ProQuest Cheat Sheet

Do your online library resources and/or card catalogues use ProQuest?

https://www.proquest.com/help/academic/webframe.html?Search_Tips.html#Search_Tips.html

# Basic Search Operators

    food AND nutrition
    food OR nutrition
    nursing NOT shortage
    nursing NEAR/3 education
    nursing N/3 education
    nursing PRE/4 education
    nursing P/4 education
    SU.EXACT("higher education")

# Subject Searching: Qualifiers

    MESH(descriptor LNK qualifier)
    MESH("aspirin" LNK "adverse effects")
    MESH("aspirin -- adverse effects")
    
    aspirin 

# Operator Precedence

    tighter
    PRE
    NEAR
    AND
    OR
    NOT
    looser

# Fields

    AU(smith)       smith appears in the author field
    TI(food)        food appears in the title field
    AB(food)        abstract
    AU,TI,AB(food)  food in the author, title, OR abstract fields

# Wildcards

    ?               0 or 1 character
    ??              0, 1, or 2 characters
    *               truncation, up to 5 characters
    [*9]            truncation of up to 9 characters
                    you can specify up to 20

# Exact Search but with Spelling Variations

    "{god save the king}"   would include: god saue the kyng
                            useful for early modern English
                    
# Ranges

    YR(<2005)       publication year
       >
       <=
       >=
    YR(2005-2008)

# Common Field Codes

    AB      abstract                AB(food)
    AN      accession number        AN(1713554) for proquest and third-party document IDs
    AU      author                  AU(smith)
    DF      document feature        DF(maps)
    FT      document text           FT(food)
    TI      document title          TI(food)
    DTYPE   document type           DTYPE(literature review)
    ISBN                            ISBN(3926608587)
    ISSN                            ISSN(10673881)
    ISS     issue                   ISS(23)
    LA      language                LA(french)
    LOC     location as subject     LOC(france)
    PER     person as subject       PER(smith)
    PD      publication date        PD(19951231), PD(199512), PD(1995)
    YR      publication year        YR(1995)
    PUB     publication title       PUB(wall street journal)
    STYPE   source type             STYPE(newspapers)
    SU      subject                 SU(higher education)
    LUPD    last update date        LUPD(20110504)
    VOL     volume                  VOL(85)

https://www.proquest.com/help/academic/webframe.html?Search_Tips.html#View_Field_Codes.html

# Special Mnemonics for Researchers

    TIAB    title and abstract      TIAB("climate change")
    TISU    title and subject
    TIABSU  title, subject, and abstract

