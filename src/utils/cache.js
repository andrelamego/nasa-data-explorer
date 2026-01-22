const PREFIX = "nasa-data-explorer";

export const getCache = (key) => {
    try {
        const raw = localStorage.getItem(`${PREFIX}:${key}`);
        if (!raw) return null;

        const { data, expiresAt } = JSON.parse(raw);

        if (expiresAt && Date.now() > expiresAt) {
            localStorage.removeItem(`${PREFIX}:${key}`);
            return null;
        }

        return data;
    } catch {
        return null;
    }
};

export const setCache = (key, data, ttlMs = null) => {
    const payload = {
        data,
        expiresAt: ttlMs ? Date.now() + ttlMs : null,
    };

    localStorage.setItem(`${PREFIX}:${key}`, JSON.stringify(payload));
};
