function getGrade(s1, s2, s3) {
    let notaP = (s1+s2+s3)/3
    let grado = ' '
    switch (true) {
      case notaP >= 0 && notaP < 60:
        grado = "F";
        break;
      case notaP >= 60 && notaP < 70:
        grado = "D";
        break;
      case notaP >= 70 && notaP < 80:
        grado = "C";
        break;
      case notaP >= 80 && notaP < 90:
        grado = "B";
        break;
      case notaP >= 90 && notaP <= 100:
        grado = "A";
        break;
      default:
        break;
    }

    return grado
}

console.log(getGrade(45,45,94))