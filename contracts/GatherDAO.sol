// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract GatherDAO {
    struct Event {
        address organizer;
        string title;
        string description;
        uint256 price;
        uint256 deadline;
        uint256 no_of_seats;
        string location;
        address[] attendees;   
        string typee;     
    }

    mapping(uint256 => Event) public events;

    uint256 public numberOfEvents = 0;

    function createEvent(address _organizer, string memory _title, string memory _description, uint256 _price,
    uint256 _deadline, uint256 _no_of_seats, string memory _location, string memory _typee ) public returns (uint256) {
        
        Event storage eventt = events[numberOfEvents];

        require(eventt.deadline < block.timestamp, "Deadline should be a date in future");

        eventt.organizer = _organizer;
        eventt.title = _title;
        eventt.description = _description;
        eventt.price = _price;
        eventt.deadline = _deadline;
        eventt.no_of_seats = _no_of_seats;
        eventt.location = _location;
        eventt.typee = _typee;
        
        numberOfEvents++;
        
        return numberOfEvents - 1; 
    }

    function buyTickets(uint256 _id) public payable {
        uint256 amount = msg.value;

        Event storage eventt = events[_id];

        eventt.attendees.push(msg.sender);

        (bool sent,) = payable(eventt.organizer).call{value: amount}("");

        if(sent){
            eventt.no_of_seats = eventt.no_of_seats - 1;
        }
    }

    function getAttendees(uint256 _id) view public returns (address[] memory){
        return(events[_id].attendees);
    }

    function getEvents() public view returns (Event[] memory){
        Event[] memory allEvents = new Event[](numberOfEvents);

        for(uint i = 0; i < numberOfEvents; i++){
            Event storage item = events[i];
            allEvents[i] = item;
        }

        return allEvents;
    }

}