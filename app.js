var movements = [{
        "name": "Air Squat",
        "type": "Gymnastics"
    },
    {
        "name": "Box Jumps",
        "type": "Gymnastics"
    },
    {
        "name": "Burpee",
        "type": "Gymnastics"
    },
    {
        "name": "Dip",
        "type": "Gymnastics"
    },
    {
        "name": "GHD Sit Up",
        "type": "Gymnastics"
    },
    {
        "name": "Sit Up",
        "type": "Gymnastics"
    },
    {
        "name": "Handstand Push Up",
        "type": "Gymnastics"
    },
    {
        "name": "Handstand Walk",
        "type": "Gymnastics"
    },
    {
        "name": "Handstand Hold",
        "type": "Gymnastics"
    },
    {
        "name": "Hip / Bar Extension",
        "type": "Gymnastics"
    },
    {
        "name": "Toes to Bar",
        "type": "Gymnastics"
    },
    {
        "name": "Mountain Climber",
        "type": "Gymnastics"
    },
    {
        "name": "Lunges",
        "type": "Gymnastics"
    },
    {
        "name": "Muscle Up",
        "type": "Gymnastics"
    },
    {
        "name": "Pull Up",
        "type": "Gymnastics"
    },
    {
        "name": "Chest to Bar",
        "type": "Gymnastics"
    },
    {
        "name": "Push Up",
        "type": "Gymnastics"
    },
    {
        "name": "Ring Row",
        "type": "Gymnastics"
    },
    {
        "name": "V Sit Up",
        "type": "Gymnastics"
    },
    {
        "name": "Bear Crawl",
        "type": "Gymnastics"
    },
    {
        "name": "Rope Climb",
        "type": "Gymnastics"
    },
    {
        "name": "Pistol",
        "type": "Gymnastics"
    },
    {
        "name": "Back Squat",
        "type": "Weightlifting"
    },
    {
        "name": "Front Squat",
        "type": "Weightlifting"
    },
    {
        "name": "Overhead Squat",
        "type": "Weightlifting"
    },
    {
        "name": "Press",
        "type": "Weightlifting"
    },
    {
        "name": "Push Press",
        "type": "Weightlifting"
    },
    {
        "name": "Jerk",
        "type": "Weightlifting"
    },
    {
        "name": "Deadlift",
        "type": "Weightlifting"
    },
    {
        "name": "Sumo Deadlift",
        "type": "Weightlifting"
    },
    {
        "name": "Sumo Deadlift High Pull",
        "type": "Weightlifting"
    },
    {
        "name": "Medball Clean",
        "type": "Weightlifting"
    },
    {
        "name": "Clean",
        "type": "Weightlifting"
    },
    {
        "name": "Clean and Jerk",
        "type": "Weightlifting"
    },
    {
        "name": "Thruster",
        "type": "Weightlifting"
    },
    {
        "name": "Wallball",
        "type": "Weightlifting"
    },
    {
        "name": "Kettlebell Swing",
        "type": "Weightlifting"
    },
    {
        "name": "DB Snatch",
        "type": "Weightlifting"
    },
    {
        "name": "DB Clean and Jerk",
        "type": "Weightlifting"
    },
    {
        "name": "ManMakers",
        "type": "Weightlifting"
    },
    {
        "name": "Snatch",
        "type": "Weightlifting"
    },
    {
        "name": "Devils Press",
        "type": "Weightlifting"
    },
    {
        "name": "Plate G2OH",
        "type": "Weightlifting"
    },
    {
        "name": "Turkish Get Up",
        "type": "Weightlifting"
    },
    {
        "name": "Barbell Lunge",
        "type": "Weightlifting"
    },
    {
        "name": "DB Bench Press",
        "type": "Weightlifting"
    },
    {
        "name": "Shoulder to Overhead",
        "type": "Weightlifting"
    },
    {
        "name": "Double Unders / Skips",
        "type": "Monostructural"
    },
    {
        "name": "Rowing",
        "type": "Monostructural"
    },
    {
        "name": "Assault Bike",
        "type": "Monostructural"
    },
    {
        "name": "Running",
        "type": "Monostructural"
    },
    {
        "name": "Carries",
        "type": "Monostructural"
    }
]


var vm = new Vue({
    el: '#app',
    data: {
        mset: movements,
        wod: {
            "date": "",
            "name": "",
            "time": 0,
            "type": "",
            "priority": "",
            "repScheme": "",
            "movements": [
                //     {
                //     "name": "",
                //     "weight": 0,
                //     "reps": 0,
                //     "distance": 0
                // }
            ],
            "notes": ""
        },
        movementsTemp: {},
        qty: [{
            "name": "Distance"
        }, {
            "name": "Weight"
        }]
    },
    methods: {
        addMovement: function(event) {
            // `this` inside methods points to the Vue instance
            // alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            if (event) {
                // this.wod.date = this.movementsTemp.repScheme;
                this.wod.movements.push({
                    movement: this.movementsTemp.movement,
                    measure: {
                        type: this.movementsTemp.measure,
                        qty: this.movementsTemp.qty
                    },
                    reps: this.movementsTemp.reps
                })
            }
        }
    }
})