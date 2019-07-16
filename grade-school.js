//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.kidsByGrade = {}
  }

  roster() {
    return this.kidsByGrade
  }

  add(name, grade) {
    const kidsInGrade = this.grade(grade);

    if (kidsInGrade.length > 0) {
      this.kidsByGrade[grade] = [...kidsInGrade, name].sort()
    } else {
      this.kidsByGrade = { ...this.kidsByGrade, [grade]: [name]}
    }
  }

  grade(grade) {
    return this.kidsByGrade[grade] || [];
  }
}
