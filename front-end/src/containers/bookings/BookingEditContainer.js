import React, { Component } from 'react';
import BookingEditForm from '../../components/bookings/BookingEditForm';
import Request from '../../helpers/request';

class BookingEditContainer extends Component {
    constructor(props) {
        super(props);
        this.handleBookingUpdate = this.handleBookingUpdate.bind(this);
    }

    handleBookingUpdate(booking){
        const request = new Request();
        request.patch('/api/bookings/' + this.props.booking.id, booking).then(() => {
            window.location = 'api/bookings/' + this.props.booking.id
        })
    }

    render() { 
        return ( 
            <BookingEditForm
            booking={this.props.booking}
            guests={this.props.guests}
            rooms={this.props.rooms}
            handleBookingUpdate={this.handleBookingUpdate}
            />
         );
    }
}
 
export default BookingEditContainer;