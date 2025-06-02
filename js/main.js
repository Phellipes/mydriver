function showPassengerSignup() {
    document.getElementById('passenger-signup').classList.remove('hidden');
    document.getElementById('passenger-signup').classList.add('block');
    document.getElementById('driver-signup').classList.add('hidden');
    document.getElementById('forms').scrollIntoView({ behavior: 'smooth' });
}

function showDriverSignup() {
    document.getElementById('driver-signup').classList.remove('hidden');
    document.getElementById('driver-signup').classList.add('block');
    document.getElementById('passenger-signup').classList.add('hidden');
    document.getElementById('forms').scrollIntoView({ behavior: 'smooth' });
}

function closeSignup() {
    document.getElementById('passenger-signup').classList.add('hidden');
    document.getElementById('driver-signup').classList.add('hidden');
}
