const getFlagEmoji = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
export const getCountryFlag = (countryCode) => {
  if (!countryCode) return '';
  return getFlagEmoji(countryCode);
}