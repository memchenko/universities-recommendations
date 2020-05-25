const scripts = [
    require('./plop/scripts/server.module'),
    require('./plop/scripts/client.entity'),
];

module.exports = (plop) => {
    scripts.forEach(initScript => initScript(plop));
}