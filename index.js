let t = 0;

function vibration() {
    // intervalo que acelera y desacelera suavemente
    const interval = 12 + Math.sin(t) * 6; // de ~6ms a ~18ms

    navigator.vibrate(6);
    t += 0.05;

    setTimeout(vibration, interval);
}

vibration();
