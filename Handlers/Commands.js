const fs = require("fs");
const path = require("path");

module.exports = async client => {

    function loadCommands(directory) {
        const folderName = path.basename(directory);
        fs.readdirSync(directory).forEach(file => {
            const fullPath = path.resolve(directory, file);
            if (fs.statSync(fullPath).isDirectory()) {
                
                loadCommands(fullPath);
            } else if (file.endsWith('.js')) {
                try {
                    let command = require(fullPath);
                    if (!command.name || typeof command.name !== "string") {
                        throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas encore de nom !`);
                    }
                    client.commands.set(command.name, command);
                    console.log(`${folderName} Commande ${file}`);
                } catch (error) {
                    console.error(`Erreur lors du chargement de la commande ${file}:`, error);
                }
            }
        });
    }

    loadCommands("./Managers");
}