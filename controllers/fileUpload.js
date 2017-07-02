' use strict';

module.exports = function(req, res) {
    if (!req.file) {
        res.json({ error: 'Please submit a file' });
    } else {
        const size = req.file.size;
        res.json({ fileSize: size });
    }
};