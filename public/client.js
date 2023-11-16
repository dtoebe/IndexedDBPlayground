const seedData = [
    { name: "Foo", desc: "Bar", count: 1 },
    { name: "Bar", desc: "Foo", count: 3 },
    { name: "Boo", desc: "Loo", count: 50 },
    { name: "Loo", desc: "Boo", count: 200 },
    { name: "ass", desc: "dd", count: 1 },
    { name: "dfg", desc: "sdf", count: 13 },
    { name: "cat", desc: "bar", count: 14 },
    { name: "hat", desc: "bAr", count: 15 },
    { name: "fat", desc: "baR", count: 16 },
    { name: "lat", desc: "bAR", count: 17 },
    { name: "lnng", desc: "BaR", count: 18 },
    { name: "poo", desc: "poo", count: 19 },
    { name: "doo", desc: "foo", count: 10 },
    { name: "moo", desc: "sdf", count: 11 },
    { name: "err", desc: "ert", count: 12 },
    { name: "info", desc: "err", count: 13 },
    { name: "warn", desc: "wrn", count: 14 },
    { name: "coo", desc: "inf", count: 15 },
    { name: "koo", desc: "mi6", count: 16 },
    { name: "mkk", desc: "mi5", count: 17 },
    { name: "de", desc: "rty", count: 18 },
];

const DB_NAME = "demoDB";
const DB_VERS = 1;
const DB_STORE = "stuffs";

window.onload = () => {
};

const ClickInitDB = () => {
    let openDB = window.indexedDB.open(DB_NAME, DB_VERS);
    openDB.onupgradeneeded = () => {
        let db = openDB.result;
        db.createObjectStore(DB_STORE, { keyPath: "id", autoIncrement: true});
    };
};

const ClickSeedData = () => {
    let openDB = window.indexedDB.open(DB_NAME, DB_VERS);
    // Not going to check if upgraded needed Click init db first or fail
    openDB.onsuccess = () => {
        let db = openDB.result;
        let transaction = db.transaction([DB_STORE], "readwrite");
        let objStore = transaction.objectStore(DB_STORE);
        for (let i = 0; i < seedData.length; i++) {
            objStore.add(seedData[i]);
        }
    };
};

const ClickGetKeys = () => {
    let openDB = window.indexedDB.open(DB_NAME, DB_VERS);
    openDB.onsuccess = () => {
        let db = openDB.result;
        let transaction = db.transaction([DB_STORE], "readonly");
        let objStore = transaction.objectStore(DB_STORE);
        let req = objStore.getAllKeys();
        req.onsuccess = () => {
            console.log(req.result);
        };
    };
};