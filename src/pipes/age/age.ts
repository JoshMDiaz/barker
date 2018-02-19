import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "age"
})
export class AgePipe implements PipeTransform {
  getYearsOld(birthday) {
    let convertedBirthday = new Date(birthday);
    let ageDifMs = Date.now() - convertedBirthday.getTime();
    let ageDate = new Date(ageDifMs);
    let ageNum = Math.abs(ageDate.getUTCFullYear() - 1970);
    return ageNum;
  }

  getMonthsOld(birthday) {
    let today = new Date();
    let convertedBirthday = new Date(birthday);
    let thisMonth = today.getMonth() + 1;
    let birthdayMonth = convertedBirthday.getMonth() + 1;
    return Math.abs(thisMonth - birthdayMonth + 12);
  }

  createAgeString(num, dateType) {
    if (num > 1) {
      dateType = dateType + "s";
    }
    let str = `${num} ${dateType} old`;
    if (num === 12) {
      str = '1 year old';
    }
    return str;
  }

  transform(birthday: string) {
    if (this.getYearsOld(birthday) > 0) {
      return this.createAgeString(this.getYearsOld(birthday), "year");
    } else {
      return this.createAgeString(this.getMonthsOld(birthday), "month");
    }
  }
}
