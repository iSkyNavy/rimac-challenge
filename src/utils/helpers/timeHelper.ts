function calculateAge(dateOfBirth: string): number {
    const [dayOfBirth, monthOfBirth, yearOfBirth] = dateOfBirth.split("-");
    const birthDate: Date = new Date(parseInt(yearOfBirth), parseInt(monthOfBirth) - 1, parseInt(dayOfBirth));
    const currentDate: Date = new Date();

    let age: number = currentDate.getFullYear() - birthDate.getFullYear();
    const birthMonth: number = birthDate.getMonth() + 1;
    const currentMonth: number = currentDate.getMonth() + 1;
    const birthDay: number = birthDate.getDate();
    const currentDay: number = currentDate.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}

export { calculateAge }
