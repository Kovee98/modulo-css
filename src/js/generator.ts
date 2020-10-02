/*
    the main file that generates the dynamic css output
*/

function readFile (path: string) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", path, false);
    
        req.onreadystatechange = function () {
            if(req.readyState === 4) {
                if(req.status === 200 || req.status == 0) {
                    return resolve(req.responseText);
                } else {
                    return reject({
                        status: req.status,
                        response: req.responseText
                    });
                }
            }
        }
    
        req.send(null);
    });
}

function minify (src: string) {
    return src
        .replace(/\/\*(.|\n)*?\*\//g, '')   // Remove '/*  */' comments.
        .replace(/\/\/(.)*/g, '')           // Remove '//' comments.
        .replace(/[ \n\t\r]+/g, '');        // Remove all whitespace
}

export default async function (form: Form) {
    try {
        const modules = form.modules || [];
        let genFile = '';

        for (let i = 0; i < modules.length; i++) {
            const module = modules[i];
            const name = module.name;

            const data = await readFile(`./src/modules/${name}/${name}.scss`);

            genFile += data;
            genFile += '\n\n';
        }

        console.log('genFile:', genFile);
        console.log(minify(genFile));
    } catch (err) {
        console.error(err);
    }
};
