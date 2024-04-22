const imagesAndAlts = [
    {
        name: "Falling rocks",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Πτώση-βράχων.png",
        alts: [
            "Caution: crumbling cliff edges",
            "Beware of jagged terrain",
            "Mountain goat territory"
        ]
    },
    {
        name: "Cattle",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διασταύρωση-δρόμου-από-ζώα.png",
        alts: [
            "Possible cow parade",
            "Farmyard animals on road",
            "Moo-ving hazards"
        ]
    },
    {
        name: "Wild animals",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διασταύρωση-δρόμου-από-άγρια-ζώα.png",
        alts: [
            "Possible safari sighting",
            "Forest creatures crossing",
            "Animal kingdom"
        ]
    },
    {
        name: "Side winds",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ρεύμα-αέρος-πλάγιοι-άνεμοι.png",
        alts: [
            "Flying debris possible",
            "Hold on to your hats",
            "Windmill zone"
        ]
    },
    {
        name: "Frequent use of road by pedestrians",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-χρήση-από-πεζούς.png",
        alts: [
            "Community gathering spot",
            "High foot-traffic shopping area",
            "Marathon route"
        ]
    },
    {
        name: "Uneven road",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ανώμαλο-οδόστρωμα.png",
        alts: [
            "Roller coaster tarmac",
            "Rumble strip ahead",
            "Off-road terrain"
        ]
    },
    {
        name: "Humped bridge",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Κυρτή-γέφυρα.png",
        alts: [
            "Watch for jumping fish",
            "Rolling river crossing",
            "Aqueduct ahead"
        ]
    },
    {
        name: "Road hump ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Κύρτωμα-οδοστρώματος.png",
        alts: [
            "Giant's speed breaker",
            "Camel's back crossing",
            "Undulating road surface"
        ]
    },
    {
        name: "Pedestrian crossing",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διάβαση-πεζών-Ζέβρα.png",
        alts: [
            "Striped pathway",
            "Cross-hatch terrain",
            "Pavement art ahead"
        ]
    },
    {
        name: "Frequent use of road by childern",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-χρήση-του-δρόμου-από-παιδιά.png",
        alts: [
            "Toy scattering zone",
            "Kite flying area",
            "Junior sports league"
        ]
    },
    {
        name: "Warning! Elderly people crossing the road",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-χρήση-του-δρόμου-από-ηλικιωμένους.png",
        alts: [
            "Retirement village ahead",
            "Senior citizen stroll path",
            "Leisure walk zone"
        ]
    },
    {
        name: "School crossing",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-χρήση-του-δρόμου-από-παιδιά-Σχολείο.png",
        alts: [
            "Young scholars' path",
            "Homework crossing",
            "Youth crossroads"
        ]
    },
    {
        name: "Verge on the right",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επικίνδυνο-έρεισμα-αριστερά1.png",
        alts: [
            "Ditch diving danger",
            "Right-side rally route",
            "Gutter runners"
        ]
    },
    {
        name: "Verge on the right",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επικίνδυνο-έρεισμα-δεξιά.png",
        alts: [
            "Ditch diving danger",
            "Right-side rally route",
            "Gutter runners"
        ]
    },
    {
        name: "Two-way traffic straight ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διπλή-κυκλοφορία.png",
        alts: [
            "Converging lanes",
            "Head-on approach",
            "Two-lane territory"
        ]
    },
    {
        name: "Two-way traffic crosses one-way road",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολή-με-δρόμο-διπλής-κυκλοφορίας.png",
        alts: [
            "Intersecting pathways",
            "Tangle of traffic",
            "Merge and meet"
        ]
    },
    {
        name: "Tunnel ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Σήραγγα.png",
        alts: [
            "Subterranean passage",
            "Underground exploration",
            "Cave entry route"
        ]
    },
    {
        name: "Steep hill downwards",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επικίνδυνη-κατωφέρεια.png",
        alts: [
            "Roller descent",
            "Gravity boost area",
            "Downward dash"
        ]
    },
    {
        name: "Steep hill upwards",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επικίνδυνη-ανωφέρεια.png",
        alts: [
            "Mountain climber's route",
            "Ascent challenge",
            "Uphill exertion area"
        ]
    },
    {
        name: "Roundabout",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Κυκλικός-κόμβος.png",
        alts: [
            "Merry-go-round junction",
            "Circular logic area",
            "Rotating road"
        ]
    },
    {
        name: "Dangerous bend to the right",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επικίνδυνη-στροφή-προς-τα-δεξιά.png",
        alts: [
            "Twisty turn",
            "Sudden swerve required",
            "Right-angled rally"
        ]
    },
    {
        name: "Dangerous bend to the left",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επικίνδυνη-στροφή-προς-τα-αριστερά.png",
        alts: [
            "Leftward lunge",
            "Hook turn territory",
            "Veering venture"
        ]
    },
    {
        name: "Double bend first to right",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διπλή-στροφή-ή-περισσότερες-με-την-πρώτη-προς-τα-δεξιά.png",
        alts: [
            "Zigzag road ahead",
            "Wavy route warning",
            "Serpentine street"
        ]
    },
    {
        name: "Double bend first to left",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διπλή-στροφή-ή-περισσότερες-με-την-πρώτη-προς-τα-αριστερά.png",
        alts: [
            "Warning: snake ahead",
            "Frequent lightning zone",
            "Electric current area"
        ]
    },
    {
        name: "Road narrows on right",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ο-δρόμος-στενεύει-στα-δεξιά.png",
        alts: [
            "Right lane reduction",
            "Tight squeeze right",
            "Narrowing right path"
        ]
    },
    {
        name: "Road narrows on left",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ο-δρόμος-στενεύει-στα-αριστερά.png",
        alts: [
            "Left lane squeeze",
            "Narrow left lane",
            "Tight left turn"
        ]
    },
    {
        name: "Road narrows on both sides",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ο-δρόμος-στενεύει-και-απο-τις-δύο-πλευρές.png",
        alts: [
            "Squeeze play passage",
            "The big pinch",
            "Tightrope tarmac"
        ]
    },
    {
        name: "Loose surface",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Χαλαρό-χαλικόστρωμα.png",
        alts: [
            "Gravel dance floor",
            "Rocky road ice cream zone",
            "Pebble party path"
        ]
    },
    {
        name: "Dual carriageway ends",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Τέλος-δρόμου-με-διαχωριστική-κεντρική-νησίδα.png",
        alts: [
            "Lanes' end",
            "Double trouble finish",
            "Two become one"
        ]
    },
    {
        name: "Risk of ice",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Κίνδυνος-παγετού.png",
        alts: [
            "Potential polar path",
            "Skating rink ahead",
            "Frosty freeway"
        ]
    },
    {
        name: "Warning for max height",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Περιορισμένο-ύψος.png",
        alts: [
            "Tall tale territory",
            "Overhead obstacle",
            "Giraffe's nightmare"
        ]
    },
    {
        name: "Overhead electric cables",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ηλεκτροφόρα-καλώδια-πάνω-από-το-δρόμο.png",
        alts: [
            "High voltage overhead",
            "Lightning lane",
            "Electric skyway"
        ]
    },
    {
        name: "Junctions with secondary roads",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολές-με-δευτερεύοντες-δρόμους-1.png",
        alts: [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        name: "Junctions with secondary roads",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολές-με-δευτερεύοντες-δρόμους-2.png",
        alts: [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        name: "Junctions with secondary roads",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολές-με-δευτερεύοντες-δρόμους-3.png",
        alts: [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        name: "Junctions with secondary roads",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολές-με-δευτερεύοντες-δρόμους-4.png",
        alts: [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        name: "Junctions with secondary roads",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολές-με-δευτερεύοντες-δρόμους-5.png",
        alts: [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        name: "Junctions with secondary roads",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολές-με-δευτερεύοντες-δρόμους-6.png",
        alts: [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        name: "Trams crossing ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολή-με-γραμμή-τράμ.png",
        alts: [
            "Trolley track territory",
            "Streetcar shuffle",
            "Railway rendezvous"
        ]
    },
    {
        name: "Traffic lights",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Φώτα-τροχαίας.png",
        alts: [
            "Luminous signals",
            "Colorful crossing command",
            "Illuminated intersection"
        ]
    },
    {
        name: "Junctions on bend ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολή-σε-στροφή-2.png",
        alts: [
            "Right hook intersection",
            "Sharp turn with crossroad",
            "Fork in the road right"
        ]
    },
    {
        name: "Junctions on bend ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συμβολή-σε-στροφή-1.png",
        alts: [
            "Right hook intersection",
            "Sharp turn with crossroad",
            "Fork in the road right"
        ]
    },
    {
        name: "Slippery road",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ολισθηρός-δρόμος.png",
        alts: [
            "Greasy grip ground",
            "Oil slick street",
            "Skid risk route"
        ]
    },
    {
        name: "Not controlled level crossing (no barrier/gate) ",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επίπεδη-διασταύρωση-με-σιδηροδρομική-γραμμή-χωρίς-φράγματα.png",
        alts: [
            "Unmanned railroad crossing",
            "Train trail crossing",
            "Freight path ford"
        ]
    },
    {
        name: "Grounding danger",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ανώμαλο-οδόστρωμα-κίνδυνος-για-οχήματα-μακράς-βάσης.png",
        alts: [
            "Chassis scraping section",
            "Undercarriage upheaval",
            "Belly scrape boulevard"
        ]
    },
    {
        name: "Traffic queues likely ahead",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-κυκλοφοριακή-συμφόρηση.png",
        alts: [
            "Congestion chaos",
            "Line-up likely",
            "Jam junction"
        ]
    },
    {
        name: "Agricultural vehicles",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-χρήση-δρόμου-από-γεωργικούς-ελκυστήρες.png",
        alts: [
            "Tractor traffic",
            "Farm fleet footway",
            "Harvest highway"
        ]
    },
    {
        name: "Controlled level crossing (with barrier/gate)",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Επίπεδη-διασταύρωση-με-σιδηροδρομική-γραμμή-με-κινητά-φράγματα.png",
        alts: [
            "Train track gate",
            "Locomotive line",
            "Barriered crossing"
        ]
    },
    {
        name: "Road works",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Οδικά-έργα.png",
        alts: [
            "Construction chaos",
            "Pavement patch-up",
            "Work zone wobble"
        ]
    },
    {
        name: "Low-flying aircraft or sudden aircraft noise",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Αεροδρόμιο-Χαμηλές-πτήσεις-αεροσκαφών.png",
        alts: [
            "Jet zone",
            "Aviator's alley",
            "Flight path proximity"
        ]
    },
    {
        name: "Low-flying helicopter or sudden helicopter noise",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Ελικοδρόμιο-χαμηλές-διελεύσεις-ελικοπτέρων.png",
        alts: [
            "Helicopter hangout",
            "Chopper crossing",
            "Rotorcraft recreation area"
        ]
    },
    {
        name: "Other Dangers",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Άλλοι-κίνδυνοι.png",
        alts: [
            "Caution: Variety of risks",
            "Miscellaneous menace",
            "Assorted alarms"
        ]
    },
    {
        name: "Slow-moving HGV on uphill",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Συχνή-χρήση-δρόμου-από-αργοκίνητα-οχήματα-σε-ανωφέρεια.png",
        alts: [
            "Heavy haulers' hill",
            "Big rig climb",
            "Trucker's trail"
        ]
    },
    {
        name: "Warning (with distance indication) that we are approaching a road with priority Give way",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Προειδοποίηση-με-ένδειξη-απόστασης-ότι-πλησιάζουμε-δρόμο-με-προτεραιότητα-ΔΩΣΕ-ΠΡΟΤΕΡΑΙΟΤΗΤΑ-180x180.png",
        alts: [
            "Main road merge",
            "Priority pathway",
            "Major road ahead"
        ]
    },
    {
        name: "Warning (with distance indication) that we are approaching a mandatory stop STOP",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Προειδοποίηση-με-ένδειξη-απόστασης-ότι-πλησιάζουμε-υποχρεωτική-στάση-ΣΤΑΜΑΤΑ1-180x180.png",
        alts: [
            "Halt ahead",
            "Sudden stop",
            "Brake for break"
        ]
    },
    {
        name: "Level crossing without barrier",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Προειδοποίηση-ότι-πλησιάζουμε-επίπεδη-διασταύρωση-με-σιδηροδρομική-γραμμή-χωρίς-φράγματα.png",
        alts: [
            "Unprotected train transit",
            "Rail crossing, caution!",
            "No barrier boulevard"
        ]
    },
    {
        name: "Crossroads with priority to the right",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Διασταύρωση-όπου-η-προτεραιότητα-καθοριζεται-από-τους-γενικούς-κανόνες-προτεραιότητας.png",
        alts: [
            "Right rule road",
            "Priority puzzle",
            "Right-of-way roadway"
        ]
    },
    {
        name: "Countdown markers may be provided when approaching a dangerous crossing. These divide the distance between the advance waring sign and the crossing into three equal parts",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Πρόσθετες-επαναληπτικές-πινακίδες-που-χρησιμοποιούνται-σε-συνδυασμό-με-τα-σήματα-κινδύνου-180x180.png",
        alts: [
            "Approaching peril",
            "Hazard countdown",
            "Danger distance markers"
        ]
    },
    {
        name: "Sharp deviation of the route to the left at road works or other temporary obstruction.",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Αλλαγή-πορείας-προς-τα-δεξιά-180x180.png",
        alts: [
            "Construction curve",
            "Detour dance",
            "Left-ward lean"
        ]
    },
    {
        name: "Change direction towards right.",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Αλλαγή-πορείας-προς-τα-αριστερά-180x180.png",
        alts: [
            "Right redirection",
            "Turn tendency",
            "Veering voyage"
        ]
    },
    {
        name: "Change direction towards left or right.",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Αλλαγή-πορείας-προς-τις-δύο-κατευθύνσεις-180x180.png",
        alts: [
            "Choose your path",
            "Direction dilemma",
            "Route roulette"
        ]
    },
    {
        name: "Compulsory pass from the right side. (passageway sign)",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Υποχρεωτική-διέλευση-από-δεξιά-νησίδας-ή-εμποδίου-180x180.png",
        alts: [
            "Mandatory right move",
            "Right passage protocol",
            "Required right rally"
        ]
    },
    {
        name: "Compulsory pass from the left side. (passageway sign)",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Υποχρεωτική-διέλευση-από-αριστερά-νησίδας-ή-εμποδίου-180x180.png",
        alts: [
            "Mandatory left move",
            "Left passage protocol",
            "Required left rally"
        ]
    },
    {
        name: "Compulsory pass from either side. (passageway sign)",
        src: "https://www.oneway.com.cy/wp-content/uploads/2015/05/Υποχρεωτική-διέλευση-από-αριστερά-ή-δεξιά-νησίδας-ή-εμποδίου-180x180.png",
        alts: [
            "Choice of passage",
            "Optional obstacle bypass",
            "Either-or excursion"
        ]
    }
]

export default imagesAndAlts;