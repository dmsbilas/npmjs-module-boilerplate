class BanglaTime {
    private constructor() { }
    public static banglaTime: BanglaTime;

    public static getInstance() {
        if (!BanglaTime.banglaTime) {
            BanglaTime.banglaTime = new BanglaTime();
        }
        return BanglaTime.banglaTime;
    }

    public Now() {
        return new Promise((resolve, reject) => {
            let currentTime = new Date().toLocaleTimeString('en-US'); // 4:18:56 PM
            let bengaliDateTime = this.Convert(currentTime).then((convertedDate)=>{
                console.log(convertedDate);
                resolve(convertedDate);
            }).catch((err)=>{
                console.log(err);
                reject(err);
            });

        });
    }

    private Convert(dateStr: string) {
        // 4:18:56 PM
        return new Promise((resolve, reject) => {
            let dateArr = dateStr.split(':');
            let hour = dateArr[0];
            let minutes = dateArr[1];
            let second_am_pm = dateArr[2].split(' ');
            let seconds = second_am_pm[0];
            let am_pm = second_am_pm[1];

            let numberMap = {
                '0': '০',
                '1': '১',
                '2': '২',
                '3': '৩',
                '4': '৪',
                '5': '৫',
                '6': '৬',
                '7': '৭',
                '8': '৮',
                '9': '৯',
                'PM': 'অপরাহ্ন',
                'AM': 'পূর্বাহ্ন'
            };

            for (var x in numberMap) {
                dateStr = dateStr.replace( new RegExp(x, "g"), numberMap[x]);
            }
            resolve(dateStr);
        });

    }

}

const banglaTime = BanglaTime.getInstance();
const now = async () => {
    await banglaTime.Now();
}

export { now };