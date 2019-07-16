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
      this.kidsByGrade[grade].push(name)
    } else {
      this.kidsByGrade = { ...this.kidsByGrade, [grade]: [name]}
    }
  }

  grade(grade) {
    const gradeList = this.kidsByGrade[grade] || [];
    return gradeList.sort()
  }
}
