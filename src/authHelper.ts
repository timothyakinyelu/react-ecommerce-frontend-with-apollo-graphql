/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
    get(): any {
        return localStorage.getItem('token');
    },

    remove(): null {
        localStorage.remove();
        return null;
    },

    decode(TOKEN: string): unknown {
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
        if (!currentUser) return true;

        const date = this.getTokenExiprationDate();

        try {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const exp = date!.valueOf();

            if (Date.now() >= exp) {
                //token expired
                return false;
            } else {
                return true;
            }
        } catch {
            return false; //token is invalid
        }
    },

    // isAboutToExpire(currentUser: string): boolean {
    //     // if (!currentUser) currentUser = this.get();
    //     if (!currentUser) return false;

    //     const date = this.getTokenExiprationDate();
    //     const seconds = (date!.getTime() - Date.now()) / 1000;

    //     console.log(seconds);

    //     try {
    //         if (seconds >= 60) {
    //             //token expired
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     } catch {
    //         return false; //token is invalid
    //     }
    // },
};
