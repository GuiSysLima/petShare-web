export function calculateAnimalAge(birthDate: string): string {
    const birth = new Date(birthDate)
    const now = new Date()

    let years = now.getFullYear() - birth.getFullYear()
    let months = now.getMonth() - birth.getMonth()
    const days = now.getDate() - birth.getDate()

    if (months < 0 || (months === 0 && days < 0)) {
        years--
        months += 12
    }

    if (years <= 0) {
        return `${(months / 12).toFixed(1)} anos`
    }

    return years === 1 ? '1 ano' : `${years} anos`
}
