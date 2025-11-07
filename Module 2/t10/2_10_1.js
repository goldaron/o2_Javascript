/*
Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: Name for candidate 1
Store the candidates names and initial vote count in objects like this:
[
    {
        name: 'ellie',
        votes: 0,
    },
    {
        name: 'frank',
        votes: 0,
    },
    {
        name: 'pamela',
        votes: 0,
    },
]
The program asks for the number of voters.
The program asks each voter in turn who they will vote for. Voter should enter candidate name. If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:
The winner is pamela with 3 votes.
results:
pamela: 3 votes
frank: 1 votes
ellie: 1 votes
*/

document.addEventListener('DOMContentLoaded', () => {
    let numCandidates = parseInt(prompt("Enter the number of candidates:"), 10);
    let candidates = [];
    for (let i = 0; i < numCandidates; i++) {
        let name = prompt("Enter the name for candidate " + (i + 1) + ":");
        candidates.push({ name: name, votes: 0 });
    }

    let numVoters = parseInt(prompt("Enter the number of voters:"), 10);
    for (let i = 0; i < numVoters; i++) {
        let vote = prompt("Voter " + (i + 1) + ", enter the name of the candidate you vote for (or leave empty for no vote):");
        if (vote) {
            let candidate = candidates.find(c => c.name === vote);
            if (candidate) candidate.votes++;
            else console.log("No candidate found with the name: " + vote);
        }
    }

    candidates.sort((a,b) => b.votes - a.votes);
    let winner = candidates[0];
    console.log("The winner is " + winner.name + " with " + winner.votes + " votes.");
    console.log("Results:");
    for (let i = 0; i < candidates.length; i++) {
        console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
    }
});
