// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  targetAmount: 700,
  paymentSuccess: true,
  donationSuccess: true,
  stopsSuccess: true,
  stops: [{
    Name : `bus stop 1`,
    ImageURL: '../../assets/busstop.jpg',
    Donations: [
        {
            Amount: 100,
            Donor: {
                Email: 'test1@test.com',
                Name: 'sample1'
            }
        },
        {
            Amount: 300,
            Donor: {
                Email: 'test2@test.com',
                Name: 'sample2'
            }
        }
    ]
  },
  {
    Name : `bus stop 2`,
    ImageURL: '../../assets/busstop.jpg',
    Donations: [
        {
            Amount: 100,
            Donor: {
                Email: 'test1@test.com',
                Name: 'sample1'
            }
        }
    ]
  },
  {
    Name : `bus stop 3`,
    ImageURL: '../../assets/busstop.jpg',
    Donations: [
        {
            Amount: 300,
            Donor: {
                Email: 'test2@test.com',
                Name: 'sample11'
            }
        },
        {
            Amount: 500,
            Donor: {
                Email: 'test21@test.com',
                Name: 'sample12'
            }
        }
    ]
  },
  {
    Name : `bus stop 4`,
    ImageURL: '../../assets/busstop.jpg',
    Donations: [
        {
            Amount: 400,
            Donor: {
                Email: 'test14@test.com',
                Name: 'sample1'
            }
        },
        {
            Amount: 100,
            Donor: {
                Email: 'test5@test.com',
                Name: 'sample5'
            }
        }
    ]
  },
  {
    Name : `bus stop 5`,
    ImageURL: '../../assets/busstop.jpg',
    Donations: [
        {
            Amount: 300,
            Donor: {
                Email: 'test31@test.com',
                Name: 'sample41'
            }
        },
        {
            Amount: 300,
            Donor: {
                Email: 'test51@test.com',
                Name: 'sample51'
            }
        }
    ]
  }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
