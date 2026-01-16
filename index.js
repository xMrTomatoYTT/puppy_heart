function softBeat(duration = 120, maxRate = 12) {
    const start = performance.now();

    function tick(now) {
        const t = now - start;
        if (t >= duration) return;

        // curva suave (ease-out)
        const k = 1 - Math.pow(t / duration, 2);
        const interval = Math.max(8, maxRate * (1 - k));

        navigator.vibrate(8);
        setTimeout(() => requestAnimationFrame(tick), interval);
    }

    requestAnimationFrame(tick);
}

function heartbeat() {
    softBeat(140);          // lub
    setTimeout(() => {
        softBeat(90);       // dub más débil
    }, 180);

    setTimeout(heartbeat, 520);
}

heartbeat();
