let copyCount = 0;
let dialResources = 100;
let supportCount = 0;
let availableResources = 100;



const refreshResourceTally = () => {
    document.getElementById('resource-tally').textContent = availableResources;
};





const duplicateNumber = number => {
    copyCount++;
    const input = document.createElement('input');
    input.value = number;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        alert(`Successfully copied ${number}!`);
        document.getElementById('copy-record').textContent = `${copyCount} Copy`;
    } catch (err) {
        alert('Copy operation failed.');
    }
    document.body.removeChild(input);
};




const incrementSupport = () => {
    supportCount++;
    document.getElementById('support-tally').textContent = supportCount;
};





const dialService = (serviceName, number) => {
    console.log(`Dialing ${serviceName} with ${dialResources} resources`);
    if (dialResources < 20) {
        alert(`Insufficient resources for ${serviceName} at ${number}. Require 20 resources.`);
        console.log('Dial attempt failed: low resources');
        return;
    }
    dialResources -= 20;
    availableResources = dialResources;
    alert(`Contacting ${serviceName} at ${number}`);
    const timestamp = new Date().toLocaleTimeString();
    console.log(`Contacted ${serviceName} at ${number} at ${timestamp}`);
    appendCallEntry(serviceName, number, timestamp);
    refreshResourceTally();
};



const appendCallEntry = (service, number, time) => {
    const history = document.getElementById('call-records');
    const entry = document.createElement('div');
    entry.className = 'call-record bg-[#FAFAFA] rounded-lg p-4 mb-2 ';
    entry.innerHTML = `<div class="flex justify-between"><div><span class="record-service text-[18px] text-black">${service}</span></div><div><span class="record-time text-black">${time}</span></div></div><span class="record-number text-[18px]">${number}</span>`;
    history.prepend(entry);
};










const setupEmergencyService = () => {
    refreshResourceTally();
    document.querySelectorAll('.service-item').forEach(item => {
        const heart = item.querySelector('img[alt="Heart"]');
        heart.addEventListener('click', incrementSupport);
    });
    document.getElementById('clear-tracker').addEventListener('click', resetHistory);
};

setupEmergencyService();