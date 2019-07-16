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
    if (this.kidsByGrade[grade]) {
      this.kidsByGrade[grade] = [...this.kidsByGrade[grade], name].sort()
    } else {
      this.kidsByGrade = { ...this.kidsByGrade, [grade]: [name]}
    }
  }

  grade(grade) {
    return this.kidsByGrade[grade] || [];
  }
}
