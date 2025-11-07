document.addEventListener('DOMContentLoaded', () => {
    // DOM references for ease of use
    const numCandidatesInput = document.getElementById('numCandidates');
    const createFieldsBtn = document.getElementById('createFields');
    const addCandidateBtn = document.getElementById('addCandidate');
    const candidatesInputsDiv = document.getElementById('candidatesInputs');
    const numVotersInput = document.getElementById('numVoters');
    const startVotingBtn = document.getElementById('startVoting');

    const votingSection = document.getElementById('voting');
    const voterInfo = document.getElementById('voterInfo');
    const voteSelect = document.getElementById('voteSelect');
    const submitVoteBtn = document.getElementById('submitVote');
    const finishEarlyBtn = document.getElementById('finishEarly');
    const feedbackDiv = document.getElementById('feedback');

    const resultsSection = document.getElementById('results');
    const winnerHeading = document.getElementById('winnerHeading');
    const resultsList = document.getElementById('resultsList');
    const resetBtn = document.getElementById('reset');

    // Application state
    let candidates = []; // [{name, votes}, ...]
    let numVoters = 0;
    let currentVoter = 0;

    // Helper: create N text inputs to collect candidate names
    function createCandidateFields(n) {
        candidatesInputsDiv.innerHTML = '';
        for (let i = 0; i < n; i++) {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `
                <label>
                    Candidate ${i + 1}: <input class="candidateName" type="text" value="" />
                </label>
            `;
            candidatesInputsDiv.appendChild(wrapper);
        }
    }

    // Add a single candidate input field (used when user clicks Add candidate)
    function addCandidateField(value = '') {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <label>
                Candidate: <input class="candidateName" type="text" value="${value}" />
            </label>
        `;
        candidatesInputsDiv.appendChild(wrapper);
    }

    // Read candidate inputs and initialise the candidates array
    function readCandidatesFromInputs() {
        const inputs = Array.from(document.querySelectorAll('.candidateName'));
        const names = inputs.map(i => i.value.trim()).filter(n => n.length > 0);
        candidates = names.map(name => ({ name: name, votes: 0 }));
    }

    // Populate the voting <select> with current candidates and a "No vote" option
    function refreshVoteSelect() {
        voteSelect.innerHTML = '';
        const noVoteOption = document.createElement('option');
        noVoteOption.value = '__no_vote__';
        noVoteOption.textContent = '-- No vote --';
        voteSelect.appendChild(noVoteOption);

        candidates.forEach((c, idx) => {
            const opt = document.createElement('option');
            opt.value = String(idx);
            opt.textContent = `${c.name}`;
            voteSelect.appendChild(opt);
        });
    }

    // Compute and render results, sort by votes desc and announce winner
    function showResults() {
        const sorted = candidates.slice().sort((a, b) => b.votes - a.votes);

        resultsList.innerHTML = '';
        sorted.forEach(c => {
            const li = document.createElement('li');
            li.textContent = `${c.name}: ${c.votes} vote${c.votes !== 1 ? 's' : ''}`;
            resultsList.appendChild(li);
        });

        if (sorted.length > 0) {
            const winner = sorted[0];
            winnerHeading.textContent = `Winner: ${winner.name} (${winner.votes} vote${winner.votes !== 1 ? 's' : ''})`;
        } else {
            winnerHeading.textContent = 'Winner: — (no candidates)';
        }

        resultsSection.classList.remove('hidden');
        votingSection.classList.add('hidden');
    }

    // Reset app to initial state
    function resetApp() {
        candidates = [];
        numVoters = 0;
        currentVoter = 0;
        candidatesInputsDiv.innerHTML = '';
        voteSelect.innerHTML = '';
        resultsList.innerHTML = '';
        winnerHeading.textContent = 'Winner: —';

        document.getElementById('setup').classList.remove('hidden');
        votingSection.classList.add('hidden');
        resultsSection.classList.add('hidden');
    }

    // Event handlers wiring
    createFieldsBtn.addEventListener('click', () => {
        const n = parseInt(numCandidatesInput.value, 10) || 0;
        if (n > 0 && n <= 100) {
            createCandidateFields(n);
        } else {
            alert('Please enter a valid number of candidates (1-100).');
        }
    });

    addCandidateBtn.addEventListener('click', () => addCandidateField());

    startVotingBtn.addEventListener('click', () => {
        readCandidatesFromInputs();
        if (candidates.length === 0) {
            alert('Please provide at least one candidate before starting voting.');
            return;
        }

        numVoters = parseInt(numVotersInput.value, 10) || 0;
        if (numVoters < 0) numVoters = 0;

        document.getElementById('setup').classList.add('hidden');
        votingSection.classList.remove('hidden');

        currentVoter = 0;
        refreshVoteSelect();
        updateVoterInfo();
    });

    function updateVoterInfo() {
        voterInfo.textContent = `Voter ${Math.min(currentVoter + 1, numVoters)} of ${numVoters}`;
    }

    submitVoteBtn.addEventListener('click', () => {
        const val = voteSelect.value;
        if (val !== '__no_vote__') {
            const idx = parseInt(val, 10);
            if (!Number.isNaN(idx) && candidates[idx]) {
                candidates[idx].votes += 1;
            }
        }

        currentVoter += 1;

        if (currentVoter >= numVoters) {
            showResults();
        } else {
            feedbackDiv.textContent = 'Vote recorded ✅';
            feedbackDiv.classList.remove('hidden');
            submitVoteBtn.disabled = true;

            setTimeout(() => {
                feedbackDiv.classList.add('hidden');
                submitVoteBtn.disabled = false;
                voteSelect.value = '__no_vote__';
                updateVoterInfo();
                voteSelect.focus();
            }, 700);
        }
    });

    finishEarlyBtn.addEventListener('click', () => showResults());
    resetBtn.addEventListener('click', () => resetApp());

    // Initialize page with two candidate fields by default for convenience
    createCandidateFields(2);
});
