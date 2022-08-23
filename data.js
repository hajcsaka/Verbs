
const verbs = [
    {
        verb: "go",
        spast: "went",
        ppart: "gone",
        meaning: "menni"

    },
    {
        verb: "break",
        spast: "broke",
        ppart: "broken",
        meaning: "megszakítani, törni"
    },
    {
        verb: "do",
        spast: "did",
        ppart: "done",
        meaning: "tenni"
    },
    {
        verb: "sell",
        spast: "sold",
        ppart: "sold",
        meaning: "eladni"
    },
    {
        verb: "begin",
        spast: "began",
        ppart: "begun",
        meaning: "kezdeni"

    },
    {
        verb: " build",
        spast: "built",
        ppart: "built",
        meaning: "építeni"

    },
    {
        verb: "bite",
        spast: "bit",
        ppart: "bitten",
        meaning: "harapni"

    },
    {
        verb: "rise		",
        spast: "rose",
        ppart: "risen",
        meaning: "felkel"

    },
    {
        verb: "wake",
        spast: "woke",
        ppart: "woken",
        meaning: "felébred"

    },
    {
        verb: "bear",
        spast: "bore",
        ppart: "borne",
        meaning: "elvisel/szül"

    },
    {
        verb: "beat",
        spast: "beat",
        ppart: "beaten",
        meaning: "üt, legyőz, megver"

    },
    {
        verb: "become",
        spast: "became",
        ppart: "become",
        meaning: "válik vmivé"
    },
    {
        verb: "bend",
        spast: "bent",
        ppart: "bent",
        meaning: "hajlik"

    },
    {
        verb: "bet",
        spast: "bet",
        ppart: "bet",
        meaning: "fogad"

    },
    {
        verb: "bid",
        spast: "bid",
        ppart: "bid",
        meaning: "ajánlatot tesz"

    },
    {
        verb: "bind",
        spast: "bound",
        ppart: "bound",
        meaning: "köt, beköt, összeköt"

    },
    {
        verb: "bleed",
        spast: "bled",
        ppart: "bled",
        meaning: "vérzik"

    },
    {
        verb: "blow",
        spast: "blew",
        ppart: "blown",
        meaning: "fúj (szél), kifúj (orrot)"

    },
    {
        verb: "broadcast",
        spast: "broadcast",
        ppart: "broadcast",
        meaning: "sugároz, közvetít"

    },
    {
        verb: "break",
        spast: "broke",
        ppart: "broken",
        meaning: "eltör, eltörik"

    },
    {
        verb: "breed",
        spast: "bred",
        ppart: "bred",
        meaning: "tenyészt, szül"

    },
    {
        verb: "bring",
        spast: "brought",
        ppart: "brought",
        meaning: "hoz"

    },
    {
        verb: "build",
        spast: "built",
        ppart: "built",
        meaning: "épít"

    },
    {
        verb: "burn",
        spast: "burnt",
        ppart: "burnt",
        meaning: "ég, éget"

    },
    {
        verb: "burst",
        spast: "burst",
        ppart: "burst",
        meaning: "felrobban; vm érzés hirtelen"

    },
    {
        verb: "buy",
        spast: "bought",
        ppart: "bought",
        meaning: "megvesz"

    },
    {
        verb: "can",
        spast: "could",
        ppart: "couth",
        meaning: "képes (módbeli s.ige)"

    },
    {
        verb: "cast",
        spast: "cast",
        ppart: "cast",
        meaning: "dob, hajít"

    },
    {
        verb: "catch",
        spast: "caught",
        ppart: "caught",
        meaning: "elkap, elfog"

    },
    {
        verb: "choose",
        spast: "chose",
        ppart: "chosen",
        meaning: "választ, kiválaszt"

    },
    {
        verb: "cling",
        spast: "clung",
        ppart: "clung",
        meaning: "ragaszkodik"

    },
    {
        verb: "come",
        spast: "came",
        ppart: "come",
        meaning: "jön"

    },
    {
        verb: "",
        spast: "",
        ppart: "",
        meaning: ""

    },
    {
        verb: "cost",
        spast: "cost",
        ppart: "cost",
        meaning: "kerül vmibe"

    },
    {
        verb: "creep",
        spast: "crept",
        ppart: "crept",
        meaning: "mászik, kúszik"

    },
    {
        verb: "drive",
        spast: "drove",
        ppart: "driven",
        meaning: "vezet"

    },
    {
        verb: "cut",
        spast: "cut",
        ppart: "cut",
        meaning: "vág"

    },
    {
        verb: "deal(with)",
        spast: "dealt",
        ppart: "dealt",
        meaning: "foglalkozik vmivel"

    },
    {
        verb: "die",
        spast: "died",
        ppart: "died",
        meaning: "meghal"

    },
    {
        verb: "dig",
        spast: "dug",
        ppart: "dug",
        meaning: "ás"

    },
    {
        verb: "draw",
        spast: "drew",
        ppart: "drawn",
        meaning: "rajzol, húz"

    },
    {
        verb: "dream",
        spast: "dreamt",
        ppart: "dreamt",
        meaning: "álmodik"

    },
    {
        verb: "drink",
        spast: "drank",
        ppart: "drunk",
        meaning: "iszik"

    },
    {
        verb: "eat",
        spast: "ate",
        ppart: "eaten",
        meaning: "eszik"

    },
    {
        verb: "fall",
        spast: "fell",
        ppart: "fallen",
        meaning: "esik"

    },
    {
        verb: "feed",
        spast: "fed",
        ppart: "fed",
        meaning: "etet"

    },
    {
        verb: "feel",
        spast: "felt",
        ppart: "felt",
        meaning: "érez"

    },
    {
        verb: "fight",
        spast: "fought",
        ppart: "fought",
        meaning: "harcol"

    },
    {
        verb: "find",
        spast: "found",
        ppart: "found",
        meaning: "talál"

    },
    {
        verb: "flee",
        spast: "fled",
        ppart: "fled",
        meaning: "menekül"

    },
    {
        verb: "fly",
        spast: "flew",
        ppart: "flown",
        meaning: "repül"

    },
    {
        verb: "forbid",
        spast: "forbade",
        ppart: "forbidden",
        meaning: "megtilt"

    },
    {
        verb: "forget",
        spast: "forgot",
        ppart: "forgotten",
        meaning: "elfelejt"

    },
    {
        verb: "forgive",
        spast: "forgave",
        ppart: "forgiven",
        meaning: "megbocsát"

    },
    {
        verb: "freeze",
        spast: "froze",
        ppart: "frozen",
        meaning: "megfagy, befagyaszt"

    },
    {
        verb: "get",
        spast: "got",
        ppart: "got",
        meaning: "kap, megszerez"

    },
    {
        verb: "give",
        spast: "gave",
        ppart: "given",
        meaning: "a"

    },
    {
        verb: "grind",
        spast: "ground",
        ppart: "ground",
        meaning: "őröl, darál"

    },
    {
        verb: "grow",
        spast: "grew",
        ppart: "grown",
        meaning: "nő, termel"

    },
    {
        verb: "hang",
        spast: "hung",
        ppart: "hung",
        meaning: "akaszt,lóg,felakaszt"

    },
    {
        verb: "have",
        spast: "had",
        ppart: "had",
        meaning: "birtokol"

    },
    {
        verb: "hear",
        spast: "heard",
        ppart: "heard",
        meaning: "hall"

    },
    {
        verb: "hide",
        spast: "hid",
        ppart: "hidden",
        meaning: "elrejt, elbújik"

    },
    {
        verb: "lead",
        spast: "led",
        ppart: "led",
        meaning: "vezet"

    },
    {
        verb: "hit",
        spast: "hit",
        ppart: "hit",
        meaning: "üt"

    },
    {
        verb: "hold",
        spast: "held",
        ppart: "held",
        meaning: "tart, megfog"

    },
    {
        verb: "hurt",
        spast: "hurt",
        ppart: "hurt",
        meaning: "megsért, bánt"

    },
    {
        verb: "keep",
        spast: "kept",
        ppart: "kept",
        meaning: "tart"

    },
    {
        verb: "kneel",
        spast: "knelt",
        ppart: "knelt",
        meaning: "letérdel"

    },
    {
        verb: "know",
        spast: "knew",
        ppart: "known",
        meaning: "tud, ismer"

    },
    {
        verb: "lay",
        spast: "laid",
        ppart: "laid",
        meaning: "lefektet, terít"

    },
    {
        verb: "lead",
        spast: "led",
        ppart: "led",
        meaning: "vezet"

    },
    {
        verb: "lean (against)",
        spast: "leant",
        ppart: "leant",
        meaning: "támaszkodik vminek"

    },
    {
        verb: "leap",
        spast: "leapt",
        ppart: "leapt",
        meaning: "szökken, ugrik"

    },
    {
        verb: "learn",
        spast: "learnt",
        ppart: "learnt",
        meaning: "megtanul, megtud"

    },
    {
        verb: "leave",
        spast: "left",
        ppart: "left",
        meaning: "elmegy, elindul, otthagy"

    },
    {
        verb: "lend",
        spast: "lent",
        ppart: "lent",
        meaning: "kölcsönad"

    },
    {
        verb: "let",
        spast: "let",
        ppart: "let",
        meaning: "hagy"

    },
    {
        verb: "lie",
        spast: "lay",
        ppart: "lain",
        meaning: "fekszik"

    },
    {
        verb: "light",
        spast: "lit",
        ppart: "lit",
        meaning: "meggyújt"

    },
    {
        verb: "lose",
        spast: "lost",
        ppart: "lost",
        meaning: "elveszít"

    },
    {
        verb: "make",
        spast: "made",
        ppart: "made",
        meaning: "készít"

    },
    {
        verb: "mean",
        spast: "meant",
        ppart: "meant",
        meaning: "jelent vmit"

    },
    {
        verb: "meet",
        spast: "met",
        ppart: "met",
        meaning: "találkozik"

    },
    {
        verb: "pay",
        spast: "paid",
        ppart: "paid",
        meaning: "fizet"

    },
    {
        verb: "put",
        spast: "put",
        ppart: "put",
        meaning: "tesz, rak"

    },
    {
        verb: "quit",
        spast: "quit",
        ppart: "quit",
        meaning: "otthagy, elmegy, kilép"

    },
    {
        verb: "read",
        spast: "red",
        ppart: "red",
        meaning: "olvas"

    },
    {
        verb: "ride",
        spast: "rode",
        ppart: "ridden",
        meaning: "lovagol"

    },
    {
        verb: "ring",
        spast: "rang",
        ppart: "rung",
        meaning: "csöng"

    },
    {
        verb: "rise",
        spast: "rose",
        ppart: "risen",
        meaning: "emelkedik, kel (nap)"

    },
    {
        verb: "run",
        spast: "ran",
        ppart: "run",
        meaning: "fut"

    },
    {
        verb: "saw",
        spast: "sawed",
        ppart: "sawn",
        meaning: "fűrészel"

    },
    {
        verb: "say",
        spast: "said",
        ppart: "said",
        meaning: "mond"

    },
    {
        verb: "see",
        spast: "saw",
        ppart: "seen",
        meaning: "lát"

    },
    {
        verb: "seek",
        spast: "sought",
        ppart: "sought",
        meaning: "keres, kutat"

    },
    {
        verb: "sell",
        spast: "sold",
        ppart: "sold",
        meaning: "elad"

    },
    {
        verb: "send",
        spast: "sent",
        ppart: "sent",
        meaning: "elküld"

    },
    {
        verb: "set",
        spast: "set",
        ppart: "set",
        meaning: "beállít, helyez"

    },
    {
        verb: "sew",
        spast: "sewed",
        ppart: "sewn",
        meaning: "varr"

    },
    {
        verb: "shake",
        spast: "shook",
        ppart: "shaken",
        meaning: "ráz"

    },
    {
        verb: "shed",
        spast: "shed",
        ppart: "shed",
        meaning: "elhullat"

    },
    {
        verb: "shine",
        spast: "shone",
        ppart: "shone",
        meaning: "süt, ragyog"

    },
];