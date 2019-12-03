import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import Request from '../../helpers/request';

class ReportGuestMostBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: []
        }
        this.populateGuestsMostBookings = this.populateGuestsMostBookings.bind(this);
    }

    componentDidMount() {
        this.populateGuestsMostBookings();
    }

    populateGuestsMostBookings() {
        const request = new Request();
        const url = '/api/guests?size=1000';

        request.get(url)
            .then((json) => {
                const guests = json._embedded.guests.filter((guest) => {
                    if (guest.bookings.length > 0) {
                        return true;
                    }
                    return false;
                });

                const data = [["Guest", "Bookings"]];
                guests.map((guest) => {
                    data.push([guest.firstName + ' ' + guest.lastName, guest.bookings.length]);
                });

                this.setState({data: data});
            });
    }

    render() { 
        return (  
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={this.state.data}
                options={{
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        );
    }
}
 
export default ReportGuestMostBookings;