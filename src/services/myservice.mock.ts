
export class MockService {

    getBusStops() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    Name : `bus stop 1`,
                    ImageURL: '../../assets/busstop.jpg',
                    Donations: [{
                        Amount: 100,
                        Donor: {
                            Email: 'test1@test.com',
                            Name: 'sample1'
                        }
                    }]
                }
            ]);
        });
    }

    addDonation() {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

}
