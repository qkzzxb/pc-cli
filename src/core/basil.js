import Basil from 'basil.js'
const basil = new window.Basil({
    namespace: 'pc-cli',
    storages: ['cookie', 'session', 'local'],
    storage: 'session',
    expireDays: 0.1
});
export default basil;