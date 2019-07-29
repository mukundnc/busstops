import { CalculatePipe } from './calculatepipe';
import { TestBed, async } from '@angular/core/testing';
import { Donation } from './donation';

describe('AppComponent', () => {
    let pipe: CalculatePipe;

    beforeEach(() => {
        pipe = new CalculatePipe()
    });

    it('pipe should be truthy', () => {
        expect(pipe).toBeTruthy();
    });

    it(`pipe should transform properly`, () => {
        const donations: Donation[] = [
            {
                Amount: 100,
                Donor: {
                    Name: '',
                    Email: ''
                }
            },
            {
                Amount: 200,
                Donor: {
                    Name: '',
                    Email: ''
                }
            },
            {
                Amount: 300,
                Donor: {
                    Name: '',
                    Email: ''
                }
            },
        ];
        expect(pipe.transform(donations)).toEqual(600);
    });

    it(`pipe should transform properly`, () => {
        let donations = null;
        expect(() => {pipe.transform(donations);}).toThrowError();
    });

});
