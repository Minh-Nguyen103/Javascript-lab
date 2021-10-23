import { countEmails } from './String-04-countEmails-main';

describe('countEmails(str)', () => {
    it('should return 0 in case str is empty', () => {
        expect(countEmails('')).toBe(0);
    });

    it('should return 0 in case email have domain in list domain default', () => {
        expect(countEmails('my account is pmnguyen@gmail.github')).toBe(0);
    });

    it('should return 0 in case index of @ not ', () => {
        expect(countEmails('')).toBe(0);
    });

    it('should return 0 in case domain not have in last email', () => {
        expect(countEmails('Minh Nguyen pmnguyen@gmail.com.vn.github')).toBe(0);
    });

    it('should return 0 in case email have string length before @ < 3', () => {
        expect(countEmails('Pham Minh Nguyen pm@gmail.com')).toBe(0);
        expect(countEmails('Pham Minh Nguyen @gmail.com')).toBe(0);
        expect(countEmails('Pham Minh Nguyen @ gmail.com')).toBe(0);
    });

    it('should return 0 in case email have string length after @ < 3', () => {
        expect(countEmails('Pham Minh Nguyen pmnguyen@a.com.vn')).toBe(0);
    });
});