const alts = [
    {
        "name": "Falling rocks",
        "alts": [
            "Caution: crumbling cliff edges",
            "Beware of jagged terrain",
            "Mountain goat territory"
        ]
    },
    {
        "name": "Cattle",
        "alts": [
            "Possible cow parade",
            "Farmyard animals on road",
            "Moo-ving hazards"
        ]
    },
    {
        "name": "Wild animals",
        "alts": [
            "Possible safari sighting",
            "Forest creatures crossing",
            "Animal kingdom"
        ]
    },
    {
        "name": "Side winds",
        "alts": [
            "Flying debris possible",
            "Hold on to your hats",
            "Windmill zone"
        ]
    },
    {
        "name": "Frequent use of road by pedestrians",
        "alts": [
            "Community gathering spot",
            "High foot-traffic shopping area",
            "Marathon route"
        ]
    },
    {
        "name": "Uneven road",
        "alts": [
            "Roller coaster tarmac",
            "Rumble strip ahead",
            "Off-road terrain"
        ]
    },
    {
        "name": "Humped bridge",
        "alts": [
            "Watch for jumping fish",
            "Rolling river crossing",
            "Aqueduct ahead"
        ]
    },
    {
        "name": "Road hump ahead",
        "alts": [
            "Giant's speed breaker",
            "Camel's back crossing",
            "Undulating road surface"
        ]
    },
    {
        "name": "Pedestrian crossing",
        "alts": [
            "Striped pathway",
            "Cross-hatch terrain",
            "Pavement art ahead"
        ]
    },
    {
        "name": "Frequent use of road by childern",
        "alts": [
            "Toy scattering zone",
            "Kite flying area",
            "Junior sports league"
        ]
    },
    {
        "name": "Warning! Elderly people crossing the road",
        "alts": [
            "Retirement village ahead",
            "Senior citizen stroll path",
            "Leisure walk zone"
        ]
    },
    {
        "name": "School crossing",
        "alts": [
            "Young scholars' path",
            "Homework crossing",
            "Youth crossroads"
        ]
    },
    {
        "name": "Verge on the right",
        "alts": [
            "Ditch diving danger",
            "Right-side rally route",
            "Gutter runners"
        ]
    },
    {
        "name": "Two-way traffic straight ahead",
        "alts": [
            "Converging lanes",
            "Head-on approach",
            "Two-lane territory"
        ]
    },
    {
        "name": "Two-way traffic crosses one-way road",
        "alts": [
            "Intersecting pathways",
            "Tangle of traffic",
            "Merge and meet"
        ]
    },
    {
        "name": "Tunnel ahead",
        "alts": [
            "Subterranean passage",
            "Underground exploration",
            "Cave entry route"
        ]
    },
    {
        "name": "Steep hill downwards",
        "alts": [
            "Roller descent",
            "Gravity boost area",
            "Downward dash"
        ]
    },
    {
        "name": "Steep hill upwards",
        "alts": [
            "Mountain climber's route",
            "Ascent challenge",
            "Uphill exertion area"
        ]
    },
    {
        "name": "Roundabout",
        "alts": [
            "Merry-go-round junction",
            "Circular logic area",
            "Rotating road"
        ]
    },
    {
        "name": "Dangerous bend to the right",
        "alts": [
            "Twisty turn",
            "Sudden swerve required",
            "Right-angled rally"
        ]
    },
    {
        "name": "Dangerous bend to the left",
        "alts": [
            "Leftward lunge",
            "Hook turn territory",
            "Veering venture"
        ]
    },
    {
        "name": "Double bend first to right",
        "alts": [
            "Zigzag road ahead",
            "Wavy route warning",
            "Serpentine street"
        ]
    },
    {
        "name": "Double bend first to left",
        "alts": [
            "Warning: snake ahead",
            "Frequent lightning zone",
            "Electric current area"
        ]
    },
    {
        "name": "Road narrows on both sides",
        "alts": [
            "Squeeze play passage",
            "The big pinch",
            "Tightrope tarmac"
        ]
    },
    {
        "name": "Loose surface",
        "alts": [
            "Gravel dance floor",
            "Rocky road ice cream zone",
            "Pebble party path"
        ]
    },
    {
        "name": "Dual carriageway ends",
        "alts": [
            "Lanes' end",
            "Double trouble finish",
            "Two become one"
        ]
    },
    {
        "name": "Risk of ice",
        "alts": [
            "Potential polar path",
            "Skating rink ahead",
            "Frosty freeway"
        ]
    },
    {
        "name": "Warning for max height",
        "alts": [
            "Tall tale territory",
            "Overhead obstacle",
            "Giraffe's nightmare"
        ]
    },
    {
        "name": "Overhead electric cables",
        "alts": [
            "High voltage overhead",
            "Lightning lane",
            "Electric skyway"
        ]
    },
    {
        "name": "Junctions with secondary roads",
        "alts": [
            "Less traveled road meet",
            "Side street shuffle",
            "Minor road merge"
        ]
    },
    {
        "name": "Trams crossing ahead",
        "alts": [
            "Trolley track territory",
            "Streetcar shuffle",
            "Railway rendezvous"
        ]
    },
    {
        "name": "Traffic lights",
        "alts": [
            "Luminous signals",
            "Colorful crossing command",
            "Illuminated intersection"
        ]
    },
    {
        "name": "Junctions on bend ahead",
        "alts": [
            "Right hook intersection",
            "Sharp turn with crossroad",
            "Fork in the road right"
        ]
    },
    {
        "name": "Slippery road",
        "alts": [
            "Greasy grip ground",
            "Oil slick street",
            "Skid risk route"
        ]
    },
    {
        "name": "Not controlled level crossing (no barrier/gate)",
        "alts": [
            "Unmanned railroad crossing",
            "Train trail crossing",
            "Freight path ford"
        ]
    },
    {
        "name": "Grounding danger",
        "alts": [
            "Chassis scraping section",
            "Undercarriage upheaval",
            "Belly scrape boulevard"
        ]
    },
    {
        "name": "Traffic queues likely ahead",
        "alts": [
            "Congestion chaos",
            "Line-up likely",
            "Jam junction"
        ]
    },
    {
        "name": "Agricultural vehicles",
        "alts": [
            "Tractor traffic",
            "Farm fleet footway",
            "Harvest highway"
        ]
    },
    {
        "name": "Controlled level crossing (with barrier/gate)",
        "alts": [
            "Train track gate",
            "Locomotive line",
            "Barriered crossing"
        ]
    },
    {
        "name": "Road works",
        "alts": [
            "Construction chaos",
            "Pavement patch-up",
            "Work zone wobble"
        ]
    },
    {
        "name": "Low-flying aircraft or sudden aircraft noise",
        "alts": [
            "Jet zone",
            "Aviator's alley",
            "Flight path proximity"
        ]
    },
    {
        "name": "Low-flying helicopter or sudden helicopter noise",
        "alts": [
            "Helicopter hangout",
            "Chopper crossing",
            "Rotorcraft recreation area"
        ]
    },
    {
        "name": "Other Dangers",
        "alts": [
            "Caution: Variety of risks",
            "Miscellaneous menace",
            "Assorted alarms"
        ]
    },
    {
        "name": "Slow-moving HGV on uphill",
        "alts": [
            "Heavy haulers' hill",
            "Big rig climb",
            "Trucker's trail"
        ]
    },
    {
        "name": "Warning (με ένδειξη απόστασης) ότι πλησιάζουμε δρόμο με προτεραιότητα Give away",
        "alts": [
            "Main road merge",
            "Priority pathway",
            "Major road ahead"
        ]
    },
    {
        "name": "Προειδοποίηση (με ένδειξη απόστασης) ότι πλησιάζουμε υποχρεωτική στάση ΣΤΑΜΑΤΑ",
        "alts": [
            "Halt ahead",
            "Sudden stop",
            "Brake for break"
        ]
    },
    {
        "name": "Level crossing without barrier",
        "alts": [
            "Unprotected train transit",
            "Rail crossing, caution!",
            "No barrier boulevard"
        ]
    },
    {
        "name": "Crossroads with priority to the right",
        "alts": [
            "Right rule road",
            "Priority puzzle",
            "Right-of-way roadway"
        ]
    },
    {
        "name": "Countdown markers may be provided when approaching a dangerous crossing. These divide the distance between the advance waring sign and the crossing into three equal parts",
        "alts": [
            "Approaching peril",
            "Hazard countdown",
            "Danger distance markers"
        ]
    },
    {
        "name": "Sharp deviation of the route to the left at road works or other temporary obstruction.",
        "alts": [
            "Construction curve",
            "Detour dance",
            "Left-ward lean"
        ]
    },
    {
        "name": "Change direction towards right.",
        "alts": [
            "Right redirection",
            "Turn tendency",
            "Veering voyage"
        ]
    },
    {
        "name": "Change direction towards left or right.",
        "alts": [
            "Choose your path",
            "Direction dilemma",
            "Route roulette"
        ]
    },
    {
        "name": "Compulsory pass from the right side. (passageway sign)",
        "alts": [
            "Mandatory right move",
            "Right passage protocol",
            "Required right rally"
        ]
    },
    {
        "name": "Compulsory pass from the left side. (passageway sign)",
        "alts": [
            "Mandatory left move",
            "Left passage protocol",
            "Required left rally"
        ]
    },
    {
        "name": "Compulsory pass from either side. (passageway sign)",
        "alts": [
            "Choice of passage",
            "Optional obstacle bypass",
            "Either-or excursion"
        ]
    }
]

export default alts;