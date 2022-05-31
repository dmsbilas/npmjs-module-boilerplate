"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
class BanglaTime {
    constructor() { }
    static getInstance() {
        if (!BanglaTime.banglaTime) {
            BanglaTime.banglaTime = new BanglaTime();
        }
        return BanglaTime.banglaTime;
    }
    Now() {
        return new Promise((resolve, reject) => {
            let currentTime = new Date().toLocaleTimeString('en-US'); // 4:18:56 PM
            let bengaliDateTime = this.Convert(currentTime).then((convertedDate) => {
                console.log(convertedDate);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    Convert(dateStr) {
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
                dateStr = dateStr.replace(new RegExp(x, "g"), numberMap[x]);
            }
            resolve(dateStr);
        });
    }
}
const banglaTime = BanglaTime.getInstance();
const now = () => __awaiter(void 0, void 0, void 0, function* () {
    yield banglaTime.Now();
});
exports.now = now;
//# sourceMappingURL=BanglaTime.js.map