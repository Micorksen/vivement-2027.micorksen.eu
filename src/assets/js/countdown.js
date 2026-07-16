const firstElectionRoundDays = document.querySelector("#first-election-round-days");
const firstElectionRoundHours = document.querySelector("#first-election-round-hours");
const firstElectionRoundMinutes = document.querySelector("#first-election-round-minutes");
const firstElectionRoundSeconds = document.querySelector("#first-election-round-seconds");

const secondElectionRoundDays = document.querySelector("#second-election-round-days");
const secondElectionRoundHours = document.querySelector("#second-election-round-hours");
const secondElectionRoundMinutes = document.querySelector("#second-election-round-minutes");
const secondElectionRoundSeconds = document.querySelector("#second-election-round-seconds");

// Basé sur https://www.service-public.gouv.fr/particuliers/vosdroits/F1939.
const firstElectionRoundDate = new Date("2027-04-18T18:00:00Z");
const secondElectionRoundDate = new Date("2027-05-02T18:00:00Z");

// Fonction codée à l'aide d'IA.
const difference = (a, b) => {
    let totalSeconds = Math.floor((a.getTime() - b.getTime()) / 1000);
    if (totalSeconds < 0) totalSeconds = 0;

    const days = Math.floor(totalSeconds / 86400);
    totalSeconds -= days * 86400;

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    return { days, hours, minutes, seconds };
};

const runCountdown = () => {
    const now = new Date();

    // Premier tour
    const firstElectionRoundDifference = difference(firstElectionRoundDate, now);
    firstElectionRoundDays.innerHTML = firstElectionRoundDifference["days"];
    firstElectionRoundHours.innerHTML = firstElectionRoundDifference["hours"];
    firstElectionRoundMinutes.innerHTML = firstElectionRoundDifference["minutes"];
    firstElectionRoundSeconds.innerHTML = firstElectionRoundDifference["seconds"];

    // Second tour
    const secondElectionRoundDifference = difference(secondElectionRoundDate, now);
    secondElectionRoundDays.innerHTML = secondElectionRoundDifference["days"];
    secondElectionRoundHours.innerHTML = secondElectionRoundDifference["hours"];
    secondElectionRoundMinutes.innerHTML = secondElectionRoundDifference["minutes"];
    secondElectionRoundSeconds.innerHTML = secondElectionRoundDifference["seconds"];
};

document.addEventListener("DOMContentLoaded", () => {
    runCountdown();
    setInterval(runCountdown, 1000);
});