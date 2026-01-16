let running = false;

function smoothPulse(length, peak) {
    const start = performance.now();

    function loop(now) {
        const t = now - start;
        if (t >= length) return;

        // envolvente gaussiana (mucho más suave que ease)
        const x = (t / length - 0.5) * 2;
        const env = Math.exp(-x * x * peak);

        const on = 6;
        const off = Math.max(2, 12 * (1 - env));

        navigator.vibrate(on);
        setTimeout(() => requestAnimationFrame(loop), off);
    }

    requestAnimationFrame(loop);
}

function heartbeat() {
    if (!running) return;

    smoothPulse(180, 3.5);        // lub
    setTimeout(() => {
        smoothPulse(110, 5.0);    // dub más débil
    }, 210);

    setTimeout(heartbeat, 620);
}

running = true;
heartbeat();

