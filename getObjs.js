// using getter in an object literal

let meeting = {
    attendees: [],
    add(attendee){
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest(){
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
}

meeting.add('john').add('jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);