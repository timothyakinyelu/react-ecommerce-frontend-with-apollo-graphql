/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
    get(): any {
        // console.log('token')
        return localStorage.getItem('token');
    },

    remove(): null {
        localStorage.remove();
        return null;
    },

    decode(TOKEN: string): unknown {
        // const TOKEN = this.get();
        const payloadInfo = TOKEN.split('.')[1];
        return JSON.parse(atob(payloadInfo));
    },

    tokenPayload(TOKEN: string): any {
        return this.decode(TOKEN);
    },

    getTokenExiprationDate(): Date | null {
        const currentUser = this.get();
        const decoded = this.tokenPayload(currentUser);

        if (decoded['exp'] === undefined) return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded['exp']);
        return date;
    },

    isChecked(currentUser: string): boolean {
        // if (!currentUser) currentUser = this.get();
        if (!currentUser) return false;

        const date = this.getTokenExiprationDate();
        if (date === undefined) return false;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return date!.valueOf() > new Date().valueOf();
    },
};
